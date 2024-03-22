/**
 * Inserts a new user into the database.
 * Hashes the user's new password using bcrypt.
 * Updates the user's username.
 * 
 * @param {Object} user - The user object to be inserted into the database.
 * @returns {Promise<Object>} - A promise resolving to the inserted user object.
 */
async function insert(user) {
    user.hashedPassword = bcrypt.hashSync(user.newPassword, 10);
    delete user.password;
    user.username = user.newUsername;
    // make a mongoose db call to save user in db
    // console.log(`saving user to db`, user);
    return await new User(user).save();
}

/**
 * Retrieves a user from the database by username and password.
 * Verifies the user's password using bcrypt.
 * 
 * @param {string} currentUsername - The current username of the user.
 * @param {string} currentPassword - The current password of the user.
 * @returns {Promise<Object|null>} - A promise resolving to the user object if found, null otherwise.
 */
async function getUserByUsernameAndPassword(currentUsername, currentPassword) {
    let user = await User.findOne({ username: currentUsername });
    // console.log(user);
    if( isUserValid(user, currentPassword, user.hashedPassword)) {
        user = user.toObject();
        delete user.hashedPassword;
        // console.log(user);
        return user;
    }
    else {
        return throwError;
    }
}

/**
 * Retrieves a user from the database by user ID.
 * 
 * @param {string} id - The ID of the user to retrieve.
 * @returns {Promise<Object|null>} - A promise resolving to the user object if found, null otherwise.
 */
async function getUserById(id) {
    let user = await User.findById(id);
    if(user) {
        user = user.toObject();
        delete user.hashedPassword;
        return user;
    }
    else {
        return null;
    }
}

/**
 * Retrieves all users from the database.
 * 
 * @returns {Promise<Array<Object>|null>} - A promise resolving to an array of user objects if found, null otherwise.
 */
async function getAllUser() {
    let users = await User.find({});
    if(users) {
        return users;
    }
    else {
        return null;
    }
}

/**
 * Updates a user's details in the database.
 * Verifies the user's password using bcrypt.
 * 
 * @param {Object} user - The user object containing updated details.
 * @returns {Promise<Object>} - A promise resolving to the MongoDB update result.
 */
async function updateUser(user) {
    let userMatch = await User.findOne({ username: user.username });
    if(isUserValid(userMatch, user.password, userMatch.hashedPassword)) {
        return User.updateOne(
            { username: user.username },
            {
                $set: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    mobileNumber: user.mobileNumber,
                    email: user.email
                }
            }
        );
    }
    else {
        return throwError;
    }
}

/**
 * Checks if a user is valid by comparing the supplied password with the hashed password.
 * 
 * @param {Object|null} user - The user object to validate.
 * @param {string} currentPassword - The current password supplied by the user.
 * @param {string} hashedPassword - The hashed password stored in the database.
 * @returns {boolean} - true if the user is valid, false otherwise.
 */
function isUserValid(user, currentPassword, hashedPassword) {
    return user && bcrypt.compareSync(currentPassword, hashedPassword);
}

module.exports = {
    insert,
    getUserByUsernameAndPassword,
    getUserById,
    getAllUser,
    updateUser
};
