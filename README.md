# 📋 Candidate List Viewer

This is a simple 🛠️ full-stack project that displays a list of 🧑‍💻 candidates with mock data served from a backend API. The project includes:

- A **backend** built with 🟢 Node.js and ⚡ Express.
- A **frontend** built with ⚛️ React and ⚡ Vite.

## ⭐ Features

- 🔍 Fetches and displays a list of 🧑‍💻 candidates.
- 🔎 Search functionality to filter candidates by 🏷️ name or 🛠️ skills.
- ↕️ Sorting functionality to order candidates by 📆 years of experience (ascending/descending).

---

## 🧰 Prerequisites

Before starting, make sure you have the following installed on your 🖥️ system:

- 🟢 Node.js (v14 or higher)
- 📦 npm (v6 or higher)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ankit5646/candidate-list-viewer.git
cd candidate-list-viewer
```

---

## 🗂️ Project Structure

The project structure is as follows:

```
📁 PROJECT
├── 📁 ques1
    ├── 📁 candidatelist (frontend folder)
    ├── 📁 node_modules (backend dependencies folder)
    ├── 📄 package-lock.json (backend lock file)
    ├── 📄 package.json (backend package file)
    ├── 📄 server.js (backend entry file)
```

---

## 🖧 Backend Setup

### 🪜 Steps:

1. Navigate to the `ques1` directory:

   ```bash
   cd ques1
   ```

2. Install dependencies:

   ```bash
   npm install express cors
   ```

3. The `server.js` file contains the backend code. Ensure it looks like this:

   ```javascript
   const express = require('express');
   const cors = require('cors');
   const app = express();
   const PORT = 5000;

   // Enable CORS
   app.use(cors());

   // Hardcoded list of candidates
   const candidates = [
       { id: 1, name: "Alice Johnson", skills: "JavaScript, React", experience: 5 },
       { id: 2, name: "Bob Smith", skills: "Python, Django", experience: 3 },
       { id: 3, name: "Charlie Brown", skills: "Java, Spring Boot", experience: 7 },
       { id: 4, name: "Diana Prince", skills: "HTML, CSS, Tailwind", experience: 2 },
       { id: 5, name: "Ethan Hunt", skills: "Node.js, Express", experience: 6 },
       { id: 6, name: "Fiona Gallagher", skills: "SQL, PostgreSQL", experience: 4 },
       { id: 7, name: "George Weasley", skills: "C++, Algorithms", experience: 8 },
       { id: 8, name: "Hannah Baker", skills: "Ruby, Rails", experience: 3 },
       { id: 9, name: "Isaac Clarke", skills: "Go, Kubernetes", experience: 5 },
       { id: 10, name: "Jane Doe", skills: "PHP, Laravel", experience: 2 },
   ];

   // API endpoint to fetch candidates
   app.get('/api/candidates', (req, res) => {
       res.json(candidates);
   });

   // Start the server
   app.listen(PORT, () => {
       console.log(`Server is running on http://localhost:${PORT}`);
   });
   ```

4. Start the backend server:

   ```bash
   node server.js
   ```

5. Verify the backend is running by visiting:

   ```
   http://localhost:5000/api/candidates
   ```

---

## 🌐 Frontend Setup (candidatelist)

### 🪜 Steps:

1. Navigate to the `candidatelist` directory:

   ```bash
   cd candidatelist
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm run dev
   ```

4. Open the app in your 🌐 browser at:

   ```
   http://localhost:5173
   ```

---

## 🧪 Testing the Application

1. Ensure the backend server is running:
   ```bash
   node server.js
   ```
2. Ensure the frontend server is running:
   ```bash
   npm run dev
   ```
3. Use the app to:
   - 🔍 Search for candidates by 🏷️ name or 🛠️ skills.
   - ↕️ Sort candidates by 📆 years of experience.

---

## 📝 Additional Notes

- Make sure both backend and frontend are running simultaneously.
- If you encounter any 🛑 CORS issues, ensure that the `cors` middleware is correctly set up in `server.js`.

Feel free to contribute or report issues by opening a pull request or an issue on the 🐙 GitHub repository! 🚀

