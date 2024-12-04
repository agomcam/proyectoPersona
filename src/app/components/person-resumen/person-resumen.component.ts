import {Component, Input} from '@angular/core';
import {Person} from '../../models/Person.models';
import {PersonServiceService} from '../../services/person-service.service';

@Component({
  selector: 'app-person-resumen',
  standalone: true,
  imports: [],
  templateUrl: './person-resumen.component.html',
  styleUrl: './person-resumen.component.css'
})
export class PersonResumenComponent {
  @Input() personaInput: Person = new Person(0,"Manolo","Enrrique","444444444T");

  constructor(private service: PersonServiceService) {
  }

  deletePerson(id: number) {
    this.service.deletePerson(id);
  }
}
