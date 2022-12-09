export class Person {
    id: number;
    name?: string;
    surname?: string;
    email?: string;

    constructor(id: number) {
        this.id = id;
    }
}