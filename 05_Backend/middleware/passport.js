/**
 * Passport configuration module responsible for setting up local and JWT authentication strategies.
 * It uses the 'passport', 'passport-local', and 'passport-jwt' modules.
 */

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const config = require('../config/config');
const userController = require('../controllers/user.controller');

// Local authentication strategy
const localLogin = new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password',
    },
    async (username, password, done) => {
        // Attempt to retrieve user by username and password
        const user = await userController.getUserByUsernameAndPassword(username, password);
        // If user exists, authentication is successful; otherwise, authentication fails
        return user
            ? done(null, user)
            : done(null, false, {
                  error: 'Your login details are not valid. Please try again'
              });
    }
);

// JWT authentication strategy
const jwtLogin = new JwtStrategy(
    {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.jwtSecret
    },
    async (payload, done) => {
        // Attempt to retrieve user by ID from JWT payload
        const user = await userController.getUserById(payload._id);
        // If user exists, authentication is successful; otherwise, authentication fails
        return user
            ? done(null, user)
            : done(null, false, {
                  error: 'Your login details are not valid. Please try again'
              });
    }
);

// Configure Passport to use local and JWT authentication strategies
module.exports = passport.use(localLogin).use(jwtLogin);
