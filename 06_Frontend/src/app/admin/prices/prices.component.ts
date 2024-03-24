import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prices } from '../../../app/prices';
import { AdminService } from '../admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * Component for managing hostel prices.
 */
@Component({
  selector: 'pm-prices', // Component selector
  templateUrl: './prices.component.html', // Template URL
  styleUrls: ['./prices.component.css'] // Style URLs
})
export class PricesComponent implements OnInit {

  prices: Prices; // Variable to store Prices data

  // Form group for price details with form controls for each field
  priceDetails = new FormGroup({
    superDeluxe: new FormControl('',[Validators.required]),
    deluxe: new FormControl('',[Validators.required]),
    standard: new FormControl('',[Validators.required]),
    foodPackage: new FormControl('',[Validators.required]),
    electricityBillPerUnit: new FormControl('',[Validators.required]),
    securityDeposit: new FormControl('',[Validators.required])
  });

  /**
   * Constructor to inject dependencies and initialize component.
   * @param adminService The AdminService for fetching and updating hostel prices.
   */
  constructor(private adminService: AdminService) {
    // Fetching hostel price details and setting form values
    this.adminService.findHostelPriceDetails().subscribe((hostelPriceDetail) => {
      this.prices = hostelPriceDetail;
      this.setValue(hostelPriceDetail);
    });

    // Disabling form controls initially
    this.priceDetails.get('superDeluxe')!.disable();
    this.priceDetails.get('deluxe')!.disable();
    this.priceDetails.get('standard')!.disable();
    this.priceDetails.get('foodPackage')!.disable();
    this.priceDetails.get('electricityBillPerUnit')!.disable();
    this.priceDetails.get('securityDeposit')!.disable();
  }

  /**
   * Method to set form values based on retrieved data.
   * @param price The Prices object containing hostel price details.
   */
  setValue(price: Prices) {
    this.priceDetails.controls['superDeluxe'].setValue(price.superDeluxe);
    this.priceDetails.controls['deluxe'].setValue(price.deluxe);
    this.priceDetails.controls['standard'].setValue(price.standard);
    this.priceDetails.controls['foodPackage'].setValue(price.foodPackage);
    this.priceDetails.controls['electricityBillPerUnit'].setValue(price.electricityBillPerUnit);
    this.priceDetails.controls['securityDeposit'].setValue(price.securityDeposit);
  }

  /**
   * Method to update price details.
   */
  updatePriceDetails() {
    // Checking if form is valid
    if(this.priceDetails.status == "INVALID") { 
      alert('Please Enter Valid Value !');
      return; 
    }
    const price = this.priceDetails.getRawValue(); // Getting form values
    // Sending updated price details to the admin service
    this.adminService.updatePriceDetails(price).subscribe((msg) => {
      alert(msg); // Alerting the user with the response message
    });
  }

  ngOnInit(): void {
    
  }

}
