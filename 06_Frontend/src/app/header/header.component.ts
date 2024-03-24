import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { User } from '../user';

@Component({
  selector: 'hostel-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

  title = "Royal Care";
  user: User;
  userSubscription: Subscription;

  constructor(private authService: AuthService, private router: Router) 
  {
    // Subscribe to the user observable from the AuthService to get user information
    this.userSubscription = this.authService.user.subscribe(user => (this.user = user));
  }

  ngOnInit(): void {
    // Call findMe method to ensure user data is fetched initially
    this.authService.findMe().subscribe(user => (this.user = user));
  }

  // Method to logout the user
  logout() {
    if(confirm('Are you sure?')) {
      this.authService.logout();
      this.router.navigate(['/']);
    }
  }

  ngOnDestroy(): void {
    // Unsubscribe from user observable to prevent memory leaks
    if(this.userSubscription) 
      this.userSubscription.unsubscribe();
  }

}
