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
