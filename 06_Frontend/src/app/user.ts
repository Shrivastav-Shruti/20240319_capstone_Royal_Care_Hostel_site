export interface User {
    username: string;         // Username of the user
    firstName: string;        // First name of the user
    lastName: string;         // Last name of the user
    mobileNumber: string;     // Mobile number of the user
    email: string;            // Email address of the user
    newPassword: string;      // New password for the user (used for password change/reset)
    role: string;             // Role of the user (e.g., Admin, Student, etc.)
}
