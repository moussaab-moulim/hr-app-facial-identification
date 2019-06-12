import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { Gender } from '../../models/Gender';
import { Employee } from '../../models/Employee';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  //personnel:any={nom:'',prenom:'',email:'',tel:null,date_ne:null,photo:''}
  genderEnum = Gender;
  keys = Object.keys;

  constructor(public employeeService: EmployeeService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
  ) {
  }

  ngOnInit() {
  }

  async addEmployee(form: NgForm) {
    const employee: Employee = {
      empNo: null,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      birthDate: form.value.birthDate,
      email: form.value.email,
      phone: form.value.phone,
      photo: form.value.photo,
      hireDate: form.value.hireDate,
      gender: form.value.gender,
    };
    console.log(JSON.stringify(employee));
    await this.employeeService.addEmployee(JSON.stringify(employee))
      .subscribe(res => {
        const id = 'empNo';
        this.router.navigate(['/employees/' + res[id]]);
      }, (err) => {
        console.log(err);
      });
  }
}