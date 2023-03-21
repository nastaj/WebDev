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
