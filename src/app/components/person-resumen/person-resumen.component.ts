import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Person} from '../../models/Person.models';
import {PersonServiceService} from '../../services/person-service.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-person-resumen',
  standalone: true,
  imports: [],
  templateUrl: './person-resumen.component.html',
  styleUrl: './person-resumen.component.css'
})
export class PersonResumenComponent {
  @Input() personaInput: Person = new Person(0, "Manolo", "Enrrique", "444444444T");

  @Output()
  personEdit = new EventEmitter<Person>();

  constructor(private routerService: Router, private service: PersonServiceService) {
  }

  deletePerson(id: number) {
    this.service.deletePerson(id);
  }

  editPerson(personId: number) {
    this.personEdit.emit(this.personaInput);
    this.routerService.navigate([`formEdit/${personId}`])
  }
}
