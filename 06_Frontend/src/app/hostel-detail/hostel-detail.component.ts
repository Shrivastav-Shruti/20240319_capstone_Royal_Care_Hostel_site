import { Component, OnInit } from '@angular/core';
import { Prices } from '../prices'; // Importing Prices interface for room prices
import { Availability } from '../availability'; // Importing Availability interface for room availability
import { AdminService } from '../admin/admin.service'; // Importing AdminService for fetching hostel details

@Component({
  selector: 'hostel-hostel-detail',
  templateUrl: './hostel-detail.component.html',
  styleUrls: ['./hostel-detail.component.css']
})
export class HostelDetailComponent implements OnInit {

  prices: Prices; // Variable to store room prices
  room: any[]; // Variable to store room details

  // Object to store room availability counts
  availability: Availability = {
    boysStandardRooms: 0,  
    boysDeluxeRooms: 0,  
    boysSuperDeluxeRooms: 0, 
    girlsStandardRooms: 0, 
    girlsDeluxeRooms: 0, 
    girlsSuperDeluxeRooms: 0 
  };

  constructor(private adminService: AdminService) { 
    // Fetching hostel price details from the AdminService and subscribing to the observable
    this.adminService.findHostelPriceDetails().subscribe(hostelPriceDetail =>(this.prices = hostelPriceDetail));
    
    // Fetching availability counts for different types of rooms from the AdminService and subscribing to the observables
    this.adminService.boysSuperDeluxRooms().subscribe((total) => { this.availability.boysSuperDeluxeRooms = total.length; });
    this.adminService.boysDeluxRooms().subscribe((total) => { this.availability.boysDeluxeRooms = total.length; });
    this.adminService.boysStandardRooms().subscribe((total) => { this.availability.boysStandardRooms = total.length; });
    this.adminService.girlsSuperDeluxRooms().subscribe((total) => { this.availability.girlsSuperDeluxeRooms = total.length; });
    this.adminService.girlsDeluxRooms().subscribe((total) => { this.availability.girlsDeluxeRooms = total.length; });
    this.adminService.girlsStandardRooms().subscribe((total) => { this.availability.girlsStandardRooms = total.length; });
  }
  
  ngOnInit(): void {
  }
}
