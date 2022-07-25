import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A01M2RoutingModule } from './a01-m2-routing.module';
import { A01M2Component } from './a01-m2.component';


@NgModule({
  declarations: [
    A01M2Component
  ],
  imports: [
    CommonModule,
    A01M2RoutingModule
  ]
})
export class A01M2Module { }
