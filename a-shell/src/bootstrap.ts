import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}
/*
This block will help to deal with multiple angular version or using angular webelements
 */
declare const require: any;
const ngVersion = require('../package.json').dependencies['@angular/core'];
(window as any).plattform = (window as any).plattform || {};
let platform = (window as any).plattform[ngVersion];
if (!platform) {
  platform = platformBrowserDynamic();
  (window as any).plattform[ngVersion] = platform;
}
platform.bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));

/*
Default bootstrap should be
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));

 */
