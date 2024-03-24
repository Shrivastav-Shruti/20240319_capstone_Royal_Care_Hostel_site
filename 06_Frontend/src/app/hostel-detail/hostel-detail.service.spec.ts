import { TestBed } from '@angular/core/testing';

import { HostelDetailService } from './hostel-detail.service';

describe('HostelDetailService', () => {
  let service: HostelDetailService; // Declaring a variable to hold the service instance

  beforeEach(() => {
    TestBed.configureTestingModule({}); // Configuring the testing module before each test
    service = TestBed.inject(HostelDetailService); // Injecting the HostelDetailService into the test
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Verifying that the service instance exists
  });
});
