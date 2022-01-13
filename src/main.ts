import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

console.log(new Date() + ", using the environment " + JSON.stringify(environment));

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
