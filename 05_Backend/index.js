// Import required modules and files
const app = require('./config/express'); // Import express application instance
const config = require('./config/config'); // Import configuration settings
const express = require('express'); // Import express framework
const authRoutes = require('./auth.route'); // Import routes related to authentication
const studentRoutes = require('./student.route'); // Import routes related to student management
const contactRoutes = require('./contact.route'); // Import routes related to contacting support
const boysRoomsRoutes = require('./boysRooms.route'); // Import routes related to management of boys' rooms
const girlsRoomsRoutes = require('./girlsRooms.route'); // Import routes related to management of girls' rooms
const priceDetailsRoutes = require('./priceDetails.route'); // Import routes related to price details
const contactReplyRoutes = require('./contactReply.route'); // Import routes related to replying to contact inquiries
const usersRoutes = require('./users.route'); // Import routes related to user management

const router = express.Router(); // Create a new instance of express router




// initialize mongo
require('./config/mongoose'); 

/**
 * Define routes for different parts of the API
 */
router.use('/auth', authRoutes); // Routes related to authentication
router.use('/student', studentRoutes); // Routes related to student management
router.use('/contactUs', contactRoutes); // Routes related to contacting support
router.use('/boysRooms', boysRoomsRoutes); // Routes related to management of boys' rooms
router.use('/girlsRooms', girlsRoomsRoutes); // Routes related to management of girls' rooms
router.use('/prices', priceDetailsRoutes); // Routes related to price details
router.use('/contactReply', contactReplyRoutes); // Routes related to replying to contact inquiries
router.use('/users', usersRoutes); // Routes related to user management

module.exports = router;


// listen to the port 
app.listen(config.port, () => {
    console.log(`listening on port ${config.port} (${config.env})`);
});

