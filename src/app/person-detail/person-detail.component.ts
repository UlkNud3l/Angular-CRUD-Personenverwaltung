import { Component, Input } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent {
  @Input() person?: Person;

  constructor(private personService: PersonService) {}

  onDelete(): void {
    if (this.person) this.personService.deletePerson(this.person);
  }
}
