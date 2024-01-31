import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateapiserviceService {
  private apiUrl = 'http://localhost:8080/persons/';

  constructor(private http: HttpClient) { }

  getPersons(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addPerson(personData: any): Observable<any> {
    return this.http.post(this.apiUrl, personData);
  }

  updatePerson(id: number, personData: any): Observable<any> {
    const updateUrl = `${this.apiUrl}${id}`;
    return this.http.put(updateUrl, personData);
  }

  deletePerson(id: number): Observable<any> {
    const deleteUrl = `${this.apiUrl}${id}`;
    return this.http.delete(deleteUrl);
  }
}
