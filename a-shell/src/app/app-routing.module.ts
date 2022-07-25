import {APP_INITIALIZER, NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';

import {HttpClient} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {loadRemoteModule, LoadRemoteModuleOptions} from '@angular-architects/module-federation';

const APP_ROUTES: Routes = [{path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent}];

export type Microfrontend = LoadRemoteModuleOptions & {
  displayName: string;
  routePath: string;
  ngModuleName: string;
}


@NgModule({
  imports: [RouterModule.forRoot([], {initialNavigation: 'disabled'})],
  exports: [RouterModule],
  providers: [{provide: APP_INITIALIZER, useFactory: configServiceFactory, deps: [Router, HttpClient], multi: true}]
})
export class AppRoutingModule {
}

export function configServiceFactory(router: Router, http: HttpClient): Function {
  return () => {
    return http.get<Array<Microfrontend>>('http://localhost:3000/routes').toPromise()
      .then(options => {

        const lazyRoutes: Routes = options.map(o => ({
          path: o.routePath,
          loadChildren: () => loadRemoteModule(o).then(m => m[o.ngModuleName])
        }));

        router.resetConfig([...APP_ROUTES, ...lazyRoutes]);
        router.initialNavigation();
      });
  }
}
