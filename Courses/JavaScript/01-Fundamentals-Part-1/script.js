/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jakub");
console.log(23);

let firstName = "Jakub";
let surname = "Nasta";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name convention
let jakub_nasta = "JN";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
console.log(firstName + " " + surname);


true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jakub");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 2002;
// birthYear = 1999;

// const job;
var job = "programmer";
job = "teacher";

// Never create variables without assigning the const or let keyword!
lastName = 'Nasta';
console.log(lastName);

// Math operators
const now = 2023;
const ageJakub = now - 2002;
const ageMom = now - 1970;
console.log(ageJakub, ageMom);

console.log(ageJakub * 2, ageJakub / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jakub";
const lastName = "Nasta";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison operators
console.log(ageJakub > ageMom); // >, <, >=, <==
console.log(ageMom >= 53);

const isFullAge = ageMom >= 18;
console.log(isFullAge);

console.log(now - 2002 > now - 1970);

const now = 2023;
const ageJakub = now - 2002;
const ageMom = now - 1970;

console.log(now - 2002 > now - 1970);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJakub + ageMom) / 2;
console.log(ageJakub, ageMom, averageAge);

const firstName = "Jakub";
const job = "student";
const birthYear = 2002;
const year = 2023;

const jakub =
"I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jakub);

const jakubNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jakubNew);

console.log(`Just a regular string...`);
console.log(`String with \n\
multiple \n\
lines`);

console.log(`String
multiple
lines`);

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 😁");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2002;

let century;
if (birthYear >= 2000) {
  century = 21;
} else {
  century = 20;
}
console.log(century);

// Type conversion
const inputYear = "1991";
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number("Jakub"));
console.log(typeof NaN);

console.log(String(23));

//Type coercion
console.log("I am " + 23 + " years old.");
console.log("I am 23 years old.");
console.log("23" - "10" - 3);
console.log("23" * "2");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);
*/

//Five falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("YAY! Height is defined!");
} else if (height == 0) {
  console.log("Height is equal to 0");
} else {
  console.log("Height is UNDEFINED");
}
