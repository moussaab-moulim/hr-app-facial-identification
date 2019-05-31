import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterEmpComponent } from './consulter-emp.component';

describe('ConsulterEmpComponent', () => {
  let component: ConsulterEmpComponent;
  let fixture: ComponentFixture<ConsulterEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
