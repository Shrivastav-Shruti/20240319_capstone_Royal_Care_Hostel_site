/**
 * Validates a hostel price value.
 * 
 * @param {number} price - The price value to validate.
 * @returns {boolean} - true if the price value is valid, false otherwise.
 */
function validatePrice(price) {
    // Price must be a positive number
    return typeof price === 'number' && price > 0;
}

/**
 * Validates the electricity bill per unit value.
 * 
 * @param {number} electricityBillPerUnit - The electricity bill per unit value to validate.
 * @returns {boolean} - true if the electricity bill per unit value is valid, false otherwise.
 */
function validateElectricityBillPerUnit(electricityBillPerUnit) {
    // Electricity bill per unit must be a positive number or zero
    return typeof electricityBillPerUnit === 'number' && electricityBillPerUnit >= 0;
}

/**
 * Validates the security deposit value.
 * 
 * @param {number} securityDeposit - The security deposit value to validate.
 * @returns {boolean} - true if the security deposit value is valid, false otherwise.
 */
function validateSecurityDeposit(securityDeposit) {
    // Security deposit must be a positive number or zero
    return typeof securityDeposit === 'number' && securityDeposit >= 0;
}

module.exports = {
    validatePrice,
    validateElectricityBillPerUnit,
    validateSecurityDeposit
};
