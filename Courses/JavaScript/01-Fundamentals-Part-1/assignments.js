// *****************************
// LECTURE: Values and variables | let, const and var
// *****************************

const country = "Poland";
const continent = "Europe";
let population = 38000000;

console.log(country);
console.log(continent);
console.log(population);

// *****************************
// LECTURE: Data Types | let, const and var
// *****************************

const isIsland = false;
const language = "polish";
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// *****************************
// LECTURE: Basic Operators
// *****************************

let halfPopulation = population / 2;
console.log(halfPopulation);

population++;
console.log(population);

console.log(population > 6000000);
console.log(population < 33000000);

let description =
  "Poland is in " +
  continent +
  " and its 38 milion people speak " +
  language +
  ".";
// console.log(description);

// *****************************
// LECTURE: Strings and Template Literals
// *****************************

description = `${country} is in ${continent}, and its 38 milion people speak ${language}.`;
console.log(description);

// *****************************
// LECTURE: Taking Decisions: if / else Statements
// *****************************

let populationBelowAverage;
if (population > 33000000) {
  console.log(`${country}'s population is above average.`);
} else {
  populationBelowAverage = 33000000 - population;
  console.log(
    `${country}'s population is ${populationBelowAverage} below average.`
  );
}

// *****************************
// LECTURE: Type Conversion and Coercion
// *****************************
console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);
console.log(6 - "4" + "2" + 2 - 3);
console.log(7 + "4" + 6 + "2" + 3 - 1 - "7");
