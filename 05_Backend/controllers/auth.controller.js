/**
 * Generates a JSON Web Token (JWT) for the provided user object.
 * 
 * @param {Object} user - The user object for which the token is generated.
 * @returns {string} - The generated JWT.
 */
function generateToken(user) {
    const payload = JSON.stringify(user);
    return jwt.sign(payload, config.jwtSecret);
}

module.exports = { generateToken };
