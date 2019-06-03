import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router'
import {Employe} from '../model/employe.model';
import { DataService } from '../data.service';


@Component({
  selector: 'app-consulter-emp',
  templateUrl: './consulter-emp.component.html',
  styleUrls: ['./consulter-emp.component.css']
})
export class ConsulterEmpComponent implements OnInit {

 private currentEmp:Employe;
  constructor(private router:Router,
  	private activatedRoute:ActivatedRoute, private restApi: DataService
  	) { }



// charger les infos de l'employee by id

  ngOnInit() {
  
  
    let url = atob(this.activatedRoute.snapshot.params.id);
  this.restApi.getResource(url).subscribe(data=> {
    this.currentEmp =data;
  },err=>{
      console.log(err);

    })


}


}
