import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';/* ApiREST relation*/
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ConsulterComponent } from './consulter/consulter.component';
import { FormsModule } from '@angular/forms';
import { EditerComponent } from './editer/editer.component';
import { ConsulterEmpComponent } from './consulter-emp/consulter-emp.component';
import { AuthComponent } from './auth/auth.component';
import { TensorflowComponent } from './tensorflow/tensorflow.component';
import { MonProfileComponent } from './mon-profile/mon-profile.component';
@NgModule({

  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AddComponent,
    ConsulterComponent,
    EditerComponent,
    ConsulterEmpComponent,
    AuthComponent,
    TensorflowComponent,
    MonProfileComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
