import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import {Employe} from '../model/employe.model';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  private currentEmp: Employe;
    constructor( private restApi: DataService , private router:Router ) { }

  ngOnInit() {
  }


// ajouter un employe :
  onSaveEmpl(data : any){
  	console.log(data);
    this.restApi.saveResource(this.restApi.host+"employees",data)
    .subscribe(res=>{
      this.currentEmp=res;
      this.router.navigateByUrl("/consulter");

      console.log(res)
    },err=>{
      console.log(err);

    })
    
  }

}
