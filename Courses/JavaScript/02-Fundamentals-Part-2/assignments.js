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
