/**
 * Retrieves the availability of super deluxe rooms for boys from the database.
 * 
 * @returns {Promise<Array<Object>>} - A promise resolving to an array of available super deluxe rooms.
 */
async function superDeluxeAvailability() {
    let total = await boysSuperDeluxeRooms.find({ isStatus: { $eq: false } });
    return total;
}

/**
 * Retrieves the availability of deluxe rooms for boys from the database.
 * 
 * @returns {Promise<Array<Object>>} - A promise resolving to an array of available deluxe rooms.
 */
async function deluxeAvailability() {
    let total = await boysDeluxeRooms.find({ isStatus: { $eq: false } });
    return total;
}

/**
 * Retrieves the availability of standard rooms for boys from the database.
 * 
 * @returns {Promise<Array<Object>>} - A promise resolving to an array of available standard rooms.
 */
async function standardAvailability() {
    let total = await boysStandardRooms.find({ isStatus: { $eq: false } });
    return total;
}

/**
 * Updates the status of a super deluxe room for boys in the database.
 * 
 * @param {Object} student - The student object representing the occupant of the room.
 * @returns {Promise<Object>} - A promise resolving to the MongoDB update result.
 */
async function updateSuperDeluxe(student) {
    if (!validateStudent(student)) {
        throw new Error('Invalid student object');
    }

    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;

    return await boysSuperDeluxeRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

/**
 * Updates the status of a deluxe room for boys in the database.
 * 
 * @param {Object} student - The student object representing the occupant of the room.
 * @returns {Promise<Object>} - A promise resolving to the MongoDB update result.
 */
async function updateDeluxe(student) {
    if (!validateStudent(student)) {
        throw new Error('Invalid student object');
    }

    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await boysDeluxeRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

/**
 * Updates the status of a standard room for boys in the database.
 * 
 * @param {Object} student - The student object representing the occupant of the room.
 * @returns {Promise<Object>} - A promise resolving to the MongoDB update result.
 */
async function updateStandard(student) {
    if (!validateStudent(student)) {
        throw new Error('Invalid student object');
    }

    if(student.isStatus == true) 
        student.isStatus = false;
    else
        student.isStatus = true;
    
    return await boysStandardRooms.updateOne(
        { personNo: student.personNo },
        { $set: { isStatus: student.isStatus } }
    );
}

module.exports = {
    superDeluxeAvailability,
    deluxeAvailability,
    standardAvailability,
    updateSuperDeluxe,
    updateDeluxe,
    updateStandard
};