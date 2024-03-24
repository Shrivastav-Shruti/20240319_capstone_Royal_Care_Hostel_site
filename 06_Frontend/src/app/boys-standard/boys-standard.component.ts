/** 
 * Component representing the standard room for boys with functionality to initiate payment using Razorpay.
 * Razorpay SDK is loaded dynamically, and payment options are configured based on room details.
 */
import { Component, OnInit } from '@angular/core';  

// Declaration of Razorpay as an external variable
declare var Razorpay: any;

@Component({
  selector: 'pm-boys-standard',
  templateUrl: './boys-standard.component.html',
  styleUrls: ['./boys-standard.component.css']
})
export class BoysStandardComponent implements OnInit { 
  paymentId:any 

  constructor() { }

  ngOnInit(): void { 
  }

  /**
   * Loads the Razorpay SDK dynamically.
   * @returns A promise that resolves when the SDK is loaded successfully or rejects if loading fails.
   */
  loadRazorpaySdk() {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        reject(false);
      };
      document.body.appendChild(script);
    });
  } 

  /**
   * Initiates the payment process using Razorpay.
   * Loads the SDK, configures payment options, and opens the Razorpay payment modal.
   */
  async payNow() {
    console.log("clicked");
  
    // Ensure the Razorpay SDK is loaded
    try {
      await this.loadRazorpaySdk();
      console.log('Razorpay SDK loaded successfully');
    } catch (error) {
      console.error('Failed to load Razorpay SDK', error);
      return;
    }
  
    // Razorpay SDK is now loaded, proceed with creating Razorpay instance
    const options = {
      // Payment options
      description: 'Sample Razorpay demo',
      currency: 'INR',
      amount: 4500000,
      name: 'Shruti',
      key: 'rzp_test_rcZDiWvY5D4oKi',
      image: '',
      prefill: {
        name:"Shruti Shrivastav",
        email: 'shrutishrivastav38@gmail.com',
        contact: '8624833069',
      },
      theme: {
        color: '#f37254',
      },
      modal: {
        // Modal options
        ondismiss: () => {
          console.log('Payment dismissed');
        },
      },
    };
  
    // Callback function for successful payment
    const successCallback = (paymentId: any) => {
      console.log('Payment successful with ID:', paymentId);
    };
  
    // Callback function for failed payment
    const failureCallback = (error: any) => {
      console.error('Payment failed with error:', error);
    };
  
    // Create a new instance of Razorpay and open the payment modal
    const rzp = new Razorpay(options);
    rzp.on('payment.success', successCallback);
    rzp.on('payment.failure', failureCallback);
    rzp.open();
  }
}
