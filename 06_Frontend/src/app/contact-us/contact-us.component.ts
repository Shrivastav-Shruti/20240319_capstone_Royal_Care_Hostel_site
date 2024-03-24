import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactUsService } from './contact-us.service';

@Component({
  selector: 'hostel-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  // Variables for user information, contact history, and reply message list
  private apiUrl = 'http://localhost:4050/api/contactUs/';
  user: User;
  contactHistory: any = [];
  replyMsgList : any = [];
  totalReplyMsg : number = 0;

  // Form group for contact form
  contactFormGroup = new FormGroup({
    title : new FormControl('',[Validators.required]),
    query : new FormControl('',[Validators.required])
  });

  constructor(private authService: AuthService, private router: Router, private contactService: ContactUsService) 
  { 
    // Initialize user information and retrieve contact history and reply message list
    this.authService.findMe().subscribe(user =>(this.user = user));
    this.showHistory();

    this.contactService.replyMessageHistory().subscribe((contactReplyHistory) => { 
      this.replyMsgList = contactReplyHistory.filter((a: { username: string; }) => a.username == this.user.username);
      this.totalReplyMsg = this.replyMsgList.length;
    });
  }

  // Function to submit contact form
  contactFormSubmit() {
    // Validate form
    if(!this.contactFormGroup.valid) {
      alert('Please Enter Valiad Value !');
      return;
    }
    // Get raw form values and add username
    const contactForm = this.contactFormGroup.getRawValue();
    contactForm.username = this.user.username;
    // Insert contact form
    this.contactService.insertContactForm(contactForm).subscribe(s => {
      alert(s);
      this.router.navigate(['/']);
    } );
  }

  // Function to show contact history
  showHistory() {
    this.contactService.showHistory()
    .subscribe((contactHistory) => {
        // Filter contact history based on the logged-in user
        this.contactHistory = contactHistory;
        this.contactHistory = this.contactHistory.filter((item: { username: string; }) => (item.username == this.user.username));
      }
    );
  }

  ngOnInit(): void {
  }

}
