'use strict';
// ES6 Classes
// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

// PersonCl.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

const obj = new PersonCl('Talha ch', 2001);
obj.calcAge();
console.log(obj.age);
console.log(obj);

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode
