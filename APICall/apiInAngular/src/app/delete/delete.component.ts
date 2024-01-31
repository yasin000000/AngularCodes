import { Component ,OnInit } from '@angular/core';
import { DeleteapiserviceService } from '../deleteapiservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
    personForm: FormGroup;
    personsList: any[] = []; // Replace with your actual data
    isEditMode = false;
    editedPersonId: number | null = null;
  
    constructor(private fb: FormBuilder, private personService: DeleteapiserviceService) {
      this.personForm = this.fb.group({
        id: [null, Validators.required],
        name: ['', Validators.required],
        age: [null, Validators.required],
      });
    }
  
    ngOnInit() {
      // Fetch and populate the list of persons (replace with your actual API call)
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
      if (this.personForm.valid) {
        const personData = this.personForm.value;
        this.personService.addPerson(personData).subscribe(
          response => {
            console.log('Person added successfully:', response);
  
            // Optionally, update the list after successful addition
            this.personsList.push(response);
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
  
          // Optionally, update the list after successful deletion
          this.personsList = this.personsList.filter(person => person.id !== id);
        },
        error => {
          console.error('Error deleting person:', error);
        }
      );
    }

    onEdit(id: number) {
      // Set form values for editing
      const personToEdit = this.personsList.find(person => person.id === id);
  
      if (personToEdit) {
        this.personForm.patchValue(personToEdit);
        this.isEditMode = true;
        this.editedPersonId = id;
      }
    }
  }