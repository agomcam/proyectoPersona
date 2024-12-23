import {Injectable} from '@angular/core';
import {Person} from '../models/Person.models';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {
  private personsList: Person[] = [
    new Person(1, 'Juan', 'Pérez', '12345678A'),
    new Person(2, 'María', 'García', '23456789B'),
    new Person(3, 'Carlos', 'Fernández', '34567890C'),
    new Person(4, 'Ana', 'López', '45678901D'),
    new Person(5, 'Luis', 'Martínez', '56789012E'),
    new Person(6, 'Carmen', 'Gómez', '67890123F'),
    new Person(7, 'José', 'Sánchez', '78901234G'),
    new Person(8, 'Laura', 'Díaz', '89012345H'),
    new Person(9, 'Miguel', 'Hernández', '90123456I'),
    new Person(10, 'Elena', 'Ruiz', '01234567J'),
  ];

  constructor() {
  }

  getPersonList() {
    return this.personsList;
  }

  deletePerson(id: number) {
    let index = this.personsList.findIndex((person) => person.id === id);
    this.personsList.splice(index, 1);
  }

  addPerson(person: Person) {
    const index = this.personsList.findIndex(personlist => person.id === personlist.id);


    console.log(index)
    if (index <= -1) {
      person.id = Math.trunc(Math.random() * 1000) + 1;
      this.personsList.push(person);
      console.log(person);
    } else {
      this.personsList[index] = person;
    }
  }

  getPersonById(id: number): Person | null {
    for (let i = 0; i < this.personsList.length; i++) {
      if (id == this.personsList[i].id) {
        return this.personsList[i]
      }
    }
    return null;
  }
}
