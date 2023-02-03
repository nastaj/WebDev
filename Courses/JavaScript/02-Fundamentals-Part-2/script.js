"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;
// const if = 23;

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

// Function declaration
function calcAge1(birthYear) {
  return 2023 - birthYear;
}
const age1 = calcAge1(2002);

// Function expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcAge2(2002);

console.log(age1, age2);

// Arrow function
const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(2002);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(2002, "Jakub"));
console.log(yearsUntilRetirement(1970, "Bob"));

// Exercise

const calculator = function (a, b, operator) {
  let calc;
  let result;
  switch (operator) {
    case "+":
      result = a + b;
      calc = `${a} + ${b} = ${result}`;
      break;
    case "-":
      result = a - b;
      calc = `${a} - ${b} = ${result}`;
      break;
    case "*":
      result = a * b;
      calc = `${a} * ${b} = ${result}`;
      break;
    case "/":
      result = a / b;
      calc = `${a} / ${b} = ${result}`;
      break;
    default:
      calc = `Wrong operation.`;
  }
  return calc;
};

const addition = calculator(2, 2, "+");
const substraction = calculator(6, 3, "-");
const multiplication = calculator(2, 12, "*");
const division = calculator(100, 50, "/");

console.log(addition);
console.log(substraction);
console.log(multiplication);
console.log(division);

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// Exercise

let bonusAllowance;
function addBonusAllowance(allowance) {
  if (allowance < 50) {
    bonusAllowance = 20;
  } else if (allowance === 50) {
    bonusAllowance = 10;
  } else {
    bonusAllowance = 0;
  }
  allowance += bonusAllowance;
  return allowance;
}

function addAllowance(allowance) {
  const totalAllowance = addBonusAllowance(allowance);
  return `Your base allowance is ${allowance}$ with ${bonusAllowance}$ bonus, accounting to ${totalAllowance}$ total!`;
}

console.log(addAllowance(10));
*/

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired!`);
    return -1;
  }
};

console.log(yearsUntilRetirement(2002, "Jakub"));
console.log(yearsUntilRetirement(1950, "Mike"));
