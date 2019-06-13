import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const url = 'http://192.168.1.8:8080/';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor() { }
}
