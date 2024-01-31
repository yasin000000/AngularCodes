import { Component ,OnInit } from '@angular/core';
import { UpdateapiserviceService } from '../updateapiservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-updateapi',
  templateUrl: './updateapi.component.html',
  styleUrls: ['./updateapi.component.css']
})
export class UpdateapiComponent implements OnInit {
  personForm: FormGroup;
  personsList: any[] = [];
  isEditMode = false;
  editedPersonId: number | null = null;

  constructor(private fb: FormBuilder, private personService: UpdateapiserviceService) {
    this.personForm = this.fb.group({
      id: [null, Validators.required],
      name: ['', Validators.required],
      age: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.fetchPersons();
  }

  fetchPersons() {
    this.personService.getPersons().subscribe(
      (persons: any[]) => {
        this.personsList = persons;
      },
      error => {
        console.error('Error fetching persons:', error);
      }
    );
  }

  onSubmit() {
    const personData = this.personForm.value;

    if (this.isEditMode) {
      // Update existing person
      if (this.editedPersonId !== null) {
        this.personService.updatePerson(this.editedPersonId, personData).subscribe(
          response => {
            console.log('Person updated successfully:', response);
            this.clearForm();
            this.isEditMode = false;
            this.editedPersonId = null;
            this.fetchPersons();
          },
          error => {
            console.error('Error updating person:', error);
          }
        );
      }
    } else {
    
      this.personService.addPerson(personData).subscribe(
        response => {
          console.log('Person added successfully:', response);
          this.clearForm();
          this.fetchPersons();
        },
        error => {
          console.error('Error adding person:', error);
        }
      );
    }
  }

  onDelete(id: number) {
    this.personService.deletePerson(id).subscribe(
      response => {
        console.log('Person deleted successfully:', response);
        this.fetchPersons();
      },
      error => {
        console.error('Error deleting person:', error);
      }
    );
  }

  onEdit(id: number) {
    
    const personToEdit = this.personsList.find(person => person.id === id);

    if (personToEdit) {
      this.personForm.patchValue(personToEdit);
      this.isEditMode = true;
      this.editedPersonId = id;
    }
  }

  clearForm() {
    this.personForm.reset();
  }

}
