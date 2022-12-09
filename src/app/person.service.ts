import { Injectable } from '@angular/core';
import { Person } from './person';
import { PERSONS } from './mock-persons';
import { Observable, of, Subject, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  index: number = 4;
  persons: Person[] = [];
  personsObservable = new Observable<Person[]>();
  personsSubject = new Subject<Person[]>();

  constructor() {
    this.persons = PERSONS;
    this.personsSubject.next(this.persons);
  }

  getPersons(): Observable<Person[]> {
    return this.personsSubject;
  }

  addPerson(): Observable<Person> {
    let newPerson = new Person(this.index++); 
    this.persons.push(newPerson);
    this.updatePersons();
    return of(newPerson);
  }

  deletePerson(person: Person): void {
    this.persons = this.persons.filter(p => p !== person);
    this.persons.forEach(p => console.log(p.name));
    this.updatePersons();
  }

  updatePersons(): void {
    this.personsSubject.next(this.persons);
  }

}