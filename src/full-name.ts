import FullNameInterface from './full-name.interface';

export default class FullName {

    person: FullNameInterface;

    constructor(person: FullNameInterface) {
        this.person = person;
    }

    toString(): string {
        return this.person.getFullName();
    }
}
