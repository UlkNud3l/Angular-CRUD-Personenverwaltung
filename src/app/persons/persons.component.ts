import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})

export class PersonsComponent {
  persons: Person[] = [];
  selectedPerson?: Person;

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getPersons().subscribe(persons => this.personsUpdate(persons));
    this.personService.updatePersons();
  }

  onSelect(person: Person): void {
    this.selectedPerson = person;
  }

  onAdd(): void {
    this.personService.addPerson().subscribe(person => this.selectedPerson = person);
  }

  personsUpdate(persons: Person[]) {
    this.persons = persons;
    if (persons.filter(person => person.id === this.selectedPerson?.id).length === 0) this.selectedPerson = undefined;
  }
  
}
