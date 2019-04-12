import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaPage } from './segunda.page';

describe('SegundaPage', () => {
  let component: SegundaPage;
  let fixture: ComponentFixture<SegundaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
