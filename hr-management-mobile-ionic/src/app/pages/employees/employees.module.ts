import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmployeesPage } from './employees.page';
import { ApiPopoverComponent } from 'src/app/api-popover/api-popover.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents:[ApiPopoverComponent],
  declarations: [EmployeesPage, ApiPopoverComponent]
})
export class EmployeesPageModule {}
