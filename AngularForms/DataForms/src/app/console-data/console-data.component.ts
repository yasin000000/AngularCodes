import { Component } from '@angular/core';

@Component({
  selector: 'app-console-data',
  templateUrl: './console-data.component.html',
  styleUrls: ['./console-data.component.css']
})
export class ConsoleDataComponent {
 
  email=''
  password=''
  Submit(){
    console.log(`The user email is ${this.email}`);
    console.log(`The user password is ${this.password}`); }

}
