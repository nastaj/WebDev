// *************
// Challenge #1
// *************
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Test Data 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolhpins, avgKoalas) {
  const winDolphins = avgDolhpins >= 2 * avgKoalas;
  const winKoalas = avgKoalas >= 2 * avgDolhpins;

  if (winDolphins) {
    console.log(`Dolphins win (${avgDolhpins} vs. ${avgKoalas})`);
  } else if (winKoalas) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolhpins})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(avgDolphins, avgKoalas);

// Test Data 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);

// Challenge #2

const calcTip = function (bill) {
  let tip;
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
    return tip;
  } else {
    tip = bill * 0.2;
    return tip;
  }
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

// Challenge #3
const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = Math.round((this.mass / this.height ** 2) * 10) / 10;
    return this.bmi;
  },
};
const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = Math.round((this.mass / this.height ** 2) * 10) / 10;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

const checkBMI = function () {
  if (mark.bmi > john.bmi) {
    console.log(
      `${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}) is higher than ${john.firstName} ${john.lastName}'s (${john.bmi})`
    );
  } else {
    console.log(
      `${john.firstName} ${john.lastName}'s BMI (${john.bmi}) is higher than ${mark.firstName} ${mark.lastName}'s (${mark.bmi})`
    );
  }
  return -1;
};

console.log(checkBMI());
*/

// Challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const namesNumbers = [195, "Julia", 202, "Kimchi"];
const names = ["Jacob", "Julia", "Kaleeth", "Kimchi"];
let tips = [];
let totals = [];

const calcTip = function (bill) {
  let tip;
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
    return tip;
  } else {
    tip = bill * 0.2;
    return tip;
  }
};

for (a = 0; a < bills.length; a++) {
  tips.push(calcTip(bills[a]));
  totals.push(calcTip(bills[a]) + bills[a]);
}

// BONUS
const calcAverage = function (arr) {
  let newArr = [];
  let sum = 0;
  for (let a = 0; a < arr.length; a++) {
    if (typeof arr[a] !== "number") continue;
    sum += arr[a];
    newArr.push(sum[a]);
  }
  if (sum === 0) {
    return `Array does not contain any numbers!`;
  }
  const average = sum / newArr.length;
  return Math.round(average * 10) / 10;
};

console.log(`Average from the bills array: ${calcAverage(bills)}`);
console.log(`Average from the tips array: ${calcAverage(tips)}`);
console.log(`Average from the totals array: ${calcAverage(totals)}`);
console.log(calcAverage(names));

// Challenge #5

const num1 = 50;
const num2 = 100;

const checkNumbers = function (num1, num2) {
  if (num1 === 100 || num2 === 100 || num1 + num2 === 100) {
    return true;
  } else {
    return false;
  }
};

console.log(checkNumbers(num1, num2));
