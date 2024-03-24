import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactUsService } from 'src/app/contact-us/contact-us.service';

/**
 * Component for handling inquiries and replies.
 */
@Component({
  selector: 'pm-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  // Arrays to store data fetched from the service
  queries: any = [];
  replyMsgList: any = [];
  customreplyMsgList: any = [];

  // Form group for the reply message form
  replyMessageForm = new FormGroup({
    username: new FormControl('', [Validators.required]), // Input field for username
    replyMsg: new FormControl('', [Validators.required]), // Input field for reply message
    contactId: new FormControl('', [Validators.required]) // Hidden input field for contact ID
  });

  /**
   * Constructor to initialize the component with necessary services.
   * @param contactService Service for handling contact-related operations.
   * @param router Router service for navigation.
   */
  constructor(private contactService: ContactUsService, private router: Router) { 
    // Fetch contact history and reply message history from the service
    this.contactService.showHistory().subscribe((contactHistory) => { this.queries = contactHistory; });
    this.contactService.replyMessageHistory().subscribe((contactReplyHistory) => { this.replyMsgList = contactReplyHistory; });
  }

  /**
   * Method to send a reply message.
   */
  sendReplyMessage() {
    if (!this.replyMessageForm.valid) {
      console.log('Please enter a valid reply message');
      alert('Please Enter Valid Value !');
      return;
    }
    const replyMsgForm = this.replyMessageForm.getRawValue();
    // Send the reply message form data to the service
    this.contactService.sendReplyMessage(replyMsgForm).subscribe(s => {
      alert(s);
      window.location.reload(); // Refresh the page after sending the reply
    });
  }

  ngOnInit(): void {
  }

  /**
   * Method to set values in the reply message form.
   * @param query Inquiry object containing details of the inquiry.
   */
  setValue(query: any) {
    // Reset the reply message field
    this.replyMessageForm.controls['replyMsg'].setValue(null);
    // Set values in the form fields based on the query
    this.replyMessageForm.controls['contactId'].setValue(query._id);
    this.replyMessageForm.controls['username'].setValue(query.username);
  }

  /**
   * Method to filter and set custom reply messages list.
   * @param id Contact ID for which reply messages are to be fetched.
   */
  setCustomReplyMsgList(id: string) {
    // Filter reply messages based on contact ID
    this.customreplyMsgList = this.replyMsgList.filter((a: { contactId: string; }) => a.contactId == id);
  }

}
