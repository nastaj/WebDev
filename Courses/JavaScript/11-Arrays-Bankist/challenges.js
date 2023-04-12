// Challenge #1
/*
const dogsJulia = [9, 16, 6, 8, 3];
const dogsKate = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  // 1.
  const dogsJuliaClean = dogsJulia.slice(1, -2);

  // 2.
  const dogsData = dogsJuliaClean.concat(dogsKate);

  dogsData.forEach((age, i) => {
    age >= 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${age} years old.`)
      : console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  });
};

checkDogs(dogsJulia, dogsKate);
*/
// Challenge #2
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];
const ages = data1.concat(data2);
/*
// const calcAverageHumanAge = function (ages) {
//   // 1.
//   const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
//   console.log(humanAges);

//   // 2.
//   const adultDogs = humanAges.filter(age => age >= 18);
//   console.log(adultDogs);

//   // 3.
//   const averageAge = adultDogs.reduce(function (acc, value, i, arr) {
//     return Math.round(acc + value / arr.length);
//   }, 0);
//   console.log(averageAge);
// };

// calcAverageHumanAge(data1);
// calcAverageHumanAge(data2);

// Challenge #3
const calcAverageHumanAge = function (data) {
  console.log(
    data
      .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
      .filter(age => age >= 18)
      .reduce((acc, age, i, arr) => Math.round(acc + age / arr.length), 0)
  );
};
calcAverageHumanAge(data1);
calcAverageHumanAge(data2);
*/
// Challenge #4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
const calcRecommended = function (dogs) {
  dogs.forEach(dog => {
    dog.recommendedFood = Math.round(dog.weight ** 0.75 * 28);
  });
};
calcRecommended(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);

const sarahHowMuch = function () {
  console.log(
    `${dogSarah.owners[0]}'s dog eats too ${
      dogSarah.curFood > dogSarah.recommendedFood ? 'much!' : 'little!'
    }`
  );
};
sarahHowMuch();

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4.
console.log(ownersEatTooMuch.join(` and `) + `'s dogs eat too much!`);
console.log(ownersEatTooLittle.join(` and `) + `'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.
console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);

// 7.
const dogsEatingOkay = dogs.filter(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);
console.log(dogsEatingOkay);

// 8.
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
