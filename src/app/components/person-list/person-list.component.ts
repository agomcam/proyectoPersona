import {Component, OnInit} from '@angular/core';
import {Person} from '../../models/Person.models';
import {PersonServiceService} from '../../services/person-service.service';
import {PersonResumenComponent} from '../person-resumen/person-resumen.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [
    PersonResumenComponent, CommonModule
  ],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export class PersonListComponent implements OnInit {

  persons: Person[] = [];
  constructor(private personService: PersonServiceService) {
  }

  ngOnInit(): void {
        this.persons = this.personService.getPersonList();
    }
}
