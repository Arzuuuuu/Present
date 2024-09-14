const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// POST endpoint to save each answer to a text file
app.post('/save', (req, res) => {
    const { question, answer } = req.body;
    const filePath = path.join(__dirname, 'answers.txt');

    // Format the question and answer
    const entry = `
    Question: ${question}
    Answer: ${answer}
    ------------------------
    `;

    // Append the entry to the file
    fs.appendFile(filePath, entry, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to save answer' });
        }
        res.json({ message: 'Answer saved successfully!' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
