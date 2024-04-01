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

import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'dashboard'
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path:'dashboard',
    pathMatch:'full',
    component: DashboardComponent
  },
  { 
    path: 'hostel-detail', 
    pathMatch:'full',
    component: HostelDetailComponent 
  },
  { 
    path: 'contactUs', 
    pathMatch:'full',
    component: ContactUsComponent 
  },
  { 
    path: 'profile', 
    pathMatch:'full',
    component: ProfileComponent 
  }, 
  { 
    path: 'girlssuperdelux', 
    pathMatch:'full',
    component: GirlsSuperdeluxComponent
  }, 
  { 
    path: 'girlsdelux', 
    pathMatch:'full',
    component: GirlsDeluxComponent
  },  
  { 
    path: 'girlsstandard', 
    pathMatch:'full',
    component: GirlsStandardComponent
  },  
  { 
    path: 'boyssuperdelux', 
    pathMatch:'full',
    component: BoysSuperdeluxComponent
  }, 
  { 
    path: 'boysdelux', 
    pathMatch:'full',
    component: BoysDeluxComponent
  }, 
  { 
    path: 'boysstandard', 
    pathMatch:'full',
    component: BoysStandardComponent
  }, 
  { 
    path: 'forgetpassword', 
    pathMatch:'full',
    component: ForgetPasswordComponent
  },  
  { 
    path: 'resetpassword', 
    pathMatch:'full',
    component: ResetPasswordComponent
  }, 
  {path: '404', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
