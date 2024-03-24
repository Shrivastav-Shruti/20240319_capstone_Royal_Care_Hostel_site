export interface Student {
    roomCategory: string; // Category of the room the student is assigned to (e.g., standard, deluxe, super deluxe)
    roomNo: number; // Room number where the student is staying
    personNo: number; // Number of persons the room accommodates
    firstName: string; // First name of the student
    lastName: string; // Last name of the student
    fatherName: string; // Father's name of the student
    gender: string; // Gender of the student
    mobileNo: number; // Mobile number of the student
    fatherMobileNo: number; // Father's mobile number of the student
    email: string; // Email address of the student
    studentAdharCard: number; // Aadhar card number of the student
    fatherAdharCard: number; // Aadhar card number of the student's father
    currentAddress: string; // Current address of the student
    collegeName: string; // Name of the college where the student is studying
    isStatus: boolean; // Status indicating whether the student is active or not
}
