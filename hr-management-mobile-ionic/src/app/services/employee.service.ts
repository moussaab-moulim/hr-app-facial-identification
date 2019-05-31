import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  all = '',
  employee = 'employee'
}
@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  public url = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  searchEmployee(name: string): Observable<any> {
    return this.http.get(`${this.url}employees/search/byname?q=${encodeURI(name)}`)
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
  getEmployeeDetails(id) {
    return this.http.get(`${this.url}employees/${id}`);
  }
  removeEmployee(id) {
    return this.http.delete(`${this.url}employees/${id}`);
  }
}
