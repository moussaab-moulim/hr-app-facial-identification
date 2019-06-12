import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { Gender } from '../../models/Gender';
import { Employee } from '../../models/employee';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.page.html',
  styleUrls: ['./employee-details.page.scss'],
})
export class EmployeeDetailsPage implements OnInit {

  info: Employee = {
    empNo: null,
    firstName: null,
    lastName: null,
    birthDate: null,
    email: null,
    phone: null,
    photo: null,
    hireDate: null,
    gender: null
  };
  test: any;
  editMode = false;
  genderEnum = Gender;
  keys = Object.keys;
  private updateForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private employeeService: EmployeeService,
    private loadingController: LoadingController, private router: Router,
    private formBuilder: FormBuilder) {
      this.updateForm = this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        birthDate: [''],
        email: [''],
        phone: [''],
        photo: [''],
        hireDate: [''],
        gender: ['']
      });
  }

  ngOnInit() {
    this.getEmployee();
  }

  activateEdit(val: boolean) {
    this.editMode = val;
    this.employeeService.getEmployeeDetails(this.activatedRoute.snapshot.paramMap.get('id')).subscribe((res: Employee) => {
this.updateForm = this.formBuilder.group({
  firstName: [res.firstName],
    lastName: [res.lastName],
    birthDate: [res.birthDate],
    email: [res.email],
    phone: [res.phone],
    photo: [res.phone],
    hireDate: [res.hireDate],
    gender: [res.gender]
});
    });
  }
  async updateEmployee(form) {
    const employee: Employee = {
      empNo: null,
      firstName: this.updateForm.value.firstName,
      lastName:   this.updateForm.value.lastName,
      birthDate:   this.updateForm.value.birthDate,
      email:   this.updateForm.value.email,
      phone:   this.updateForm.value.phone,
      photo:   this.updateForm.value.photo,
      hireDate:   this.updateForm.value.hireDate,
      gender:   this.updateForm.value.gender,
    };
    console.log(JSON.stringify(employee));
    await this.employeeService.updateEmployee(this.activatedRoute.snapshot.paramMap.get('id'), JSON.stringify(employee))
      .subscribe(res => {
        const id = 'empNo';
        this.editMode = false;
        this.info = res;
        //this.router.navigate(['/employees/' + res[id]]);
      }, (err) => {
        console.log(err);
      });
  }
  async getEmployee() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    console.log(this.employeeService.getEmployeeDetails(this.activatedRoute.snapshot.paramMap.get('id')));
    await this.employeeService.getEmployeeDetails(this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(res => {
        console.log(res);
        this.info = res as Employee;
        loading.dismiss();
        return res;
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  public age(birth: any): number {
    const today = new Date();
    const birthDate = new Date(birth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
