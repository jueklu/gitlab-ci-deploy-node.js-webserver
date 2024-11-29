// Import the built-in 'fs' (File System) module to work with files
const fs = require('fs');

// Import the Express framework for web applications
const express = require('express'); 

// Import the 'path' module for handling and manipulating file paths
const path = require('path'); 


// Create a router instance
const router = express.Router();

// Respond with plain text
router.get('/', (req, res) => {
  res.send('Hi there.\n');
});

// Respond with JSON
router.get('/json', (req, res) => {
  res.json({ text: 'Hi there.', numbers: [1, 2, 3] });
});

// Serve static files directly from the 'public' directory
router.use('/static', express.static(path.join(__dirname, '../../public')));

// Respond with custom 404 error for unmatched paths
router.use((req, res) => {
  res.status(404).send('Not found\n');
});


// Export the router so it can be used in other files
module.exports = router;
