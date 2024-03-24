/**
 * Validates a student's first name.
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
 * Validates a student's last name.
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
 * Validates a student's father's name.
 * 
 * @param {string} fatherName - The father's name to validate.
 * @returns {boolean} - true if the father's name is valid, false otherwise.
 */
function validateFatherName(fatherName) {
    // Father's name must contain only letters and be between 1 and 50 characters long
    const fatherNameRegex = /^[a-zA-Z]{1,50}$/;
    return fatherNameRegex.test(fatherName);
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
 * Validates an Aadhar card number.
 * 
 * @param {string} aadharCard - The Aadhar card number to validate.
 * @returns {boolean} - true if the Aadhar card number is valid, false otherwise.
 */
function validateAadharCard(aadharCard) {
    // Aadhar card number must be a valid 12-digit number
    const aadharCardRegex = /^\d{12}$/;
    return aadharCardRegex.test(aadharCard);
}

/**
 * Validates a student's current address.
 * 
 * @param {string} currentAddress - The current address to validate.
 * @returns {boolean} - true if the current address is valid, false otherwise.
 */
function validateCurrentAddress(currentAddress) {
    // Validate the length of the current address
    return currentAddress.length > 0 && currentAddress.length <= 1000;
}

/**
 * Validates a college name.
 * 
 * @param {string} collegeName - The college name to validate.
 * @returns {boolean} - true if the college name is valid, false otherwise.
 */
function validateCollegeName(collegeName) {
    // College name must be between 1 and 100 characters long
    return collegeName.length > 0 && collegeName.length <= 100;
}

module.exports = {
    validateFirstName,
    validateLastName,
    validateFatherName,
    validateMobileNumber,
    validateEmail,
    validateAadharCard,
    validateCurrentAddress,
    validateCollegeName
};
