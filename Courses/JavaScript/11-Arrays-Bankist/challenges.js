// Challenge #1
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

// Challenge #2
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];
const ages = data1.concat(data2);

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
