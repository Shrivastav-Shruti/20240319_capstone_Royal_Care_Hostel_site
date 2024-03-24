import { TestBed } from '@angular/core/testing';

import { AuthHeaderInterceptorService } from './auth-header-interceptor.service';

describe('AuthHeaderInterceptorService', () => {
  let service: AuthHeaderInterceptorService; // Declaring a variable to hold the service instance

  beforeEach(() => {
    TestBed.configureTestingModule({}); // Configuring the testing module before each test
    service = TestBed.inject(AuthHeaderInterceptorService); // Injecting the AuthHeaderInterceptorService into the test
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Verifying that the service instance exists
  });
});
