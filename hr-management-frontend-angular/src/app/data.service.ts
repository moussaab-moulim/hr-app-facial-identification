import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';/* ApiREST relation*/

@Injectable({
  providedIn: 'root'
})

export class DataService {


	public host:string = "http://localhost:8084";
  constructor(private http: HttpClient) { }


  getAllPersonnels(){

  	return this.http.get(this.host+"/personnels");
  }


  deleteP(url){
  	return this.http.delete(url);
  }
}
