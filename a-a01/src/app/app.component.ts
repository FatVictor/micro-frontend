import {Component, Injector} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {ElementComponent} from './components/element/element.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a-a01';

  //ng generate module modules/module-name --module app --routing true --route module-name
  constructor(injector: Injector) {
    // Register the custom element with the browser.
    customElements.define('a01-element', createCustomElement(ElementComponent, {injector}));
  }
}
