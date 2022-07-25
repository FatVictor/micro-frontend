import {AfterViewInit, Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {loadRemoteModule} from '@angular-architects/module-federation';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.scss']
})
export class RemoteComponent implements OnInit, AfterViewInit {
  @ViewChild('placeHolder', {read: ViewContainerRef, static: true})
  viewContainer!: ViewContainerRef;

  constructor(private injector: Injector,
              private cfr: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
  }

  async ngAfterViewInit(): Promise<void> {
    const component = await loadRemoteModule({remoteEntry: 'http://localhost:4201/remoteEntry.js', exposedModule: './LoginComponent', remoteName: 'a01'})
      .then(m => m.LoginComponent);

    const factory = this.cfr.resolveComponentFactory(component);

    this.viewContainer.createComponent(factory, undefined, this.injector);
  }

}
