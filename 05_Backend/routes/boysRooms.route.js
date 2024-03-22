/**
 * Router module for handling API endpoints related to boys' rooms availability.
 * It defines routes for retrieving availability of super deluxe, deluxe, and standard rooms.
 */

const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const boysRoomsController = require('../controllers/boysRooms.controller');

// Route for retrieving availability of super deluxe rooms
router.get('/superDeluxeRooms', asyncHandler(superDeluxeAvailability), total);

// Route for retrieving availability of deluxe rooms
router.get('/deluxeRooms', asyncHandler(deluxeAvailability), total);

// Route for retrieving availability of standard rooms
router.get('/standardRooms', asyncHandler(standardAvailability), total);

// Middleware function to handle retrieval of super deluxe rooms availability
async function superDeluxeAvailability(req, res, next) {
    req.total = await boysRoomsController.superDeluxeAvailability();
    next();
}

// Middleware function to handle retrieval of deluxe rooms availability
async function deluxeAvailability(req, res, next) {
    req.total = await boysRoomsController.deluxeAvailability();
    next();
}

// Middleware function to handle retrieval of standard rooms availability
async function standardAvailability(req, res, next) {
    req.total = await boysRoomsController.standardAvailability();
    next();
}

// Handler function for sending total availability as JSON response
function total(req, res) {
    let total = req.total;
    res.json({ 
        total
    });
}

module.exports = router;
