import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ConsulterComponent } from './consulter/consulter.component';
import { AuthComponent } from './auth/auth.component';
import { EditerComponent } from './editer/editer.component';
import { ConsulterEmpComponent } from './consulter-emp/consulter-emp.component';
import { TensorflowComponent } from './tensorflow/tensorflow.component';
import { MonProfileComponent } from './mon-profile/mon-profile.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'home', component: HomeComponent },

  { path: 'add', component: AddComponent },
  { path: 'consulter', component: ConsulterComponent },
  { path: 'login', component: AuthComponent },
  { path: 'editer/:id', component: EditerComponent },
  { path: 'consulterEmp/:id', component: ConsulterEmpComponent },
  { path: 'tensorflow', component: TensorflowComponent },
  { path: 'monProfile', component: MonProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
