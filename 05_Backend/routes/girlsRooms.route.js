/**
 * Router module for managing API endpoints related to girls' rooms.
 * Defines routes for retrieving availability of super deluxe, deluxe, and standard rooms.
 */

const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const girlsRoomsController = require('../controllers/girlsRooms.controller');

// Route for retrieving availability of super deluxe rooms
router.get('/superDeluxeRooms', asyncHandler(superDeluxeAvailability), total);

// Route for retrieving availability of deluxe rooms
router.get('/deluxeRooms', asyncHandler(deluxeAvailability), total);

// Route for retrieving availability of standard rooms
router.get('/standardRooms', asyncHandler(standardAvailability), total);

// Middleware function to handle retrieval of availability of super deluxe rooms
async function superDeluxeAvailability(req, res, next) {
    req.total = await girlsRoomsController.superDeluxeAvailability();
    next();
}

// Middleware function to handle retrieval of availability of deluxe rooms
async function deluxeAvailability(req, res, next) {
    req.total = await girlsRoomsController.deluxeAvailability();
    next();
}

// Middleware function to handle retrieval of availability of standard rooms
async function standardAvailability(req, res, next) {
    req.total = await girlsRoomsController.standardAvailability();
    next();
}

// Handler function to send total availability as JSON response
function total(req, res) {
    let total = req.total;
    res.json({ 
        total
    });
}

module.exports = router;
