/**
 * Import necessary modules from Angular core
 */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

/**
 * Import the Student interface from 'src/app/student'
 * Import the ViewAllStudentService for fetching student data
 */
import { Student } from 'src/app/student';
import { ViewAllStudentService } from './view-all-student.service';

/**
 * Decorator to mark the class as an Angular component
 * Specifies the metadata for the component
 */
@Component({
  selector: 'view-all-student', // Component selector
  templateUrl: './view-all-student.component.html', // HTML template file
  styleUrls: ['./view-all-student.component.css', '../student-add/student-add.component.css'] // CSS stylesheets
})

/**
 * Component class declaration implementing OnInit interface
 */
export class ViewAllStudentComponent implements OnInit {
  
  // Array to store all students
  students: Student[] = [];
  
  // String variable for displaying messages
  msg: string;
  
  // Arrays to store male students based on room categories
  maleStudents: Student[] = [];
  superDeluxeRoomsMaleStudents: Student[] = [];
  deluxeRoomsMaleStudents: Student[] = [];
  standardRoomsMaleStudents: Student[] = [];
  
  // Arrays to store female students based on room categories
  femaleStudents: Student[] = [];
  superDeluxeRoomsFemaleStudents: Student[] = [];
  deluxeRoomsFemaleStudents: Student[] = [];
  standardRoomsFemaleStudents: Student[] = [];
  
  // Array to store search results
  searchRooms: Student[] = [];
  
  // Boolean flag to track search status
  searchIsDone: boolean = false;
  
  // String message for search result
  searchmsg: string = "No Student Found!!";
  
  // FormGroup for search input
  rNoForSearch = new FormGroup({
    rNo: new FormControl('',[Validators.required]) // FormControl for room number with validation
  });

  /**
   * Constructor to inject ViewAllStudentService and Router dependencies
   */
  constructor(private viewAllStudentService: ViewAllStudentService, private router: Router) { 
    // Fetch student data from the service
    this.viewAllStudentService.findStudent().subscribe((studentsDetail) => {
      // Assign received student data to the students array
      this.students = studentsDetail;
      // Sort the students array by room number
      this.students.sort((a, b) => (a.roomNo > b.roomNo) ? 1 : -1);
      // Filter out inactive students
      this.students = this.students.filter(a=> a.isStatus !== false);
      
      // Filter and assign female students to respective arrays based on room categories
      this.femaleStudents = this.students.filter(a=> a.gender == "female");
      this.superDeluxeRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "Super Deluxe");
      this.deluxeRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "Deluxe");
      this.standardRoomsFemaleStudents = this.femaleStudents.filter(a => a.roomCategory == "Standard");
      
      // Filter and assign male students to respective arrays based on room categories
      this.maleStudents = this.students.filter(a=> a.gender == "male");
      this.superDeluxeRoomsMaleStudents = this.maleStudents.filter(a => a.roomCategory == "Super Deluxe");
      this.deluxeRoomsMaleStudents = this.maleStudents.filter(a => a.roomCategory == "Deluxe");
      this.standardRoomsMaleStudents = this.maleStudents.filter(a => a.roomCategory == "Standard");
      
      // Set a message if there are no students
      this.msg = 'There is not a single student';
    });
  }

  /**
   * Lifecycle hook that is called after the component's view has been fully initialized
   */
  ngOnInit(): void {
  }

  /**
   * Method to search for a student by room number
   */
  searchRoomNo() {
    // Reset search flag
    this.searchIsDone = false;
    // Check if the form is valid
    if (!this.rNoForSearch.valid) {
      // Show alert if room number is not entered
      alert('please enter roomNo');
      return;
    }
    // Get the room number from the form
    const roomNoDetails = this.rNoForSearch.getRawValue();
    // Filter students based on the entered room number
    this.searchRooms = this.students.filter(a => a.roomNo == roomNoDetails.rNo);
    // Set search flag to true
    this.searchIsDone = true;
  }

  /**
   * Getter method to access the room number form control
   */
  get rNo() {
    return this.rNoForSearch.get('rNo');
  }

}
