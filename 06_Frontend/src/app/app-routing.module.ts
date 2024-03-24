import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { AuthModule } from './auth/auth.module';
import { HostelDetailComponent } from './hostel-detail/hostel-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component'; 
import { GirlsDeluxComponent } from './girls-delux/girls-delux.component';
import { GirlsSuperdeluxComponent } from './girls-superdelux/girls-superdelux.component';
import { GirlsStandardComponent } from './girls-standard/girls-standard.component';
import { BoysSuperdeluxComponent } from './boys-superdelux/boys-superdelux.component';
import { BoysDeluxComponent } from './boys-delux/boys-delux.component';
import { BoysStandardComponent } from './boys-standard/boys-standard.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'dashboard' // Redirect to the dashboard component if the path is empty
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) // Lazy loading for the AuthModule
  },
  {
    path:'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) // Lazy loading for the AdminModule
  },
  {
    path:'dashboard',
    pathMatch:'full',
    component: DashboardComponent // Route to the DashboardComponent
  },
  { 
    path: 'hostel-detail', 
    pathMatch:'full',
    component: HostelDetailComponent  // Route to the HostelDetailComponent
  },
  { 
    path: 'contactUs', 
    pathMatch:'full',
    component: ContactUsComponent  // Route to the ContactUsComponent
  },
  { 
    path: 'profile', 
    pathMatch:'full',
    component: ProfileComponent  // Route to the ProfileComponent
  }, 
  { 
    path: 'girlssuperdelux', 
    pathMatch:'full',
    component: GirlsSuperdeluxComponent  // Route to the GirlsSuperdeluxComponent
  }, 
  { 
    path: 'girlsdelux', 
    pathMatch:'full',
    component: GirlsDeluxComponent  // Route to the GirlsDeluxComponent
  },  
  { 
    path: 'girlsstandard', 
    pathMatch:'full',
    component: GirlsStandardComponent  // Route to the GirlsStandardComponent
  },  
  { 
    path: 'boyssuperdelux', 
    pathMatch:'full',
    component: BoysSuperdeluxComponent  // Route to the BoysSuperdeluxComponent
  }, 
  { 
    path: 'boysdelux', 
    pathMatch:'full',
    component: BoysDeluxComponent  // Route to the BoysDeluxComponent
  }, 
  { 
    path: 'boysstandard', 
    pathMatch:'full',
    component: BoysStandardComponent  // Route to the BoysStandardComponent
  }, 

  {path: '404', component: NotFoundComponent}, // Route for handling 404 errors
  {path: '**', component: NotFoundComponent} // Wildcard route for handling unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
