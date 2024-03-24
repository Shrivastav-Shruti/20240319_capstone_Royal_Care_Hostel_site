import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthHeaderInterceptorService implements HttpInterceptor{

  constructor(private tokenStorage: TokenStorageService) { }

  /**
   * Intercepts HTTP requests and adds Authorization header with JWT token if available.
   * @param req HttpRequest object representing the outgoing request
   * @param next HttpHandler for invoking the next interceptor in the chain or making the actual HTTP request
   * @returns An Observable of HttpEvent objects
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<import('@angular/common/http').HttpEvent<any>> {
    // Retrieve token from token storage service
    const token = this.tokenStorage.getToken();
    // Clone the original request and add Authorization header if token is available
    const clonedRequest = req.clone({
      headers: req.headers.set('Authorization', token ? `Bearer ${token}` : '')
    });
    // Pass the cloned request to the next handler
    return next.handle(clonedRequest);
  }
}
