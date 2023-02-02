"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;
// const if = 23;
*/

function logger() {
  console.log("My name is Jakub");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

function aboutMe(firstName, secondName, age, gender, country) {
  return `I am ${firstName} ${secondName}, a ${age} years old ${gender} student from ${country}!`;
}

const jakub = aboutMe("Jakub", "Nasta", 21, "male", "Poland");
console.log(jakub);
