import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A01M2Component } from './a01-m2.component';

describe('A01M2Component', () => {
  let component: A01M2Component;
  let fixture: ComponentFixture<A01M2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A01M2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A01M2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
