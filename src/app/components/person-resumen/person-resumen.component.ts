import {Component, Input} from '@angular/core';
import {Person} from '../../models/Person.models';

@Component({
  selector: 'app-person-resumen',
  standalone: true,
  imports: [],
  templateUrl: './person-resumen.component.html',
  styleUrl: './person-resumen.component.css'
})
export class PersonResumenComponent {
  @Input() personaInput: Person | null = null;
}
