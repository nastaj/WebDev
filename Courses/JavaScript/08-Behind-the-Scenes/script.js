'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jakub';
calcAge(1990);
// console.log(age);
// printAge();


// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jakub';
let job = 'student';
const year = 2002;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAge(2002);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAgeArrow(2002);

const jakub = {
  year: 2002,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jakub.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jakub.calcAge;
matilda.calcAge();

const f = jakub.calcAge;
// f();

const log = function () {
  console.log(`Output: ${this}`);
};
log();

const logArr = year => {
  console.log(`Output: ${year}, ${this}`);
};
logArr(2023);

const school = {
  subject: 'maths',
  year: 2023,
  callSummary: function () {
    console.log(`${this.subject} in ${this.year}`);
  },
};

const grade = {
  level: 'A',
};

school.callSummary();

grade.callSummary = school.callSummary;
grade.callSummary();
*/

// var firstName = 'Matilda';

const jakub = {
  firstName: 'Jakub',
  year: 2002,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };
    // isMillenial();

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jakub.greet();
jakub.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
// addArrow(2, 5, 8);
