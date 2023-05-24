'use strict';

/////////////////////////////////
// Lecture: Constructor Functions
/////////////////////////////////

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const jakub = new Person('Jakub', 2002);
// console.log(jakub);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// console.log(jakub instanceof Person);

// const Book = function (title, year, genre, author) {
//   this.title = title;
//   this.year = year;
//   this.genre = genre;
//   this.author = author;
// };

// const lotr = new Book(
//   'Fellowship of the Ring',
//   1954,
//   'Fantasy',
//   'J. R. R. Tolkien'
// );

// console.log(lotr);

// /////////////////////////////////
// // Lecture: Prototypes
// /////////////////////////////////

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jakub.calcAge();
// matilda.calcAge();

// console.log(jakub.__proto__);
// console.log(jakub.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jakub));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';
// console.log(jakub.species, matilda.species);

// console.log(jakub.hasOwnProperty('firstName'));
// console.log(jakub.hasOwnProperty('species'));

// Book.prototype.calcLength = function () {
//   return this.title.length;
// };

// console.log(lotr.calcLength());
// console.log(lotr.__proto__);

// console.log(jakub.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(jakub.__proto__.__proto__);
// console.log(jakub.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 4, 5, 6, 6, 6, 10, 10, 9, 3]; // new Array === [];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.log(h1.__proto__);

/////////////////////////////////
// Lecture: ES6 Classes
/////////////////////////////////

// class expression
// const PersonCl = class {};

// class decleration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey, ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log(`Hey there 👋`);
//   }
// }

// PersonCl.prototype.species = 'Homo Sapiens';

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// console.dir(PersonCl);
// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype);

// jessica.greet();
// console.log(jessica.species);

// // 1. Classes are NOT hoisted
// // 2. Classes are first-class citizens
// // 3. Classes are executed in strict mode

// const walter = new PersonCl('Walter White', 1965);

// /////////////////////////////////
// // Lecture: Setters and getters
// /////////////////////////////////

// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// /////////////////////////////////
// // Lecture: Static methods
// /////////////////////////////////
// PersonCl.hey();

// /////////////////////////////////
// // Lecture: Object.create
// /////////////////////////////////

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1995);
// console.log(sarah);

/////////////////////////////////
// Lecture: Inheritance between "Classes": Constructor Functions
/////////////////////////////////

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge();

// Student.prototype.constructor = Student;

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

/////////////////////////////////
// Lecture: Inheritance between "Classes": ES6 Classes
/////////////////////////////////

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey, ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log(`Hey there 👋`);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

// console.log(martha);

/////////////////////////////////
// Lecture: Inheritance between "Classes": Object.create
/////////////////////////////////

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

// console.log(jay);

/////////////////////////////////
// Lecture: Another Class Example
/////////////////////////////////

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods
  // Public interface (API)
  getMovements() {
    return this.#movements;
  }

  deposit(value) {
    this.#movements.push(value);
    return this;
  }

  withdraw(value) {
    this.deposit(-value);
    return this;
  }

  currentBalance() {
    const accBalance = this.#movements.reduce((acc, mov) => acc + mov, 0);
    console.log(`Current account balance: ${accBalance}`);
  }

  requestLoan(value) {
    if (this.#approveLoan(value)) {
      this.deposit(value);
      console.log('Loan approved');
      return this;
    }
  }

  // 4) Private methods
  #approveLoan(value) {
    const accBalance = this.#movements.reduce((acc, mov) => acc + mov, 0);

    if (accBalance < value) console.log('You cannot take the loan!');
    else return true;
  }
}

const acc1 = new Account('Jakub', 'PLN', 1111);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit(250);
acc1.withdraw(140);
acc1.currentBalance();
acc1.requestLoan(100);
console.log(acc1.getMovements());

console.log(acc1);

// console.log(acc1.#approveLoan(100));
// console.log(acc1.#movements);

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(100).withdraw(200);
console.log(acc1.getMovements());
