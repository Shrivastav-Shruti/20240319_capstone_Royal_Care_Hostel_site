import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'pm-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  currentUsername: string;
  currentPassword: string;
  error: string;

  user: User;

  constructor(private router: Router, private authService: AuthService) 
  { 
    // Subscribing to the user authentication service to get the current user
    this.authService.findMe().subscribe(user =>(this.user = user));
  }

  ngOnInit(): void {
  }

  // Method triggered when the sign-in button is clicked
  signin() {
    this.error = ''; // Clear any previous errors
    // Calling the login method of the authentication service to perform user login
    this.authService
      .login(this.currentUsername, this.currentPassword)
      .subscribe(
        // On successful login, navigate to the home page
        s => this.router.navigate(['']),
        // On login error, display the error message
        err => this.error = err
      );
  }

  // Method to redirect to the home page
  redirectToHome() {
    this.router.navigate(['/dashboard']); // navigate to dashboard page
  }

}
