import {AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {loadRemoteModule, LoadRemoteModuleOptions} from '@angular-architects/module-federation';
import {Router, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'a-shell';
  options: any[] = [];
  @ViewChild('vc')
  vc!: ElementRef;
  @ViewChild('vc2')
  vc2!: ElementRef;

  constructor(private router: Router, private http: HttpClient) {

  }

  ngAfterViewInit(): void {
    let elementName = 'render-form';
    import('r01/render-form')
      .then(_ => console.debug(`element ${elementName} loaded!`))
      .catch(err => console.error(`error loading ${elementName}:`, err));
    this.vc.nativeElement.appendChild(document.createElement(elementName));

    let elementName2 = 'a02-elements';
    import('a02/a02-elements')
      .then(_ => console.debug(`element ${elementName2} loaded!`))
      .catch(err => console.error(`error loading ${elementName2}:`, err));
    this.vc2.nativeElement.appendChild(document.createElement('a02-login'));
    this.vc2.nativeElement.appendChild(document.createElement('a02-element'));

  }


  async ngOnInit(): Promise<void> {
    this.options = await this.http.get<Array<any>>('http://localhost:3000/routes').toPromise();
  }

//
}
