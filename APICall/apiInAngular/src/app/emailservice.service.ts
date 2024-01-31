import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmailserviceService {

  private apiUrl = 'http://localhost:8080/api/email/send';

  constructor(private http: HttpClient) { }

  sendEmail(emailRequest: any): Observable<any> {
    return this.http.post(this.apiUrl, emailRequest);
  }
}
