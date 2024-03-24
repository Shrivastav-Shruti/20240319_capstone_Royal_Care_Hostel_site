import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin/admin.service';
import { AuthService } from '../auth/auth.service';
import { User } from '../user';

@Component({
  selector: 'pm-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User; // Holds the user data
  selectedFile : File; // Holds the selected file for profile picture upload

  @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef; // Reference to the file input element
  fileUploadForm: FormGroup; // Form group for file upload
  fileInputLabel: string; // Label for the selected file

  // Form group for user profile details
  userProfile = new FormGroup({
    username: new FormControl('',[Validators.required]),
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    mobileNumber: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  });

  constructor(private authService: AuthService, private adminService: AdminService, private http: HttpClient, private formBuilder: FormBuilder) {
    // Fetches user details and sets the form controls with the user data
    this.authService.findMe().subscribe((user) =>
    {
      this.user = user;
      this.userProfile.controls['username'].setValue(user.username);
      this.userProfile.controls['firstName'].setValue(user.firstName);
      this.userProfile.controls['lastName'].setValue(user.lastName);
      this.userProfile.controls['mobileNumber'].setValue(user.mobileNumber);
      this.userProfile.controls['email'].setValue(user.email);
    });

    // Disables form controls as they are only for display
    this.userProfile.get('username')!.disable();
    this.userProfile.get('firstName')!.disable();
    this.userProfile.get('lastName')!.disable();
    this.userProfile.get('mobileNumber')!.disable();
    this.userProfile.get('email')!.disable();
  }

  // Updates user profile details
  updateUserProfile() {   
    if(!this.userProfile.valid) {
      alert('Please Enter Valid Values!');
      return;
    }
    const userProfileForm = this.userProfile.getRawValue();

    // Calls the service to update user profile details
    this.adminService.updateUser(userProfileForm)
    .subscribe((msg) => {
        alert(msg);
    });
  } 

  // Removes the profile picture
  removeProfilePic() {
    this.http.delete<any>('http://localhost:4050/api/users/removeProfilePic').subscribe(response => {
      alert("Profile picture removed successfully!");
    }, error => {
      console.error(error);
      alert("Error occurred while removing profile picture.");
    });
  }

  // Handles file selection for profile picture upload
  onFileSelected(event: any){
    const oldFile = event.target.files[0];
    this.fileInputLabel = oldFile.name;

    // Constructs a new file with username as filename
    const name = this.user.username + ".jpg";
    const file: File = new File([event.target.files[0]], name , {type: 'jpg'});

    this.fileUploadForm.get('uploadedImage')!.setValue(file);
  }

  // Submits the form data along with the selected file for profile picture upload
  onFormSubmit() {
    if (!this.fileUploadForm.get('uploadedImage')!.value) {
      alert('Please select a file!');
      return;
    }

    const formData = new FormData();
    formData.append('uploadedImage', this.fileUploadForm.get('uploadedImage')!.value);

    // Calls the API to update profile picture
    this.http.post<any>('http://localhost:4050/api/users/updateProfilePic', formData).subscribe(response => {
        alert("Profile picture updated successfully!");
        if (response.statusCode === 200) {
          // Reset the file input
          this.uploadFileInput.nativeElement.value = "";
          this.fileInputLabel = '';
        }
      }, er => {
        console.log(er);
        alert(er.error.error);
      });
  }

  ngOnInit(): void {
    // Initializes the file upload form
    this.fileUploadForm = this.formBuilder.group({
      uploadedImage: ['']
    });
  }
}
