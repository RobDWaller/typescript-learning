import Person from "./person";
import FullName from "./full-name";

let user = new Person('Jane', 'User');

let name = new FullName(user);

console.log(name.toString());
