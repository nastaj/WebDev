// *****************************
// LECTURE: Values and variables | let, const and var
// *****************************

const country = "Poland";
const continent = "Europe";
let population = 38000000;

console.log(country);
console.log(continent);
console.log(population);
console.log("########################");

// *****************************
// LECTURE: Data Types | let, const and var
// *****************************

const isIsland = false;
const language = "polish";
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
console.log("########################");

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
console.log("########################");

// *****************************
// LECTURE: Strings and Template Literals
// *****************************

description = `${country} is in ${continent}, and its 38 milion people speak ${language}.`;
console.log(description);
console.log("########################");

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
console.log("########################");

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
console.log("########################");

// *****************************
// LECTURE: Equality Operators: == vs. ===
// *****************************

// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// *****************************
// LECTURE: Logical Operators
// *****************************

const isEnglish = language === "english";
const lessThanFifty = population < 50000000;
const isNotIsland = !isIsland;

if (isEnglish && lessThanFifty && isNotIsland) {
  console.log("You should live in Poland :)");
} else {
  console.log("Poland does not meet your criteria :(");
}
console.log("########################");

// *****************************
// LECTURE: The switch statement
// *****************************

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  case "":
    console.log("Enter the language!");
    break;
  default:
    console.log("Great language too :D");
}
