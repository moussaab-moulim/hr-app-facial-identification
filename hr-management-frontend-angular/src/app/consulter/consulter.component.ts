import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent implements OnInit {


  constructor(private pers:DataService) { }

	employees;

  ngOnInit() {

	this.pers.getAllPersonnels()
	.subscribe(data =>{this.employees=data;
	},err=>{console.log(err)
	})

  }

  onDeletePers(id) {

    this.pers.deleteP(id).subscribe(data =>{this.employees=data;
  },err=>{console.log(err)
  })
  }

}
