/**
 * Inserts a new contact reply into the database.
 * 
 * @param {Object} contactReply - The contact reply object to be inserted into the database.
 * @returns {Promise<Object>} - A promise resolving to the inserted contact reply object.
 */
async function insertContactReply(contactReply) {
    try {
        // console.log(`saving contactReply to db`, contactReply);
        return await new ContactReply(contactReply).save();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

/**
 * Retrieves the contact reply history from the database.
 * 
 * @returns {Promise<Array<Object>|null>} - A promise resolving to an array of contact reply objects if found, null otherwise.
 */
async function contactReplyHistory() {
    try {
        let contactReplyHistory = await ContactReply.find({});
        if (contactReplyHistory) {
            return contactReplyHistory;
        } else {
            return null;
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    insertContactReply,
    contactReplyHistory
};
