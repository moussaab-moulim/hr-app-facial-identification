import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
})
export class EmployeesPage implements OnInit {

  results: Array<any>;
  searchTerm = '';
  constructor(private employeeService: EmployeeService, private toastController: ToastController,
              private loadingController: LoadingController, private router: Router) { }

  ngOnInit() {
    this.employeeService.searchEmployee(this.searchTerm).subscribe(re => {
      this.results = re;
    });
  }

  searchChanged() {
    this.employeeService.searchEmployee(this.searchTerm).subscribe(re => {
      this.results = re;
    });
  }
  async removeClicked(e) {
    const loading = await this.loadingController.create({
      message: 'Deleting'
    });
    await loading.present();
    await this.employeeService.removeEmployee(e.empNo).subscribe(async (respons) => {
      const embedded = '_embedded';
      const employees = 'employees';
      const currEmp = this.results[embedded][employees];
      for (let i = 0; i < currEmp.length; i++) {
        if (currEmp[i] === e) {
          currEmp.splice(i, 1);
          const toast = await this.toastController.create({
            message: 'employee "' + e.firstName + ' ' + e.lastName + '" deleted.',
            duration: 2000,
            position: 'top'
          });
          loading.dismiss();
          toast.present();
        }
      }
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }
}
