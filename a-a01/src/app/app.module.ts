import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ElementComponent } from './components/element/element.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
