import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

	//personnel:any={nom:'',prenom:'',email:'',tel:null,date_ne:null,photo:''}
  
  constructor() { }

  ngOnInit() {
  }

  onSavePers(data){
  	console.log(data);
  }

}
