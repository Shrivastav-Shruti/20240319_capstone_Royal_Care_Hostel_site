/**
 * Service responsible for handling communication with the backend API for admin-related functionalities.
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, switchMap } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { Student } from '../../app/student';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = 'http://localhost:4050/api/student/';

  constructor(private httpClient: HttpClient, private router: Router) { }

  /**
   * Adds a new student to the system.
   * @param studentToSave The student data to be added.
   * @returns An observable with a message indicating the success or failure of the operation.
   */
  addStudent(studentToSave: Student) {
    return this.httpClient.post<any>(`${this.apiUrl}addStudent`, studentToSave).pipe(
      switchMap(({ student, msg }) => {
        return of(msg);
      }),
      catchError(err => {
        const msg = 'Registration failed please contact the admin';
        return of(msg);
      })
    );
  }

  /**
   * Updates an existing student's information.
   * @param studentToUpdate The updated student data.
   * @returns An observable with a message indicating the success or failure of the operation.
   */
  updateStudent(studentToUpdate: any) {
    return this.httpClient.post<any>(`${this.apiUrl}updateStudent`, studentToUpdate).pipe(
      switchMap(({ msg }) => {
        return of(msg);
      }),
      catchError(error => {
        const msg = "Student Details not Updated. Please try again";
        return of(error);
      })
    );
  }

  /**
   * Removes a student from the system.
   * @param studentToRemove The student data to be removed.
   * @returns An observable with a message indicating the success or failure of the operation.
   */
  removeStudent(studentToRemove: any) {
    return this.httpClient.post<any>(`${this.apiUrl}removeStudent`, studentToRemove).pipe(
      switchMap(({ msg }) => {
        return of(msg);
      }),
      catchError(error => {
        const msg = "Student Details not Removed. Please try again";
        return of(error);
      })
    );
  }

  // Methods for fetching room details for boys and girls...

  // Method to fetch details of boys' super deluxe rooms...
  boysSuperDeluxRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/boysRooms/superDeluxeRooms`).pipe(
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Super Deluxe Room Details not fetched. Please try again";
        return of(msg);
      })
    );
  }

  // Method to fetch details of boys' deluxe rooms...
  boysDeluxRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/boysRooms/deluxeRooms`).pipe(
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Deluxe Room Details not fetched. Please try again";
        return of(msg);
      })
    );
  }

  // Method to fetch details of boys' standard rooms...
  boysStandardRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/boysRooms/standardRooms`).pipe(
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Boys Standard Room Details not fetched. Please try again";
        return of(msg);
      })
    );
  }

  // Method to fetch details of girls' super deluxe rooms...
  girlsSuperDeluxRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/girlsRooms/superDeluxeRooms`).pipe(
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Girls Super Deluxe Room Details not fetched. Please try again";
        return of(msg);
      })
    );
  }

  // Method to fetch details of girls' deluxe rooms...
  girlsDeluxRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/girlsRooms/deluxeRooms`).pipe(
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Girls Deluxe Room Details not fetched. Please try again";
        return of(msg);
      })
    );
  }

  // Method to fetch details of girls' standard rooms...
  girlsStandardRooms() {
    return this.httpClient.get<any>(`http://localhost:4050/api/girlsRooms/standardRooms`).pipe(
      switchMap(({ total }) => {
        return of(total);
      }),
      catchError(error => {
        const msg = "Girls Standard Room Details not fetched. Please try again";
        return of(msg);
      })
    );
  }

  /**
   * Fetches hostel price details from the backend.
   * @returns An observable with the hostel price details.
   */
  findHostelPriceDetails() {
    return this.httpClient.get<any>(`http://localhost:4050/api/prices/findHostelPriceDetails`).pipe(
      switchMap(({ price }) => {
        return of(price);
      }),
      catchError(err => {
        return throwError(`Hostel Price Details not fetched. Please try again`);
      })
    );
  }

  /**
   * Updates hostel price details in the backend.
   * @param priceDetails The updated price details.
   * @returns An observable with a message indicating the success or failure of the operation.
   */
  updatePriceDetails(priceDetails: any) {
    return this.httpClient.post<any>(`http://localhost:4050/api/prices/updatePriceDetails`, priceDetails).pipe(
      switchMap(({ msg }) => {
        return of(msg);
      }),
      catchError(error => {
        const msg = "Price Details not Updated. Please try again";
        return of(error);
      })
    );
  }

  /**
   * Fetches all users from the backend.
   * @returns An observable with the list of users.
   */
  getAllUsers() {
    return this.httpClient.get<any>(`http://localhost:4050/api/users/AllUser`).pipe(
      switchMap(({ users }) => {
        return of(users);
      }),
      catchError(err => {
        return throwError(`Users Details not fetched. Please try again`);
      })
    );
  }

  /**
   * Updates user details in the backend.
   * @param user The updated user data.
   * @returns An observable with a message indicating the success or failure of the operation.
   */
  updateUser(user: any) {
    return this.httpClient.post<any>(`http://localhost:4050/api/users/userUpdate`, user).pipe(
      switchMap(({ msg }) => {
        return of(msg);
      }),
      catchError(error => {
        const msg = "User Details not Updated. Please try again";
        return of(error);
      })
    );
  }

}
