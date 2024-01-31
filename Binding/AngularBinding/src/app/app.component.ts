import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularBinding';

  isButtonDisabled = false;

  imageUrl = './assets/im.jpg';

  isError = true;

  colSpanValue = 4;


  text = 'default value';


}

