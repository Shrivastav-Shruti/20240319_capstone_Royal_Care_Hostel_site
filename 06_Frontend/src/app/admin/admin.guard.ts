/**
 * Injectable service responsible for guarding routes to allow access only to authenticated admin users.
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  // user: User;
  routeURL: string;

  /**
   * Initializes the AdminGuard service.
   * @param router The Angular router service for navigation.
   * @param authService The authentication service to check the user's role.
   */
  constructor(private router: Router, private authService: AuthService) 
  {
    // initialize 'routeURL' with current route URL
    this.routeURL = this.router.url;
  }

  /**
   * Determines whether the current user is authorized to access the route.
   * @param route The route that is being activated.
   * @param state The current router state.
   * @returns A promise that resolves to true if the user is authorized, false otherwise.
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
      return new Promise((resolve, reject) => {
        this.authService.findMe().subscribe((user) => {
          // console.log('user', user);
          if (user?.role == 'User' && this.routeURL !== '/SignIn') {
            this.routeURL = '/';
            // Navigate to the home page if the user is not an admin.
            this.router.navigate(['/']);
            return resolve(false);
          } else {
            // console.log(`done`);
            this.routeURL = this.router.url;
            return resolve(true);
          }
        });

        // this.router.navigate(['/']);

      });
  }
}
