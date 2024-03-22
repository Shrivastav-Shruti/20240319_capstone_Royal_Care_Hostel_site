/**
 * Module responsible for setting up the Express application.
 * It configures middleware, routes, error handling, and serves static files.
 */

const express = require('express');
const path = require('path');
const config = require('./config');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('../routes');
const passport = require('../middleware/passport');
const HttpError = require('http-errors');

// Get the Express application
const app = express();

// Logger middleware for development environment
if (config.env === 'development') {
    app.use(logger('dev'));
}

// Directory for serving static files
const distDir = path.join(__dirname, '../../dist')

// Serve static files from the dist folder
app.use(express.static(distDir));

// Parse JSON and URL-encoded bodies of incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Secure the application with helmet
app.use(helmet());

// Enable CORS
app.use(cors());

// Initialize Passport for authentication
app.use(passport.initialize());

// API routes
app.use('/api/', routes);

// Serve the index.html for any other route
app.get('*', (req, res) => res.sendFile(path.join(distDir, 'index.html')));

// Catch 404 and forward to error handler
app.use((req, res, next) => {
    const error = new HttpError(404);
    return next(error);
});

// Error handling middleware, returns JSON response with error message
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    });
    next(err);
});

module.exports = app;
