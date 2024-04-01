import { Component } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';

/**
 * Component for handling forgot password functionality.
 */
@Component({
  selector: 'pm-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {

  /** FormGroup to manage the form controls */
  forgotPasswordForm: FormGroup;

  /** Flag to indicate if reset instructions have been sent */
  resetInstructionsSent: boolean = false;

  /** Error message to display if there's an error */
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    /** Initialize the form with FormBuilder */
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  /** Function to handle form submission */
  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      /** Get the email value from the form */
      const email = this.getEmail()?.value;

      /** Send an HTTP POST request to the backend API */
      this.http.post<any>('http://localhost:4050/api/forget-password', { email })
        .subscribe(
          (response) => {
            /** Log success and set resetInstructionsSent flag to true */
            console.log('Reset instructions sent successfully');
            this.resetInstructionsSent = true;
            /** Optionally, handle success response */
          },
          (error) => {
            /** Log error and set appropriate error message */
            console.error('Error sending reset instructions:', error);
            if (error.status === 400) {
              this.errorMessage = 'Invalid email format';
            } else if (error.status === 404) {
              this.errorMessage = 'Invalid Email';
            } else {
              this.errorMessage = 'An unexpected error occurred. Please try again.';
            }
          }
        );
    }
  }

  /** Function to handle cancel button click */
  onCancel() {
    /** Logic to cancel operation */
    console.log('Operation canceled');
  }

  /** Function to get reference to the email form control */
  getEmail(): AbstractControl | null {
    return this.forgotPasswordForm.get('email');
  }
}
