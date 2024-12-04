import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Person} from '../../models/Person.models';
import {PersonServiceService} from '../../services/person-service.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule, CommonModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnChanges {
  formPerson: FormGroup;
  @Input()
  personEdit: Person | null = null;

  constructor(private personService: PersonServiceService, formBuilder: FormBuilder) {
    this.formPerson = formBuilder.group({
      'nombre': ['', [Validators.required]],
      'apellido': ['', [Validators.required]],
      'dni': ['', [Validators.required]],
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['personEdit']) {
      const person = changes['personEdit'].currentValue as Person;
      this.formPerson.patchValue({
        nombre: person.name,
        apellido: person.surname,
        dni: person.dni,
      })
    }
  }

  onSubmit() {
    if (this.formPerson.valid) {
      let personForm = this.formPerson.value;

      let person: Person = new Person(
        Math.random() * 1000,
        personForm.nombre,
        personForm.apellido,
        personForm.dni
      )

      this.personService.addPerson(person)


    }


  }

}
