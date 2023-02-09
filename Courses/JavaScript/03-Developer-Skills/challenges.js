'use strict';
// Challenge 1

const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      console.log(`No data for day ${i + 1}`);
      continue;
    }
    console.log(`${arr[i]}°C in ${i + 1} days...`);
  }
  return 0;
};

const forecastArr1 = [17, 21, 23];
const forecastArr2 = [12, 5, -5, 0, 4];
const forecastArr3 = ['error', 13, 'err', 14, 'mismatch'];
console.log(printForecast(forecastArr1));
console.log(printForecast(forecastArr2));
console.log(printForecast(forecastArr3));
