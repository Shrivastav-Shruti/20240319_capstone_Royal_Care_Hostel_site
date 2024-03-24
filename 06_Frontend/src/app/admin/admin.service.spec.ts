/**
 * Unit test suite for the AdminService class.
 * It verifies whether the service is created successfully.
 */
import { TestBed } from '@angular/core/testing';

import { AdminService } from './admin.service';

describe('AdminService', () => {
  let service: AdminService;

  beforeEach(() => {
    // Configuring the testing module
    TestBed.configureTestingModule({});
    // Creating an instance of the AdminService
    service = TestBed.inject(AdminService);
  });

  // Verifying whether the service is created successfully
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
