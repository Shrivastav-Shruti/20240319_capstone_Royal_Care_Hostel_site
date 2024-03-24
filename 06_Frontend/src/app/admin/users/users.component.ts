/**
 * This component is responsible for managing users.
 * It fetches user data from the AdminService and displays it in the template.
 */
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'pm-users', // Component selector
  templateUrl: './users.component.html', // Template URL
  styleUrls: ['./users.component.css'] // Stylesheets
})
export class UsersComponent implements OnInit {

  users: any[]; // Array to hold user data

  /**
   * Constructor for UsersComponent.
   * @param adminService The service responsible for fetching user data.
   */
  constructor(private adminService: AdminService) {
    // Using the service to fetch all users and subscribe to the result
    this.adminService.getAllUsers().subscribe((users) => { this.users = users; });
  }

  /**
   * Angular lifecycle hook called after component initialization.
   * Currently empty as there's no specific initialization logic needed.
   */
  ngOnInit(): void {
   
  }

}
