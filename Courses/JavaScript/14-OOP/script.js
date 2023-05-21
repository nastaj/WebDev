'use strict';

/////////////////////////////////
// Lecture: Constructor Functions
/////////////////////////////////

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jakub = new Person('Jakub', 2002);
console.log(jakub);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jakub instanceof Person);

const Book = function (title, year, genre, author) {
  this.title = title;
  this.year = year;
  this.genre = genre;
  this.author = author;
};

const lotr = new Book(
  'Fellowship of the Ring',
  1954,
  'Fantasy',
  'J. R. R. Tolkien'
);

console.log(lotr);
