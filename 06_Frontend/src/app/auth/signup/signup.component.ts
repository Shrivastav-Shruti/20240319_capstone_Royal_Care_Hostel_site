import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { AuthService } from '../auth.service';

/**
 * Component for user signup
 */
@Component({
  selector: 'hostel-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User;

  userGroup = new FormGroup({
    newUsername : new FormControl('',[Validators.required]),
    firstName : new FormControl('',[Validators.required]),
    lastName : new FormControl('',[Validators.required]),
    mobileNumber : new FormControl('',[Validators.required, Validators.pattern("[7-9]{1}[0-9]{9}")]),
    email : new FormControl('',[Validators.required, Validators.email]),
    newPassword : new FormControl('',[Validators.required]),
    cPassword : new FormControl('',[Validators.required, this.passwordMatch()]),
  });

  constructor(private router: Router, private authService: AuthService)
  {
    this.authService.findMe().subscribe(user =>(this.user = user));
  }

  ngOnInit(): void {
  }

  /**
   * Custom validator to check if password matches
   * @returns ValidatorFn
   */
  passwordMatch(): ValidatorFn {
    return (control: AbstractControl) => {
      let newPassword = this.userGroup.get('newPassword');
      return newPassword && control.value !== newPassword.value ?
        { passwordMatch: true } : null;
    };
  }

  signup() {
    if(!this.userGroup.valid) {
      alert('Please Enter Valid Details');
      return;
    }

    const user = this.userGroup.getRawValue();
    this.authService.signup(user).subscribe(s=>this.router.navigate(['/']));
  }

  get cPassword() {
    return this.userGroup.get('cPassword');
  }

  get email() {
    return this.userGroup.get('email');
  } 

  get mobileNumber() {
    return this.userGroup.get('mobileNumber');
  }

  get newPassword() {
    return this.userGroup.get('newPassword');
  }

  redirectToHome() {
    this.router.navigate(['/dashboard']); // navigate to dashboard page
  }

}
