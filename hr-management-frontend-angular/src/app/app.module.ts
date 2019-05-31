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
import { FormsModule }   from '@angular/forms';
@NgModule({
  
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AddComponent,
    ConsulterComponent
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
