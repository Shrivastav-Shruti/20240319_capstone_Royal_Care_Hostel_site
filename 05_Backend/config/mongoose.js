/**
 * Module responsible for connecting to the MongoDB database using Mongoose.
 * It establishes the connection, handles events, and provides debugging functionality if enabled.
 */

const mongoose = require('mongoose');
const util = require('util');
const debug = require('debug')('express-mongoose-es6-rest-api:index');
const config = require('../config/config');

// MongoDB connection URI
const mongoUri = config.mongo.uri;

// Connect to MongoDB using Mongoose
mongoose.connect(mongoUri, { keepAlive: 1, useNewUrlParser: true });

// MongoDB connection instance
const db = mongoose.connection;

// Event listener for successful database connection
db.once('open', () => {
    console.log(`Connected to the database: ${mongoUri}`);
});

// Event listener for database connection error
db.on('error', () => {
    throw new Error(`Error connecting to the database: ${mongoUri}`);
});

// Enable debugging if configured
if (config.mongo.isDebug) {
    mongoose.set('debug', (collectionName, method, query, doc) => {
        debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
    });
}

module.exports = db;
