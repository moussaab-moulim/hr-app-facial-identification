import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';/* ApiREST relation*/

@Injectable({
  providedIn: 'root'
})

export class DataService {
  public host: string = "http://localhost:8080";
  constructor(private http: HttpClient) { }


  getAllPersonnels() {
    return this.http.get(this.host + "/employees");
  }


  deleteP(url) {
    return this.http.delete(url);
  }
}
