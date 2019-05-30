import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.page.html',
  styleUrls: ['./consulter.page.scss'],
})
export class ConsulterPage implements OnInit {

  constructor(private pers:DataService) { }

  personnels: Object;

  ngOnInit() {
  	this.pers.getAllPersonnels()
	.subscribe(data =>{this.personnels=data;
	},err=>{console.log(err)
	})

  }

  onDeletePers(per: string) {

    this.pers.deleteP(per).subscribe(data =>{this.personnels=data;
  },err=>{console.log(err)
  })
  }

}
