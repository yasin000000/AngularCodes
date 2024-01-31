import { Component } from '@angular/core';
import { GetapiserviceService } from '../getapiservice.service';

@Component({
  selector: 'app-getapi',
  templateUrl: './getapi.component.html',
  styleUrls: ['./getapi.component.css'],
  
})
export class GetapiComponent {
  

  apiData: any[] = [];
  getApiDataa: any;
  
  constructor(private callApiService: GetapiserviceService) {}
  ngOnInit() {
    this.fetchApiData();
  }
  fetchApiData() {
    this.callApiService.getApiData().subscribe(
      (data: any[]) => {
        this.apiData = data;
      },
      (error: any) => {
        console.error('Error fetching API data:', error);
      }
    );
  }

}
