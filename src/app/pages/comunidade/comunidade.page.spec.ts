import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunidadePage } from './comunidade.page';

describe('ComunidadePage', () => {
  let component: ComunidadePage;
  let fixture: ComponentFixture<ComunidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunidadePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
