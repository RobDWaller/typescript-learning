import Person from '../src/person';

import 'mocha';
import { expect } from 'chai';

describe('Person Class', () => {

  it('Should be able to get first name.' , () => {
      let person = new Person('John', 'Doe');

      expect(person.getFirstName()).to.equal('John');
  });

  it('Should be able to get last name.' , () => {
      let person = new Person('John', 'Doe');

      expect(person.getLastName()).to.equal('Doe');
  });

  it('Should be able to get full name.' , () => {
      let person = new Person('John', 'Doe');

      expect(person.getFullName()).to.equal('John Doe');
  });

});
