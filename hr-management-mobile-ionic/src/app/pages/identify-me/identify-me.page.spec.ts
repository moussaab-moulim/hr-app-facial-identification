import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyMePage } from './identify-me.page';

describe('IdentifyMePage', () => {
  let component: IdentifyMePage;
  let fixture: ComponentFixture<IdentifyMePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentifyMePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyMePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
