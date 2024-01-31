import { Component } from '@angular/core';
import { GetapiserviceService } from '../getapiservice.service';

@Component({
  selector: 'app-getapi-with-button',
  templateUrl: './getapi-with-button.component.html',
  styleUrls: ['./getapi-with-button.component.css']
})
export class GetapiWithButtonComponent {
  users:any
  constructor(private callApiService: GetapiserviceService) {}
  getData(){

    this.callApiService.getApiData().subscribe(
      (data: any[]) => {
        this.users = data;
      },
      (error: any) => {
        console.error('Error fetching API data:', error);
      }
    );
  }
  
}
