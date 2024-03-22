/**
 * Inserts a new contact form entry into the database.
 * 
 * @param {Object} contactForm - The contact form object to be inserted into the database.
 * @returns {Promise<Object>} - A promise resolving to the inserted contact form object.
 */
async function insertContactForm(contactForm) {
    // console.log(`saving contactForm to db`, contactForm);
    return await new Contact(contactForm).save();
}

/**
 * Retrieves the contact form submission history from the database.
 * 
 * @returns {Promise<Array<Object>|null>} - A promise resolving to an array of contact form objects if found, null otherwise.
 */
async function contactHistory() {
    let contactHistory = await Contact.find({});
    if(contactHistory) {
        return contactHistory;
    }
    else {
        return throwError;
    }
}

module.exports = {
    insertContactForm,
    contactHistory
};
