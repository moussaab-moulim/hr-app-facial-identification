import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent implements OnInit {


  constructor(private empService: DataService) { }

  employees ;

  ngOnInit() {

    this.empService.getAllPersonnels()
      .subscribe(data => {
      this.employees = data;
      }, err => {
        console.log(err)
      })

  }

  onDeletePers(emp) {

    this.empService.deleteP(emp.empNo).subscribe(data => {
    this.employees = data;
    }, err => {
      console.log(err)
    })
  }

}
