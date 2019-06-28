import { Component, OnInit } from '@angular/core';
import {  NgForm} from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-api-popover',
  templateUrl: './api-popover.component.html',
  styleUrls: ['./api-popover.component.scss'],
})
export class ApiPopoverComponent implements OnInit {

  constructor(private popOverController: PopoverController, private employeeService: EmployeeService ) { }

  ngOnInit() {}

  
}
