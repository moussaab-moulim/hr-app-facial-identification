import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

export enum SearchType {
  all = '',
  employee = 'employee'
}
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const url = 'http://192.168.43.20:8080/';
@Injectable({
  providedIn: 'root'
})

export class EmployeeService {


  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }


  searchEmployee(name: string): Observable<any> {
    return this.http.get(`${url}employees/search/byname?q=${encodeURI(name)}`)
      .pipe(
        map(this.extractData), catchError(this.handleError)
      );
  }
  getEmployeeDetails(id) {
    return this.http.get(`${url}employees/${id}`).pipe(
      map(this.extractData), catchError(this.handleError)
    );
  }
  addEmployee(data): Observable<any> {
    return this.http.post(`${url}employees/`, data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updateEmployee(id: string, data): Observable<any> {
    return this.http.put(`${url}/employees/${id}`, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  removeEmployee(id): Observable<any> {
    return this.http.delete(`${url}/employees/${id}`, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
}
