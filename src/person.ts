import FullNameInterface from './full-name.interface';

export default class Person implements FullNameInterface {

    firstName: string;

    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;

        this.lastName = lastName;
    }

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}
