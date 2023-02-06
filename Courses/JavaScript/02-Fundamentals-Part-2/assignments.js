"use strict";

// *****************************
// LECTURE: Functions
// *****************************

function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population} milion people and its capital city is ${capitalCity}.`;
  return description;
}

const descriptionFinland = describeCountry("Finland", 6, "Helsinki");
const descriptionPoland = describeCountry("Poland", 38, "Warsaw");
const descriptionIreland = describeCountry("Ireland", 5, "Dublin");

console.log(descriptionFinland);
console.log(descriptionPoland);
console.log(descriptionIreland);

// *****************************
// LECTURE: Function Declarations vs. Expressions
// *****************************

// Function declaration
console.log("/// Function declaration ///");
function percentageOfWorld1(population) {
  return `${Math.round(Number((population / 7900) * 100) * 10) / 10}%`;
}
const percentageChina = percentageOfWorld1(1441);
const percentagePoland = percentageOfWorld1(38);
const percentageIreland = percentageOfWorld1(5);

console.log(percentageChina);
console.log(percentagePoland);
console.log(percentageIreland);

// Function expression
console.log("/// Function expression ///");
const percentageOfWorld2 = function (population) {
  return `${(population / 7900) * 100}%`;
};

let percentageChina2 = percentageOfWorld2(1441);
const percentagePoland2 = percentageOfWorld2(38);
const percentageIreland2 = percentageOfWorld2(5);

console.log(percentageChina2);
console.log(percentagePoland2);
console.log(percentageIreland2);

// Arrow function
console.log("/// Arrow function ///");
const percentageOfWorld3 = (population) => `${(population / 7900) * 100}%`;
console.log(percentageOfWorld3(1441));

// *****************************
// LECTURE: Function Declarations vs. Expressions
// *****************************
console.log("////////////////////");

const describePopulation = function (country, population) {
  let countryPopulationPercentage = percentageOfWorld1(population);
  return `${country} has ${population} milion people, which is about ${countryPopulationPercentage} of the world.`;
};

console.log(describePopulation("China", 1441));
console.log(describePopulation("Poland", 38));
console.log(describePopulation("Ireland", 5));

// *****************************
// LECTURE: Introduction to Arrays
// *****************************
console.log("////////////////////");

let populations = [1441, 38, 5, 6];

console.log(populations.length === 4);

function percentageOfWorld1(population) {
  return `${Math.round(Number((population / 7900) * 100) * 10) / 10}%`;
}
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

// *****************************
// LECTURE: Basic Array Operations (Methods)
// *****************************
console.log("////////////////////");

const neighbours = [
  "Germany",
  "Russia",
  "Lithuania",
  "Belarus",
  "Ukraine",
  "Slovakia",
  "Czech Republic",
];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop(neighbours);
console.log(neighbours);

if (neighbours.includes("Germany") === false) {
  console.log("Probably not a central European country :D");
}

console.log(neighbours.indexOf("Russia"));
neighbours[1] = "Russian Federation";
console.log(neighbours);

// *****************************
// LECTURE: Basic Array Operations (Methods)
// *****************************
console.log("////////////////////");

const myCountry = {
  country: "Poland",
  capital: "Warsaw",
  language: "polish",
  population: 38,
  neighbours: [
    "Germany",
    "Russia",
    "Lithuania",
    "Belarus",
    "Ukraine",
    "Slovakia",
    "Czech Republic",
  ],
  describe: function () {
    this.description = `${this.country} has ${this.population} milion ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
    return this.description;
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

// *****************************
// LECTURE: Dot vs. Bracket Notation
// *****************************
console.log("////////////////////");

console.log(
  `${myCountry.country} has ${myCountry.population} milion ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry.population);

// *****************************
// LECTURE: Object Methods
// *****************************
console.log("////////////////////");

console.log(myCountry.describe());

myCountry.checkIsland();
console.log(myCountry.isIsland);

// *****************************
// LECTURE: Iteration: The for Loop
// *****************************
console.log("////////////////////");

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting.`);
}

// for (let i = 0; i <= 15; i++) {
//   console.log(`Value of i is: ${i}`);
// }

// for (let i = 12; i <= 24; i++) {
//   console.log(`Value of i is: ${i}`);
// }

// *****************************
// LECTURE: Looping Arrays, Breaking and Continuing
// *****************************
console.log("////////////////////");

populations = [1441, 38, 5, 6];
let percentages2 = [];

function percentageOfWorld1(population) {
  return `${Math.round(Number((population / 7900) * 100) * 10) / 10}%`;
}

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages);
console.log(percentages2);

// *****************************
// LECTURE: Looping Backwards and Loops in Loops
// *****************************
console.log("////////////////////");

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
  }
}

// *****************************
// LECTURE: The while Loop
// *****************************
console.log("////////////////////");

populations = [1441, 38, 5, 6];
let percentages3 = [];

function percentageOfWorld1(population) {
  return `${Math.round(Number((population / 7900) * 100) * 10) / 10}%`;
}

let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}

console.log(percentages3);
