import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';/* ApiREST relation*/
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Employe } from './model/employe.model';



@Injectable({
  providedIn: 'root'
})

export class DataService {
  public host = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // fonctin consulter les employees :
  getAllPersonnels(page: number, size: number): Observable<any> {
    return this.http.get(`${this.host}employees?page=${page}&size=${size}`);
  }

  // fonction supprimer un employe precis avec id
  deleteP(id) {
    return this.http.delete(`${this.host}employees/${id}`);
  }

  // fonction ajouter un employee :
  public saveResource(url, data): Observable<any> {
    return this.http.post(url, data);
  }


  // fonction consulter un employee :
  public getResource(url): Observable<any> {
    return this.http.get(url);
  }

  // fonction editer un employee :
  public editResource(url, data): Observable<any> {
    return this.http.put(url, data);
  }



}

