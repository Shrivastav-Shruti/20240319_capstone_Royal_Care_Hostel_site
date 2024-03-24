/**
 * Validates a username.
 * 
 * @param {string} username - The username to validate.
 * @returns {boolean} - true if the username is valid, false otherwise.
 */
function validateUsername(username) {
    // Username must be at least 3 characters long and contain only alphanumeric characters and underscores
    const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
    return usernameRegex.test(username);
}

/**
 * Validates a password.
 * 
 * @param {string} password - The password to validate.
 * @returns {boolean} - true if the password is valid, false otherwise.
 */
function validatePassword(password) {
    // Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

/**
 * Validates an email address.
 * 
 * @param {string} email - The email address to validate.
 * @returns {boolean} - true if the email address is valid, false otherwise.
 */
function validateEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validates a first name.
 * 
 * @param {string} firstName - The first name to validate.
 * @returns {boolean} - true if the first name is valid, false otherwise.
 */
function validateFirstName(firstName) {
    // First name must contain only letters and be between 1 and 50 characters long
    const firstNameRegex = /^[a-zA-Z]{1,50}$/;
    return firstNameRegex.test(firstName);
}

/**
 * Validates a last name.
 * 
 * @param {string} lastName - The last name to validate.
 * @returns {boolean} - true if the last name is valid, false otherwise.
 */
function validateLastName(lastName) {
    // Last name must contain only letters and be between 1 and 50 characters long
    const lastNameRegex = /^[a-zA-Z]{1,50}$/;
    return lastNameRegex.test(lastName);
}

/**
 * Validates a mobile number.
 * 
 * @param {string} mobileNumber - The mobile number to validate.
 * @returns {boolean} - true if the mobile number is valid, false otherwise.
 */
function validateMobileNumber(mobileNumber) {
    // Mobile number must be a valid 10-digit number
    const mobileNumberRegex = /^\d{10}$/;
    return mobileNumberRegex.test(mobileNumber);
}

module.exports = {
    validateUsername,
    validatePassword,
    validateEmail,
    validateFirstName,
    validateLastName,
    validateMobileNumber
};
