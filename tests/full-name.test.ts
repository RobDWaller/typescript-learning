import Person from '../src/person';
import FullName from '../src/full-name';

import 'mocha';
import { expect } from 'chai';

describe('Full Name Class', () => {

  it('Should receive a Person and return their Full Name.' , () => {
      let person = new Person('Gary', 'Smith');

      let fullName = new FullName(person);

      expect(fullName.toString()).to.equal('Gary Smith');
  });

});
