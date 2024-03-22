/**
 * Router module for handling API endpoints related to contact form submissions.
 * It defines routes for inserting contact form data and retrieving contact form submission history.
 */

const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const contactController = require('../controllers/contact.controller');

// Route for inserting contact form data
router.post('/contactUsInsert', asyncHandler(insert), msg);

// Route for retrieving contact form submission history
router.get('/contactUsHistory', asyncHandler(history), contactHistory);

// Middleware function to handle insertion of contact form data
async function insert(req, res, next) {
    const contactForm = req.body;
    req.contactForm = await contactController.insertContactForm(contactForm);
    // Check if insertion was successful and set appropriate message
    if (!req.contactForm) {
        req.msg = "Error: Entry Not Successful";
    } else {
        req.msg = "Successfully done!";
    }
    next();
}

// Middleware function to handle retrieval of contact form submission history
async function history(req, res, next) {
    req.contactHistory = await contactController.contactHistory();
    next();
}

// Handler function for sending message as JSON response
function msg(req, res) {
    const msg = req.msg;
    res.json({
        msg
    });
}

// Handler function for sending contact form submission history as JSON response
function contactHistory(req, res) {
    const contactHistory = req.contactHistory;
    res.json({
        contactHistory
    });
}

module.exports = router;
