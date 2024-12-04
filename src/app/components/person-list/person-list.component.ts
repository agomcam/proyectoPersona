import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Person} from '../../models/Person.models';
import {PersonServiceService} from '../../services/person-service.service';
import {PersonResumenComponent} from '../person-resumen/person-resumen.component';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [
    PersonResumenComponent, CommonModule
  ],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export class PersonListComponent implements OnInit, OnChanges {
  persons: Person[] = [];

  constructor(private personService: PersonServiceService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['persons'].currentValue) {
      this.persons = this.personService.getPersonList();
    }
  }

  ngOnInit(): void {
    this.persons = this.personService.getPersonList();
  }


}
