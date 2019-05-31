import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AddComponent} from './add/add.component';
import {ConsulterComponent} from './consulter/consulter.component';

const routes: Routes = [

{path: '', component:HomeComponent },
{path: 'add', component:AddComponent },
{path: 'consulter', component:ConsulterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
