const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const fs = require('fs');

async function loginToLinkedIn(page, email, password) {
    await page.goto('https://www.linkedin.com/login');
    await page.waitForSelector('input[name="session_key"]'); // Wait for email input field

    // Enter credentials
    await page.type('input[name="session_key"]', email, { delay: 100 });
    await page.type('input[name="session_password"]', password, { delay: 100 });

    // Click the login button
    await page.click('button[type="submit"]');
    await page.waitForNavigation({ waitUntil: 'load', timeout: 60000 });

    console.log('Logged in to LinkedIn');
}

async function crawlLinkedIn(urls, email, password) {
    const browser = await puppeteer.launch({ headless: false });  // Launch in non-headless mode for debugging
    const page = await browser.newPage();
    
    // Set user-agent to avoid bot detection
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');

    // Log in to LinkedIn
    await loginToLinkedIn(page, email, password);

    const crawledData = [];

    for (const url of urls) {
        try {
            // Go to the URL and ensure full page load
            await page.goto(url, { waitUntil: 'load', timeout: 60000 });
            await page.waitForSelector('h1');  // Wait for the title or a key element to load

            // Scroll the page if necessary to load dynamic content
            for (let i = 0; i < 3; i++) {
                await page.evaluate(() => window.scrollBy(0, window.innerHeight));
                //await page.waitFor(2000);  // Random delay (wait for 2 seconds)
            }

            // Extract page content
            const content = await page.content();
            const $ = cheerio.load(content);

            // Extract data
            const profileData = extractProfileData($);
            const companyData = extractCompanyData($);

            if (profileData.name) {
                crawledData.push({ type: 'Profile', ...profileData });
            }
            if (companyData.companyName) {
                crawledData.push({ type: 'Company', ...companyData });
            }
        } catch (err) {
            console.error(`Error processing ${url}:`, err);
        }
    }

    await browser.close();
    saveData(crawledData);
}


//extract profile information
function extractProfileData($) {
    const name = $('h1').text().trim() || null;
    const jobTitle = $('.text-body-medium').text().trim() || null;
    const location = $('.text-body-small').text().trim() || null;
    const summary = $('section.pv-about-section').text().trim() || null;

    return { name, jobTitle, location, summary };
}


//extract company information
function extractCompanyData($) {
    const companyName = $('h1.org-top-card-summary__title').text().trim() || null;
    const industry = $('div.org-top-card-summary-info-list__info-item').next().text().trim() || null;
    const headquartersLocation = $('div.org-top-card-summary-info-list__info-item').next().text().trim() || null;
    const overview = $('p.break-words white-space-pre-wrap t-black--light text-body-medium').text().trim() || null;

    return { companyName, industry, headquartersLocation, overview };
}


//save data
function saveData(data) {
    fs.writeFileSync('linkedin-crawled-data.json', JSON.stringify(data, null, 2), 'utf-8');
    console.log('Data saved to linkedin-crawled-data.json');
}

// Add your LinkedIn credentials here
const email = 'example@gmail.com'; // Your LinkedIn email
const password = 'pass@word'; // Your LinkedIn password

const urls = [
    'https://www.linkedin.com/in/sundarpichai/',  // Example URL
    'https://www.linkedin.com/school/free-code-camp/'   // Example URL
];

crawlLinkedIn(urls, email, password);
