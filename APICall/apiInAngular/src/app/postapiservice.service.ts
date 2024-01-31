import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostapiserviceService {

  private apiUrl = 'http://localhost:8080/persons/';

  constructor(private http: HttpClient) { }

  addPerson(personData: any): Observable<any> {
    return this.http.post(this.apiUrl, personData);
  }
}
