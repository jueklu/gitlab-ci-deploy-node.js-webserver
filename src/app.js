// Import the Express framework for web applications
const express = require('express'); 

// Create an instance of the Express application
const app = express(); 

// Import routes
const routes = require('./routes');

// Import environment variables from .env
require('dotenv').config();

// Define the port, using an environment variable if available, or default to 80
const port = process.env.PORT || 80; 


// Use routes from "src/routes/index.js"
app.use('/', routes);


// Export the app for testing and server setup
module.exports = { app, port };
