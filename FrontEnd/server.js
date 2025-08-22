const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const frontendPath = path.join(__dirname, 'public');

app.use(express.static(frontendPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(frontendPath, 'Home', 'index.html'));
});


app.get('/about', (req, res) => {
    res.sendFile(path.join(frontendPath, 'About', 'about.html'));
});


app.get('/doctors', (req, res) => {
    res.sendFile(path.join(frontendPath, 'Doctors', 'doctors.html'));
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});