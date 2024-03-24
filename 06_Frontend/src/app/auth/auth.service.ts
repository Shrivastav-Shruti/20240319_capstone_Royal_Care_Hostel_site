/**
 * AuthService handles authentication-related functionality like login, logout, and signup.
 * It communicates with the backend API to perform these operations.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, of, Subject, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { TokenStorageService } from '../token-storage.service';
import { User } from '../user';

/**
 * Data transfer object for user authentication.
 * Contains user information and authentication token.
 */
interface UserDto {
  user: User;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Subject to broadcast user authentication status
  private user$ = new Subject<User>();
  // API URL for authentication endpoints
  private apiUrl = 'http://localhost:4050/api/auth/';

  constructor(private httpClient: HttpClient, private tokenStorage: TokenStorageService) { }
  
  /**
   * Logs in a user with provided credentials.
   * @param currentUsername The username of the user
   * @param currentPassword The password of the user
   * @returns An observable containing the user object
   */
  login(currentUsername: string, currentPassword: string) {
    const loginCredentials = { currentUsername, currentPassword };

    return this.httpClient
    .post<UserDto>(`${this.apiUrl}SignIn`, loginCredentials)
    .pipe(
      switchMap(({ user, token }) => {
        this.setUser(user);
        this.tokenStorage.setToken(token);
        return of(user);
      }),
      catchError(err => {
        return throwError(`Your login details could not be verified. Please try again`);
      })
    );
  }

  /**
   * Logs out the currently logged-in user.
   */
  logout() {
    this.setUser(null);
    this.tokenStorage.removeToken();
  }

  /**
   * Returns an observable containing the current user.
   */
  get user() { return this.user$.asObservable(); }

  /**
   * Registers a new user with provided details.
   * @param userToSave The user details to be registered
   * @returns An observable containing the registered user
   */
  signup(userToSave: any) {
    return this.httpClient.post<any>(`${this.apiUrl}SignUp`, userToSave).pipe
    (
      switchMap(({ user, token }) => {
        this.setUser(user);
        this.tokenStorage.setToken(token);
        return of(user);
      }),
      catchError(err => {
        return throwError(`Registration failed please contact to admin`);
      })
    );
  }

  /**
   * Retrieves the user information of the currently authenticated user.
   * @returns An observable containing the user object
   */
  findMe() {
    const token = this.tokenStorage.getToken();
    if (!token) {
      return EMPTY;
    }

    return this.httpClient.get<any>(`${this.apiUrl}findme`).pipe
    (
      switchMap(({ user }) => {
        this.setUser(user);
        return of(user);
      }),
      catchError(err => {
        return throwError(`Your login details could not be verified. Please try again`);
      })
    );
  }

  /**
   * Sets the current user and broadcasts it to subscribers.
   * @param user The user object to be set
   */
  private setUser(user: any) {
    this.user$.next(user);
  }

}
