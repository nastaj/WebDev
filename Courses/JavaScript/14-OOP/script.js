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
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey, ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

PersonCl.prototype.species = 'Homo Sapiens';

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
console.dir(PersonCl);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

jessica.greet();
console.log(jessica.species);

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);

/////////////////////////////////
// Lecture: Setters and getters
/////////////////////////////////

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
