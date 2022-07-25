import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { A01M1Component } from './a01-m1.component';

const routes: Routes = [{ path: '', component: A01M1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A01M1RoutingModule { }
