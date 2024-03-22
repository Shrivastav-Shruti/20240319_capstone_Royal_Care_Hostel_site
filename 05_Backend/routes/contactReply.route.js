/**
 * Router module for handling API endpoints related to contact form replies.
 * It defines routes for adding contact form replies and retrieving contact form reply history.
 */

const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const contactReplyController = require('../controllers/contactReply.controller');

// Route for adding contact form replies
router.post('/addContactReply', asyncHandler(insert), msg);

// Route for retrieving contact form reply history
router.get('/contactReplyHistory', asyncHandler(history), contactReplyHistory);

// Middleware function to handle addition of contact form replies
async function insert(req, res, next) {
    const contactReply = req.body;
    req.contactReply = await contactReplyController.insertContactReply(contactReply);
    // Check if insertion was successful and set appropriate message
    if (!req.contactReply) {
        req.msg = "Error: Entry Not Successful";
    } else {
        req.msg = "Successfully done!";
    }
    next();
}

// Middleware function to handle retrieval of contact form reply history
async function history(req, res, next) {
    req.contactReplyHistory = await contactReplyController.contactReplyHistory();
    next();
}

// Handler function for sending message as JSON response
function msg(req, res) {
    const msg = req.msg;
    res.json({
        msg
    });
}

// Handler function for sending contact form reply history as JSON response
function contactReplyHistory(req, res) {
    const contactReplyHistory = req.contactReplyHistory;
    res.json({
        contactReplyHistory
    });
}

module.exports = router;
