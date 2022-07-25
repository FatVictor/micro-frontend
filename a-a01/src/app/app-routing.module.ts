import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: 'm1',
  loadChildren: () => import('./modules/a01-m1/a01-m1.module').then(m => m.A01M1Module)
}, {
  path: 'm2',
  loadChildren: () => import('./modules/a01-m2/a01-m2.module').then(m => m.A01M2Module)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
