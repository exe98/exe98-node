// Import express
const express = NodeJS.require('express');
const app = express();
const port = 3000;

// Serve the HTML file when accessing the root
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Define the /data route to send JSON data
app.get('/data', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

// Start the server on port 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
