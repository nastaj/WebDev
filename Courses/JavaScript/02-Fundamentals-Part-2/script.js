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

const tellFortune = function (numberOfChildren, partnerName, location, job) {
  return `You will be a ${job} in ${location}, and married to ${partnerName} with ${numberOfChildren} kids.`;
};
console.log(tellFortune(2, "Julia", "Ireland", "programmer"));
const calculateDogAge = function (dogAge, humanAge) {
  const dogToHuman = dogAge * 7;
  const humanToDog = humanAge / 7;
  return `Your doggie is ${dogToHuman} years old in dog years!
  You are ${humanToDog} years old in dog years!`;
};
console.log(calculateDogAge(9, 21));

const calculateSupply = function (age, amountPerDay) {
  const maxAge = 100;
  const amountConsumed = amountPerDay * 365 * (maxAge - age);
  return `You will need ${amountConsumed} snacks to last you until the ripe old age of ${maxAge}.`;
};
console.log(calculateSupply(80, 2));

const celsiusToFahrenheit = function (celsiusTemp) {
  const celsiusConverted = (celsiusTemp / 5) * 9 + 32;
  return `${celsiusTemp}°C is now ${celsiusConverted}°F.`;
};

const fahrenheitToCelsius = function (fahrenheitTemp) {
  const fahrenheitConverted = ((fahrenheitTemp - 32) * 5) / 9;
  return `${fahrenheitTemp}°F is now ${fahrenheitConverted}°C.`;
};

console.log(celsiusToFahrenheit(35));
console.log(fahrenheitToCelsius(14));

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"];

const firstName = "Jakub";
const jakub = [firstName, "Nasta", 2021 - 2002, "student", friends];
console.log(jakub);

// Exercise
function calcAge(birthYear) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop();
const popped = friends.pop(); // Last
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

const jakub = {
  firstName: "Jonas",
  lastName: "Nasta",
  age: 2023 - 2002,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
};

const jakub = {
  firstName: "Jakub",
  lastName: "Nasta",
  age: 2023 - 2002,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jakub.lastName);
console.log(jakub["lastName"]);

const nameKey = "Name";
console.log(jakub["first" + nameKey]);
console.log(jakub["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jakub? Choose between firstName, lastName, age, job and friends"
  );
  
  if (jakub[interestedIn]) {
    console.log(jakub[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends"
    );
  }
  
  jakub.location = "Poland";
  jakub["twitter"] = "@aseirel";
  console.log(jakub);
  
  // Challenge
  // "Jakub has 3 friends, and his best friend is called Michael"
  
  console.log(
    `${jakub.firstName} has ${jakub.friends.length} friends, and his best friend is called ${jakub.friends[0]}.`
    );


const jakub = {
  firstName: "Jakub",
  lastName: "Nasta",
  birthYear: 2002,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2023 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2023 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  addSummary: function () {
    let driversLicense;
    if (this.hasDriversLicense) {
      driversLicense = "has a driver's license.";
    } else {
      driversLicense = "has no driver's license.";
    }

    this.summary = `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and ${driversLicense}`;
    return this.summary;
  },
};

console.log(jakub.calcAge());

console.log(jakub.age);
console.log(jakub.age);
console.log(jakub.age);

// Challenge
// "Jakub is a 21-year old student, and he has a/no driver's license."

// The function needs to FIRST be CALLED!
console.log(jakub.addSummary());
console.log(jakub.summary);

// console.log("Lifting weights repetition 1 🏋️‍♂️");
// console.log("Lifting weights repetition 2 🏋️‍♂️");
// console.log("Lifting weights repetition 3 🏋️‍♂️");
// console.log("Lifting weights repetition 4 🏋️‍♂️");
// console.log("Lifting weights repetition 5 🏋️‍♂️");
// console.log("Lifting weights repetition 6 🏋️‍♂️");
// console.log("Lifting weights repetition 7 🏋️‍♂️");
// console.log("Lifting weights repetition 8 🏋️‍♂️");
// console.log("Lifting weights repetition 9 🏋️‍♂️");
// console.log("Lifting weights repetition 10 🏋️‍♂️");

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

const jakubArray = [
  "Jakub",
  "Nasta",
  2023 - 2002,
  "student",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];

// console.log(jakubArray[0]);
// console.log(jakubArray[1]);
// ...
// console.log(jakubArray[4]);
// jakubArray[5] does NOT exist

for (let i = 0; i < jakubArray.length; i++) {
  // Reading from jakubArray array
  console.log(jakubArray[i], typeof jakubArray[i]);
  
  // Filling types array
  // types[i] = typeof jakubArray[i];
  types.push(typeof jakubArray[i]);
}

// types[0] = "string";
// types[1] = "string";
// types[2] = ["number"];

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}
console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jakubArray.length; i++) {
  if (typeof jakubArray[i] !== "string") continue;
  
  console.log(jakubArray[i], typeof jakubArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jakubArray.length; i++) {
  if (typeof jakubArray[i] === "number") break;
  
  console.log(jakubArray[i], typeof jakubArray[i]);
}

const jakub = [
  "Jakub",
  "Nasta",
  2023 - 2002,
  "student",
  ["Michael", "Peter", "Steven"],
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jakub.length - 1; i >= 0; i--) {
  console.log(i, jakub[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`------Starting exercise ${exercise}`);
  
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️`);
  }
}

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♂️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
*/
