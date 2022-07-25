import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {createCustomElement} from '@angular/elements';
import {ElementComponent} from './components/element/element.component';
import {LoginComponent} from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    customElements.define('a02-app', createCustomElement(AppComponent, {injector: this.injector}));
    customElements.define('a02-element', createCustomElement(ElementComponent, {injector: this.injector}));
    customElements.define('a02-login', createCustomElement(LoginComponent, {injector: this.injector}));
  }
}
