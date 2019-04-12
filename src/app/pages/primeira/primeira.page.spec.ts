import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeiraPage } from './primeira.page';

describe('PrimeiraPage', () => {
  let component: PrimeiraPage;
  let fixture: ComponentFixture<PrimeiraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeiraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
