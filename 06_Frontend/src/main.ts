// Import necessary Angular modules and functions
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Import the root module of the application
import { AppModule } from './app/app.module';

// Import environment configuration
import { environment } from './environments/environment';

// Check if the application is running in production mode
if (environment.production) {
  // If it's a production environment, enable production mode
  enableProdMode();
}

// Bootstrap the root module of the application using platformBrowserDynamic()
platformBrowserDynamic().bootstrapModule(AppModule)
  // Catch and log any errors that occur during the bootstrap process
  .catch(err => console.error(err));
