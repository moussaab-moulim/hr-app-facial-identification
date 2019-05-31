import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';/* ApiREST relation*/
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  public host = "http://localhost:8080/";
  constructor(private http: HttpClient) { }


  getAllPersonnels(): Observable<any> {
    return this.http.get(`${this.host}employees/`)
      .pipe(
        map(results => {
          console.log('RAW', results);
          const racine = '_embedded';
          const employees = 'employees';
          console.log('RAW', results[racine][employees]);
          return results[racine][employees];
        })
      );
  }


  deleteP(id) {
    return this.http.delete(`${this.host}employees/${id}`);
  }
}
