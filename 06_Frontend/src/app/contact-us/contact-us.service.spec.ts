import { TestBed } from '@angular/core/testing';

import { ContactUsService } from './contact-us.service';

describe('ContactUsService', () => {
  let service: ContactUsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactUsService);
  });

  // Test to check if the service is created successfully
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
