import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';

/**
 * Component for resetting password.
 */
@Component({
  selector: 'pm-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  /** FormGroup to manage the reset password form */
  resetPasswordForm: FormGroup;

  /** Token received from the route parameter */
  token!: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {}

  /**
   * Lifecycle hook called after Angular has initialized all data-bound properties of a directive.
   */
  ngOnInit(): void {
    // Initialize the reset password form
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: [
        '',
        [Validators.required, this.confirmPasswordValidator()],
      ],
    });

    // Get the token from the route parameter
    this.activatedRoute.params.subscribe((params: Params) => {
      this.token = params['token'];
    });
  }

  /**
   * Function to handle form submission.
   */
  onSubmit() {
    if (this.resetPasswordForm.valid) {
      // Get the new password from the form
      const newPassword = this.resetPasswordForm.get('password')?.value;

      // Prepare the password object
      const password = {
        newPassword: newPassword
      };

      // Send an HTTP PUT request to reset the password
      this.httpClient.put(
        `http://localhost:4050/api/reset-password?token=${this.token}`, password
      ).subscribe(
        // Handle success response
        (response) => {
          this.router.navigate(['/signin']);
        },
        // Handle error response
        (error) => {
          console.error('Error resetting password:', error);
        }
      );
    } else {
      // Validate all form fields if the form is invalid
      this.validateAllFormFields(this.resetPasswordForm);
    }
  }

  /**
   * Function to validate all form fields recursively.
   * @param formGroup The form group to validate.
   */
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else {
        control?.markAsTouched({ onlySelf: true });
      }
    });
  }

  /**
   * Custom validator function to validate password confirmation.
   * @returns Validator function.
   */
  confirmPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = control.root.get('password');
      const confirmPassword = control.value;
      return password && confirmPassword && password.value !== confirmPassword
        ? { passwordMismatch: true }
        : null;
    };
  }
}
