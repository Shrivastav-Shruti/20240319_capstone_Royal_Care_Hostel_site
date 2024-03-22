// Load environment variables from .env file into process.env
require('dotenv').config();

// Extract environment variables
const envVars = process.env;

// Export configuration object
module.exports = {
    // Port for the application
    port: envVars.PORT,
    // Environment mode (e.g., development, production)
    env: envVars.NODE_ENV,
    // MongoDB connection URI
    mongo: {
        uri: envVars.MONGODB_URI,
        // Port for MongoDB (optional)
        port: envVars.MONGO_PORT,
        // Debug mode for Mongoose (optional)
        isDebug: envVars.MONGOOSE_DEBUG
    },
    // Secret key for JSON Web Token (JWT) generation
    jwtSecret: envVars.JWT_SECRET
};
