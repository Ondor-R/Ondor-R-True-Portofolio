    const express = require('express');
    const path = require('path');
    const app = express();
    const port = 3000; // Or any other desired port

    // Serve static files (HTML, CSS, images, client-side JS) from a 'public' directory
    app.use(express.static(path.join(__dirname, 'public')));

    // Define a route for the root URL to serve your main HTML file
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });