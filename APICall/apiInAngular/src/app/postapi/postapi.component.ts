import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostapiserviceService } from '../postapiservice.service';

@Component({
  selector: 'app-postapi',
  templateUrl: './postapi.component.html',
  styleUrls: ['./postapi.component.css']
})
export class PostapiComponent {
  personForm: FormGroup;

  constructor(private fb: FormBuilder, private personService: PostapiserviceService) {
    this.personForm = this.fb.group({
      id: [null, Validators.required],
      name: ['', Validators.required],
      age: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.personForm.valid) {
      const personData = this.personForm.value;
      this.personService.addPerson(personData).subscribe(
        response => {
          console.log('Person added successfully:', response);
        },
        error => {
          console.error('Error adding person:', error);
        }
      );
    }
  }
}
