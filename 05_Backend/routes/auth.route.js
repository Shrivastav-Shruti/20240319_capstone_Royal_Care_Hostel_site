/**
 * Router module for handling authentication-related API endpoints.
 * It defines routes for user sign-up, sign-in, and retrieving user details.
 */

const express = require('express');
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');
const asyncHandler = require('express-async-handler');
const passport = require('../middleware/passport');
const router = express.Router();

// Route for user sign-up
router.post('/SignUp', asyncHandler(insert), login);

// Route for user sign-in
router.post('/SignIn', asyncHandler(getUserByUsernameAndPassword), login);

// Route for retrieving user details
router.get('/findme', passport.authenticate('jwt', { session: false }), login);

// Middleware function to handle user sign-up
async function insert(req, res, next) {
    const user = req.body;
    req.user = await userController.insert(user);
    next();
}

// Middleware function to handle user sign-in
async function getUserByUsernameAndPassword(req, res, next) {
    const user = req.body;
    const savedUser = await userController.getUserByUsernameAndPassword(user.currentUsername, user.currentPassword);
    req.user = savedUser;
    next();
}

// Handler function for generating token and sending user details
function login(req, res) {
    const user = req.user;
    const token = authController.generateToken(user);
    res.json({ 
        user,
        token   
    });
}

module.exports = router;
