/** 
 * Import necessary modules 
 */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../../../app/student'; /** Import Student interface */
import { AdminService } from '../admin.service'; /** Import AdminService */

@Component({
  selector: 'hostel-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  /** Define variables */
  student: Student;
  roomNo: number[] = [];
  showRoomNo: boolean = false;
  
  /** Room Details */
  boysSuperDeluxRooms: any[];
  boysDeluxRooms: any[];
  boysStandardRooms: any[];
  girlsSuperDeluxRooms: any[];
  girlsDeluxRooms: any[];
  girlsStandardRooms: any[];
  
  /** Room No */
  boysSuperDeluxRoomNo: number[] = [];
  boysDeluxRoomNo: number[] = [];
  boysStandardRoomNo: number[] = [];
  girlsSuperDeluxRoomNo: number[] = [];
  girlsDeluxRoomNo: number[] = [];
  girlsStandardRoomNo: number[] = [];

  /** Define form group */
  studentDetails = new FormGroup({
    roomCategory : new FormControl('',[Validators.required]),
    roomNo: new FormControl('',[Validators.required]),
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    fatherName: new FormControl('',[Validators.required]),
    gender: new FormControl('',[Validators.required]),
    mobileNo: new FormControl('',[Validators.required, Validators.pattern("[7-9]{1}[0-9]{9}")]),
    fatherMobileNo: new FormControl('',[Validators.required, Validators.pattern("[7-9]{1}[0-9]{9}")]),
    email: new FormControl('',[Validators.required, Validators.email]),
    studentAdharCard: new FormControl('',[Validators.required, Validators.pattern("[0-9]{12}")]),
    fatherAdharCard: new FormControl('',[Validators.required, Validators.pattern("[0-9]{12}")]),
    currentAdress: new FormControl('',[Validators.required]),
    collegeName: new FormControl('',[Validators.required])
  });

  constructor(private router: Router, private adminService: AdminService) {
    // Fetch room details from AdminService on component initialization
    // Populate room numbers arrays for each room category
  }

  ngOnInit(): void {
  }

  /** Function to handle changes in gender or room category selection */
  genderOrRoomCatSelected() {
    // Logic to determine which room numbers to display based on gender and room category selection
  }

  /** Function to add a new student */
  addStudent() {
    if(!this.studentDetails.valid) {
      alert('Please Enter Valiad Value !');
      return;
    }
    // console.log(this.studentDetails);
    const student = this.studentDetails.getRawValue();
    let roomDetail = this.boysSuperDeluxRooms.find(({ roomNo }) => roomNo == student.roomNo);
    if(roomDetail == null) {
      roomDetail = this.boysDeluxRooms.find(({ roomNo }) => roomNo == student.roomNo);
      if(roomDetail == null) {
        roomDetail = this.boysStandardRooms.find(({ roomNo }) => roomNo == student.roomNo);
        if(roomDetail == null) {
          roomDetail = this.girlsSuperDeluxRooms.find(({ roomNo }) => roomNo == student.roomNo);
          if(roomDetail == null) {
            roomDetail = this.girlsDeluxRooms.find(({ roomNo }) => roomNo == student.roomNo);
            if(roomDetail == null) {
              roomDetail = this.girlsStandardRooms.find(({ roomNo }) => roomNo == student.roomNo);
              if(roomDetail == null) {
                alert("error");
                return;
              }
            }
          }
        }
      }
    }
    student.personNo = roomDetail.personNo;
    // console.log(student);

    this.adminService.addStudent(student).subscribe(s => {
      alert(s);
      this.router.navigate(['/admin/viewStudent']);
    });
  }

  /** Getter for email form control */
  get email() {
    return this.studentDetails.get('email');
  } 

  /** Getter for mobileNo form control */
  get mobileNo() {
    return this.studentDetails.get('mobileNo');
  } 

  /** Getter for fatherMobileNo form control */
  get fatherMobileNo() {
    return this.studentDetails.get('fatherMobileNo');
  } 

  /** Getter for studentAdharCard form control */
  get studentAdharCard() {
    return this.studentDetails.get('studentAdharCard');
  } 

  /** Getter for fatherAdharCard form control */
  get fatherAdharCard() {
    return this.studentDetails.get('fatherAdharCard');
  } 

}
