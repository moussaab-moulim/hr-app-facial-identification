import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterComponent } from './consulter.component';

describe('ConsulterComponent', () => {
  let component: ConsulterComponent;
  let fixture: ComponentFixture<ConsulterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
