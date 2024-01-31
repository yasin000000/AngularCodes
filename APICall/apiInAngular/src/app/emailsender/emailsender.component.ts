import { Component } from '@angular/core';
import { EmailserviceService } from '../emailservice.service';

@Component({
  selector: 'app-emailsender',
  templateUrl: './emailsender.component.html',
  styleUrls: ['./emailsender.component.css']
})
export class EmailsenderComponent {
  to: string = '';
  subject: string = '';
  body: string = '';

  constructor(private emailService: EmailserviceService) { }

  sendEmail() {
    const emailRequest = {
      to: this.to,
      subject: this.subject,
      body: this.body
    };

    this.emailService.sendEmail(emailRequest).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error(error);
      }
    );
  }
}
