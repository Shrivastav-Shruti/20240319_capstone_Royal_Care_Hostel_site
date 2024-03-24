import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  TOKEN_KEY = 'Hostel.AuthToken'; // Key used to store the authentication token in local storage

  constructor() { }

  // Method to set the authentication token in local storage
  setToken(token: string) {
    // If the token is falsy, return early
    if (!token) {
      return;
    }

    // Remove any existing token before setting the new token
    this.removeToken();

    // Set the new token in local storage
    window.localStorage.setItem(this.TOKEN_KEY, token);
  }

  // Method to retrieve the authentication token from local storage
  getToken() {
    return window.localStorage.getItem(this.TOKEN_KEY);
  }

  // Method to remove the authentication token from local storage
  removeToken() {
    window.localStorage.removeItem(this.TOKEN_KEY);
  }

}
