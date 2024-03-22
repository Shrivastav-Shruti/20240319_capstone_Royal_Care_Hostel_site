const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const userController = require('../controllers/user.controller');
const multer = require('multer');
const fileExtension = require('file-extension');

// Define storage configuration for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/assets/img/profileImg'); // Setting directory to save uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Setting name of saved file
    }
});

// Configure multer for file upload
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 50000000 // Limiting image size to 50MBs
    },
    fileFilter(req, file, cb) {
        // Checking file extension for allowed formats (JPG, JPEG, PNG)
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            // Error if format is not allowed
            cb(new Error('Please upload JPG and PNG images only!'));
        } else {
            // Success if format is allowed
            cb(undefined, true);
        }
    }
});

// Route to get all users
router.get('/AllUser', asyncHandler(getAllUser), users);

// Route to update user details
router.post('/userUpdate', asyncHandler(updateUser), msg);

// Route to update profile picture
router.post('/updateProfilePic', upload.single('uploadedImage'), (req, res, next) => {
    let file = req.file;
    if (!file) {
        // Error if no file uploaded
        const error = new Error('Please upload a file');
        error.httpStatusCode = 400;
        return next(error);
    }
    // Success if file uploaded
    res.status(200).send({
        statusCode: 200,
        status: 'success',
        uploadedFile: file
    });
}, (error, req, res, next) => {
    // Error handler for multer errors
    res.status(400).send({
        error: error.message
    });
});

// Middleware function to get all users
async function getAllUser(req, res, next) {
    req.users = await userController.getAllUser();
    next();
}

// Middleware function to update user details
async function updateUser(req, res, next) {
    const user = req.body;
    req.msg = await userController.updateUser(user);
    if (!req.msg.acknowledged) {
        req.msg = "User Details Not Updated Successfully !! Please Check Your Password";
    } else {
        req.msg = "User Details Updated Successfully!";
    }
    next();
}

// Handler function to send user details as JSON response
function users(req, res) {
    const users = req.users;
    res.json({ 
        users   
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
