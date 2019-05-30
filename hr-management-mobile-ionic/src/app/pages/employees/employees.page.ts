import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  constructor(private employeeService: EmployeeService, private toastController: ToastController) { }

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
  removeClicked(e) {

    this.employeeService.removeEmployee(e.empNo).subscribe(async (respons) => {
      for (let i = 0; i < this.results.length; i++) {
        if (this.results[i] === e) {
          this.results.splice(i, 1);
          const toast = await this.toastController.create({
            message: 'employee "' + e.firstName + ' ' + e.lastName + '" deleted.',
            duration: 2000,
            position: 'top'
          });
          toast.present();
        }
      }
    });
  }
}
