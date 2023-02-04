// *************
// Challenge #1
// *************

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
