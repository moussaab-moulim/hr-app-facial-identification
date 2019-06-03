import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router'
import { DataService } from '../data.service';
import {Employe} from '../model/employe.model';

@Component({
  selector: 'app-editer',
  templateUrl: './editer.component.html',
  styleUrls: ['./editer.component.css']
})
export class EditerComponent implements OnInit {
	private currentEmp:Employe;
  private url:string;

  constructor(private router:Router,private activatedRoute:ActivatedRoute, private restApi: DataService
  	) { }



// charger les infos de l'employee by id

  ngOnInit() {

  this.url = atob(this.activatedRoute.snapshot.params.id);
  this.restApi.getResource(this.url).subscribe(data=> {
  	this.currentEmp =data;
  },err=>{
      console.log(err);

    })

  }


// enregistrer les modifications faites 
  onEditEmpl(value: any ){
    this.restApi.editResource(this.url,value).subscribe(data=>{
      alert("Mise a jour effectuee avec succes !")
    },err=>{
      console.log(err);
    })
  }

}
