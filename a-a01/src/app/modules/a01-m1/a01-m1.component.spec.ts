import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A01M1Component } from './a01-m1.component';

describe('A01M1Component', () => {
  let component: A01M1Component;
  let fixture: ComponentFixture<A01M1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A01M1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A01M1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
