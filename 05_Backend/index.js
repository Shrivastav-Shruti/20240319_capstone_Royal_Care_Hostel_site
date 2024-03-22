const app = require('./config/express'); // Importing the Express application configuration
const config = require('./config/config'); // Importing the application configuration

// Initialize MongoDB connection
require('./config/mongoose');

// Listen to the configured port
app.listen(config.port, () => {
    console.log(`Listening on port ${config.port} (${config.env})`); // Logging the port and environment on which the server is running
});
