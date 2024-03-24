import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importing the routing module
import { AppComponent } from './app.component'; // Importing the root component
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importing animation module
import { DashboardComponent } from './dashboard/dashboard.component'; // Importing dashboard component
import { HeaderComponent } from './header/header.component'; // Importing header component
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importing form-related modules
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // Importing HTTP client and related modules
import { AuthHeaderInterceptorService } from './interceptors/auth-header-interceptor.service'; // Importing HTTP interceptor
import { HostelDetailComponent } from './hostel-detail/hostel-detail.component'; // Importing hostel detail component
import { ContactUsComponent } from './contact-us/contact-us.component'; // Importing contact us component
import { FooterComponent } from './footer/footer.component'; // Importing footer component
import { NotFoundComponent } from './not-found/not-found.component'; // Importing not found component
import { ProfileComponent } from './profile/profile.component'; // Importing profile component

@NgModule({
  declarations: [ // Declaring components
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    HostelDetailComponent,
    ContactUsComponent,
    FooterComponent,
    NotFoundComponent,
    ProfileComponent,
  ],
  imports: [ // Importing modules
    BrowserModule,
    AppRoutingModule, // Routing module
    BrowserAnimationsModule, // Animation module
    FormsModule,
    HttpClientModule, // HTTP client module
    ReactiveFormsModule
  ],
  providers: [ // Providing services
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptorService, // Using HTTP interceptor for authorization header
      multi: true
    }
  ],
  bootstrap: [AppComponent] // Bootstrapping root component
})
export class AppModule { } // Exporting AppModule as the root module of the application
