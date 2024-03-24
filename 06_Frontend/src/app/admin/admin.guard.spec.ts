/**
 * Import necessary modules for testing.
 */
import { TestBed } from '@angular/core/testing';

/**
 * Import the AdminGuard service to be tested.
 */
import { AdminGuard } from './admin.guard';

/**
 * Describe a test suite for the AdminGuard service.
 */
describe('AdminGuard', () => {
  let guard: AdminGuard;

  /**
   * Run this function before each test in the suite.
   */
  beforeEach(() => {
    /**
     * Configure the testing module.
     */
    TestBed.configureTestingModule({});
    /**
     * Create an instance of the AdminGuard service and inject dependencies.
     */
    guard = TestBed.inject(AdminGuard);
  });

  /**
   * Test case to check if the AdminGuard service is created.
   */
  it('should be created', () => {
    /**
     * Expect the guard to be truthy (i.e., it should be created successfully).
     */
    expect(guard).toBeTruthy();
  });
});
