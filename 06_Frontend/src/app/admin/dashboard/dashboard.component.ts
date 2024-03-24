import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Availability } from 'src/app/availability';
import { AdminService } from '../admin.service';

/**
 * DashboardComponent displays the availability of rooms in the hostel.
 * It retrieves data from the AdminService and updates the UI accordingly.
 */
@Component({
  selector: 'admin-hostel-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  /**
   * Object to hold the availability of different types of rooms.
   */
  availability: Availability = {
    boysStandardRooms: 0,
    boysDeluxeRooms: 0,
    boysSuperDeluxeRooms: 0,
    girlsStandardRooms: 0,
    girlsDeluxeRooms: 0,
    girlsSuperDeluxeRooms: 0
  };

  /**
   * Constructor to inject dependencies and initialize the component.
   * @param router The Angular Router service.
   * @param adminService The AdminService to retrieve room availability data.
   */
  constructor(private router: Router, private adminService: AdminService) { 

    // Retrieve and update availability data for each room type
    this.adminService.boysSuperDeluxRooms().subscribe((total) => { this.availability.boysSuperDeluxeRooms = total.length; });
    this.adminService.boysDeluxRooms().subscribe((total) => { this.availability.boysDeluxeRooms = total.length; });
    this.adminService.boysStandardRooms().subscribe((total) => { this.availability.boysStandardRooms = total.length; });
    this.adminService.girlsSuperDeluxRooms().subscribe((total) => { this.availability.girlsSuperDeluxeRooms = total.length; });
    this.adminService.girlsDeluxRooms().subscribe((total) => { this.availability.girlsDeluxeRooms = total.length; });
    this.adminService.girlsStandardRooms().subscribe((total) => { this.availability.girlsStandardRooms = total.length; });

  }

  /**
   * Angular lifecycle hook called after the component has been initialized.
   */
  ngOnInit(): void {
  }

}