/**
 * Router module for managing API endpoints related to students.
 * Defines routes for adding, updating, removing, and viewing student details.
 */

const express = require('express');
const studentController = require('../controllers/student.controller');
const asyncHandler = require('express-async-handler');
const router = express.Router();

// Route for adding a new student
router.post('/addStudent', asyncHandler(insertStudent), student);

// Route for updating student details
router.put('/updateStudent', asyncHandler(updateStudent), msg);

// Route for removing a student
router.delete('/removeStudent', asyncHandler(removeStudent), msg);

// Route for viewing student details
router.get('/viewStudent', asyncHandler(viewStudent), student);

// Middleware function to handle insertion of a new student
async function insertStudent(req, res, next) {
    const student = req.body;
    req.student = await studentController.insertStudent(student);
    // Set appropriate message based on insertion result
    if (!req.student) {
        req.msg = "Error: Student Entry Not Successful";
    } else {
        req.msg = "Student Entry Successfully done!";
    }
    next();
}

// Middleware function to handle updating student details
async function updateStudent(req, res, next) {
    const student = req.body;
    req.msg = await studentController.updateStudent(student);
    // Set appropriate message based on update result
    if (!req.msg.acknowledged) {
        req.msg = "Error: Student Details Not Updated Successfully";
    } else {
        req.msg = "Student Details Update Successfully done!";
    }
    next();
}

// Middleware function to handle removal of a student
async function removeStudent(req, res, next) {
    const student = req.body;
    req.msg = await studentController.removeStudent(student);
    // Set appropriate message based on removal result
    if (!req.msg.acknowledged) {
        req.msg = "Error: Student Details Not Removed Successfully";
    } else {
        req.msg = "Student Details Removed Successfully!";
    }
    next();
}

// Middleware function to handle viewing student details
async function viewStudent(req, res, next) {
    req.student = await studentController.viewStudent();
    // Set appropriate message based on view result
    if (!req.student) {
        req.msg = "Student Not Found";
    } else {
        req.msg = "Student Found Successfully!";
    }
    next();
}

// Handler function to send student details and message as JSON response
function student(req, res) {
    const student = req.student;
    const msg = req.msg;
    res.json({ 
        student,
        msg   
    });
}

// Handler function to send message as JSON response
function msg(req, res) {
    const msg = req.msg;
    res.json({ 
        msg   
    });
}

module.exports = router;
