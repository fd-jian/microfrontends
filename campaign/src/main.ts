import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// needs to be imported https://github.com/manfredsteyer/ngx-build-plus/issues/4
import 'zone.js';

const bootStrapApplication = () => {
  if (environment.production) {
    enableProdMode();
  }

  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}


const mountFunction = () => {

  const elem = document.createElement('app-root');
  const container = document.querySelector('#Campaign-container');

  container.appendChild(elem);

  bootStrapApplication();
}

if (window.mount == null) {
  window.mount = {
    Campaign: mountFunction
  };
} else {
  window.mount.Campaign = mountFunction;
}

 