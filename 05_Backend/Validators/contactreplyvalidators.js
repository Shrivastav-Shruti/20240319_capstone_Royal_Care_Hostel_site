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
 * Inserts a new contact reply into the database.
 * 
 * @param {Object} contactReply - The contact reply object to be inserted into the database.
 * @returns {Promise<Object>} - A promise resolving to the inserted contact reply object.
 */
async function insertContactReply(contactReply) {
    if (!validateEmail(contactReply.email)) {
        throw new Error('Invalid email address');
    }

    // console.log(`saving contactReply to db`, contactReply);
    return await new ContactReply(contactReply).save();
}

/**
 * Retrieves the contact reply history from the database.
 * 
 * @returns {Promise<Array<Object>|null>} - A promise resolving to an array of contact reply objects if found, null otherwise.
 */
async function contactReplyHistory() {
    let contactReplyHistory = await ContactReply.find({});
    if(contactReplyHistory) {
        return contactReplyHistory;
    }
    else {
        return null;
    }
}

module.exports = {
    insertContactReply,
    contactReplyHistory,
    validateEmail
};
