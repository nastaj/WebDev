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
