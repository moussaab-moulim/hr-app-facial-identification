import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent implements OnInit {


  constructor(private pers:DataService) { }

	personnels;

  ngOnInit() {

	this.pers.getAllPersonnels()
	.subscribe(data =>{this.personnels=data;
	},err=>{console.log(err)
	})

  }

  onDeletePers(per) {

    this.pers.deleteP(per).subscribe(data =>{this.personnels=data;
  },err=>{console.log(err)
  })
  }

}
