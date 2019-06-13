import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      { path: 'add', loadChildren: '../add/add.module#AddPageModule' },
      { path: 'employees', loadChildren: '../employees/employees.module#EmployeesPageModule' },
      { path: 'employees/:id', loadChildren: '../employee-details/employee-details.module#EmployeeDetailsPageModule' },
      { path: 'identify-me', loadChildren: '../identify-me/identify-me.module#IdentifyMePageModule' },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/employees',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
