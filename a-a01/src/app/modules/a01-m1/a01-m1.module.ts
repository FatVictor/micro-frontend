import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A01M1RoutingModule } from './a01-m1-routing.module';
import { A01M1Component } from './a01-m1.component';


@NgModule({
  declarations: [
    A01M1Component
  ],
  imports: [
    CommonModule,
    A01M1RoutingModule
  ]
})
export class A01M1Module { }
