// Import the Express app instance and port configuration from app.js
const { app, port } = require('./app');

// Start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));
