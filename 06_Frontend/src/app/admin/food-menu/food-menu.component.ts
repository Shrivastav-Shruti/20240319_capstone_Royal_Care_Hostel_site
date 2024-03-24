import { Component, OnInit } from '@angular/core';

/**
 * Component to display the food menu.
 */
@Component({
  selector: 'pm-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {

  /**
   * Constructor of the FoodMenuComponent class.
   */
  constructor() { }

  /**
   * Angular lifecycle hook called after the component has been initialized.
   * This method is used to perform initialization tasks.
   */
  ngOnInit(): void {
  }

}
