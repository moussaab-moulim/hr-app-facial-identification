import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// rmoving home path and change redirect to employees
// changing path for emplyees detail to employee/:id
const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'consulter', loadChildren: './pages/consulter/consulter.module#ConsulterPageModule' },
  { path: 'add', loadChildren: './pages/add/add.module#AddPageModule' },
  { path: 'employees', loadChildren: './pages/employees/employees.module#EmployeesPageModule' },
  { path: 'employees/:id', loadChildren: './pages/employee-details/employee-details.module#EmployeeDetailsPageModule' },
  { path: 'identify-me', loadChildren: './pages/identify-me/identify-me.module#IdentifyMePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
