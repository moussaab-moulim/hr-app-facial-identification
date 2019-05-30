import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  public host: string = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  getAllPersonnels() {

    return this.http.get(this.host + "/employees");
  }


  deleteP(url: string) {
    return this.http.delete(url);
  }
}

