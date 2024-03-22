/**
 * Inserts a new contact reply into the database.
 * 
 * @param {Object} contactReply - The contact reply object to be inserted into the database.
 * @returns {Promise<Object>} - A promise resolving to the inserted contact reply object.
 */
async function insertContactReply(contactReply) {
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
        return throwError;
    }
}

module.exports = {
    insertContactReply,
    contactReplyHistory
};
