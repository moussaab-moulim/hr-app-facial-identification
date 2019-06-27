import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent implements OnInit {


  constructor(private empService: DataService, private router:Router) { }

  public employees:any ;
  public size:number=6;
  public currentPage:number=0;
  public totalPages:number;
  public pages:Array<number>;

  searchTerm = '';

  ngOnInit() {
 // l'appel du fonction getAllPersonnels ( consulter les employees)

    this.empService.getAllPersonnels(this.currentPage,this.size)
      .subscribe(data => {
      
      this.totalPages=data["page"].totalPages;
      this.pages=new Array<number>(this.totalPages);
     this.employees = data;

      }, err => {
        console.log(err)
      })


  }


   searchChanged() {
    this.empService.searchEmployee(this.searchTerm).subscribe(re => {
      this.employees = re;
    });
  }
 // l'appel du fonction deleteP => pour le button supprimer un employe
  onDeleteEmp(emp) {
    let conf= confirm("Etes vous sure ?");
    if (conf) {
      this.empService.deleteP(emp.empNo).subscribe(data => {
    this.employees = data;
    this.ngOnInit();
    }, err => {
      console.log(err)
    })
    }
    
  }

// recupperer l'id pour editer un employe 
onEditEmp1(emp){
  let url =emp._links.self.href;
this.router.navigateByUrl("/editer/"+btoa(url) );
}

//Consulter un employe 
onConsultEmp1(emp){

  let url =emp._links.self.href;
this.router.navigateByUrl("/consulterEmp/"+btoa(url) );

}

// la fonction qui retourne la page consulter apres avoir 
// cliquer sur la pagination :
  onPageEmp(i){
    this.currentPage=i;
    this.ngOnInit();
  }

 

}
