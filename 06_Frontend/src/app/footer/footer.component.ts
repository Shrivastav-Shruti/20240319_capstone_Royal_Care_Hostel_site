import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hostel-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // Email address for contacting the hostel
  email = "shrutishrivastav938@gmail.com";
  
  // Username for social media handles
  userName = "shrutishrivastav";
  
  constructor() { }

  ngOnInit(): void {
  }

}
