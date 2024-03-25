/**
 * Retrieves the availability of super deluxe rooms for girls from the database.
 * 
 * @returns {Promise<Array<Object>>} - A promise resolving to an array of available super deluxe rooms.
 */
async function superDeluxeAvailability() {
    try {
        let total = await girlsSuperDeluxeRooms.find({ isStatus: { $eq: false } });
        return total;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

/**
 * Retrieves the availability of deluxe rooms for girls from the database.
 * 
 * @returns {Promise<Array<Object>>} - A promise resolving to an array of available deluxe rooms.
 */
async function deluxeAvailability() {
    try {
        let total = await girlsDeluxeRooms.find({ isStatus: { $eq: false } });
        return total;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

/**
 * Retrieves the availability of standard rooms for girls from the database.
 * 
 * @returns {Promise<Array<Object>>} - A promise resolving to an array of available standard rooms.
 */
async function standardAvailability() {
    try {
        let total = await girlsStandardRooms.find({ isStatus: { $eq: false } });
        return total;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

/**
 * Updates the status of a super deluxe room for girls in the database.
 * 
 * @param {Object} student - The student object representing the occupant of the room.
 * @returns {Promise<Object>} - A promise resolving to the MongoDB update result.
 */
async function updateSuperDeluxe(student) {
    try {
        if (student.isStatus == true) 
            student.isStatus = false;
        else
            student.isStatus = true;

        return await girlsSuperDeluxeRooms.updateOne(
            { personNo: student.personNo },
            { $set: { isStatus: student.isStatus } }
        );
    } catch (error) {
        console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
}

/**
 * Updates the status of a deluxe room for girls in the database.
 * 
 * @param {Object} student - The student object representing the occupant of the room.
 * @returns {Promise<Object>} - A promise resolving to the MongoDB update result.
 */
async function updateDeluxe(student) {
    try {
        if (student.isStatus == true) 
            student.isStatus = false;
        else
            student.isStatus = true;

        return await girlsDeluxeRooms.updateOne(
            { personNo: student.personNo },
            { $set: { isStatus: student.isStatus } }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

/**
 * Updates the status of a standard room for girls in the database.
 * 
 * @param {Object} student - The student object representing the occupant of the room.
 * @returns {Promise<Object>} - A promise resolving to the MongoDB update result.
 */
async function updateStandard(student) {
    try {
        if (student.isStatus == true) 
            student.isStatus = false;
        else
            student.isStatus = true;

        return await girlsStandardRooms.updateOne(
            { personNo: student.personNo },
            { $set: { isStatus: student.isStatus } }
        );
    } catch (error) {
        console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    superDeluxeAvailability,
    deluxeAvailability,
    standardAvailability,
    updateSuperDeluxe,
    updateDeluxe,
    updateStandard
};
