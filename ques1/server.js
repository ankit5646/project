const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const PORT = 5000;


const candidates = [
    { id: 1, name: "Amandeep", skills: "JavaScript, React", experience: 5 },
    { id: 2, name: "Bob Smith", skills: "Python, Django", experience: 3 },
    { id: 3, name: "Charlie Chapline", skills: "Java, Spring Boot", experience: 7 },
    { id: 4, name: "Prince", skills: "HTML, CSS, Tailwind", experience: 2 },
    { id: 5, name: "Eli", skills: "Node.js, Express", experience: 6 },
    { id: 6, name: "Frhan Akhtar", skills: "SQL, PostgreSQL", experience: 4 },
    { id: 7, name: "Goldy Yadav", skills: "C++, Algorithms", experience: 8 },
    { id: 8, name: "Harsh Bhati", skills: "Ruby, Rails", experience: 3 },
    { id: 9, name: "Isaac Singh", skills: "Go, Kubernetes", experience: 5 },
    { id: 10, name: "Jane Doe", skills: "PHP, Laravel", experience: 2 },
];


app.get('/api/candidates', (req, res) => {
    res.json(candidates);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
