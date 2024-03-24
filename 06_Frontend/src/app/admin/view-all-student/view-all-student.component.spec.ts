/**
 * Import necessary modules for testing
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

/**
 * Import the component to be tested
 */
import { ViewAllStudentComponent } from './view-all-student.component';

/**
 * Describe a test suite for the ViewAllStudentComponent
 */
describe('ViewAllStudentComponent', () => {
  let component: ViewAllStudentComponent; // Declare a variable to hold the component instance
  let fixture: ComponentFixture<ViewAllStudentComponent>; // Declare a variable to hold the component fixture

  /**
   * Run this function before each test case asynchronously
   */
  beforeEach(async () => {
    // Configure TestBed to create a testing module with the ViewAllStudentComponent
    await TestBed.configureTestingModule({
      declarations: [ ViewAllStudentComponent ] // Declare the component to be tested
    })
    .compileComponents(); // Compile the component's template
  });

  /**
   * Run this function before each test case synchronously
   */
  beforeEach(() => {
    // Create a component fixture for the ViewAllStudentComponent
    fixture = TestBed.createComponent(ViewAllStudentComponent);
    // Get the component instance from the fixture
    component = fixture.componentInstance;
    // Trigger change detection to initialize the component
    fixture.detectChanges();
  });

  /**
   * Test case: Ensure that the component is created successfully
   */
  it('should create', () => {
    // Expect that the component instance is truthy (i.e., it exists)
    expect(component).toBeTruthy();
  });
});
