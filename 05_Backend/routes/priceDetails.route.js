/**
 * Router module for managing API endpoints related to hostel prices.
 * Defines routes for retrieving hostel price details and updating price details.
 */

const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const priceController = require('../controllers/price.controller');

// Route for retrieving hostel price details
router.get('/findHostelPriceDetails', asyncHandler(getHostelPriceDetails), price);

// Route for updating hostel price details
router.put('/updatePriceDetails', asyncHandler(updatePriceDetails), msg);

// Middleware function to handle retrieval of hostel price details
async function getHostelPriceDetails(req, res, next) {
    const price = req.body;
    const priceDetails = await priceController.getHostelPriceDetails();
    req.price = priceDetails;
    next();
}

// Middleware function to handle updating hostel price details
async function updatePriceDetails(req, res, next) {
    const price = req.body;
    req.msg = await priceController.updatePriceDetails(price);
    // Set appropriate message based on update result
    if (!req.msg.acknowledged) {
        req.msg = "Error: Price Details Not Updated Successfully";
    } else {
        req.msg = "Price Details Update Successfully done!";
    }
    next();
}

// Handler function to send hostel price details as JSON response
function price(req, res) {
    const price = req.price;
    res.json({ 
        price   
    });
}

// Handler function to send update message as JSON response
function msg(req, res) {
    const msg = req.msg;
    res.json({ 
        msg   
    });
}

module.exports = router;
