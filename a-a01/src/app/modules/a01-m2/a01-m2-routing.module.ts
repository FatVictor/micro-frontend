import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { A01M2Component } from './a01-m2.component';

const routes: Routes = [{ path: '', component: A01M2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A01M2RoutingModule { }
