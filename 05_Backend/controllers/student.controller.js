/**
 * Inserts a new student into the database.
 * Updates the corresponding room details based on student's gender and room category.
 * 
 * @param {Object} student - The student object to be inserted into the database.
 * @returns {Promise<Object>} - A promise resolving to the inserted student object.
 */
async function insertStudent(student) {
    try {
        let msg;
        if(student.gender == "male") {
            if(student.roomCategory == "Super Deluxe")
                msg = await boysRoomsController.updateSuperDeluxe(student);
            if(student.roomCategory == "Deluxe")
                msg = await boysRoomsController.updateDeluxe(student);
            if(student.roomCategory == "Standard")
                msg = await boysRoomsController.updateStandard(student);
        } else if(student.gender == "female") {
            if(student.roomCategory == "Super Deluxe")
                msg = await girlsRoomsController.updateSuperDeluxe(student);
            if(student.roomCategory == "Deluxe")
                msg = await girlsRoomsController.updateDeluxe(student);
            if(student.roomCategory == "Standard")
                msg = await girlsRoomsController.updateStandard(student);
        }
    
        if (!msg.acknowledged) {
            req.msg = "Error: Student Details Not Updated Successfully";
            return;
        }
        return await new Student(student).save();
    } catch (error) {
        console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
}

/**
 * Retrieves all students from the database.
 * 
 * @returns {Promise<Array<Object>|null>} - A promise resolving to an array of student objects if found, null otherwise.
 */
async function viewStudent() {
    try {
        let student = await Student.find({});
        if(student) {
            return student;
        }
        else {
            return null;
        }
    } catch (error) {
        console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
}

/**
 * Updates a student's details in the database.
 * 
 * @param {Object} student - The student object containing updated details.
 * @returns {Promise<Object>} - A promise resolving to the MongoDB update result.
 */
async function updateStudent(student) {
    try {
        return Student.updateOne(
            { roomNo: student.roomNo },
            {
                $set: {
                    firstName: student.firstName,
                    lastName: student.lastName,
                    fatherName: student.fatherName,
                    mobileNo: student.mobileNo,
                    fatherMobileNo: student.fatherMobileNo,
                    email: student.email,
                    studentAdharCard: student.studentAdharCard,
                    fatherAdharCard: student.fatherAdharCard, 
                    currentAdress: student.currentAdress,
                    collegeName: student.collegeName
                }
            }
        );
    } catch (error) {
        console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
}

/**
 * Removes a student's status from the database.
 * Updates the corresponding room details based on student's gender and room category.
 * 
 * @param {Object} student - The student object to be removed from the database.
 * @returns {Promise<Object>} - A promise resolving to the MongoDB update result.
 */
async function removeStudent(student) {
    try {
        let msg;
        if(student.gender == "male") {
            if(student.roomCategory == "Super Deluxe")
                msg = await boysRoomsController.updateSuperDeluxe(student);
            if(student.roomCategory == "Deluxe")
                msg = await boysRoomsController.updateDeluxe(student);
            if(student.roomCategory == "Standard")
                msg = await boysRoomsController.updateStandard(student);
        } else if(student.gender == "female") {
            if(student.roomCategory == "Super Deluxe")
                msg = await girlsRoomsController.updateSuperDeluxe(student);
            if(student.roomCategory == "Deluxe")
                msg = await girlsRoomsController.updateDeluxe(student);
            if(student.roomCategory == "Standard")
                msg = await girlsRoomsController.updateStandard(student);
        }
    
        if (!msg.acknowledged) {
            req.msg = "Error: Student Details Not Removed Successfully";
            return;
        }
    
        return Student.updateOne( 
            { personNo: student.personNo },
            {
                $set: {
                    isStatus: false
                }
            }    
        );
    } catch (error) {
        console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    insertStudent,
    viewStudent,
    updateStudent,
    removeStudent
};
