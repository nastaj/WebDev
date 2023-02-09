// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

let temperaturesClean = [];
const calcTempAmplitude = function (temps) {
  for (let i = 0; i < temperatures.length; i++) {
    if (typeof temperatures[i] === 'string') {
      continue;
    } else {
      temperaturesClean.push(temperatures[i]);
    }
  }

  //   const temperaturesMax = Math.max(...temperaturesClean);
  let temperaturesMax = temperatures[0];
  let temperaturesMin = temperatures[0];
  for (let i = 0; i < temperatures.length; i++) {
    const curTemp = temperatures[i];

    if (curTemp > temperaturesMax) {
      temperaturesMax = curTemp;
    }

    if (curTemp < temperaturesMin) {
      temperaturesMin = curTemp;
    }
  }
  //   const temperaturesMin = Math.min(...temperaturesClean);
  const amplitude = temperaturesMax - temperaturesMin;

  return `
  Max temperature: ${temperaturesMax}
  Min temperature: ${temperaturesMin}
  Amplitude: ${amplitude}
  `;
};

console.log(calcTempAmplitude(temperatures));

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? Answer: NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

let temperaturesCleanNew = [];
const calcTempAmplitudeNew = function (t1, t2) {
  const temperatures = t1.concat(t2);

  for (let i = 0; i < temperatures.length; i++) {
    if (typeof temperatures[i] === 'string') {
      continue;
    } else {
      temperaturesCleanNew.push(temperatures[i]);
    }
  }

  //   const temperaturesMax = Math.max(...temperaturesCleanNew);
  let temperaturesMax = temperatures[0];
  let temperaturesMin = temperatures[0];
  for (let i = 0; i < temperatures.length; i++) {
    const curTemp = temperatures[i];

    if (curTemp > temperaturesMax) {
      temperaturesMax = curTemp;
    }

    if (curTemp < temperaturesMin) {
      temperaturesMin = curTemp;
    }
  }
  //   const temperaturesMin = Math.min(...temperaturesCleanNew);
  const amplitudeNew = temperaturesMax - temperaturesMin;

  return `
  Max temperature: ${temperaturesMax}
  Min temperature: ${temperaturesMin}
  Amplitude: ${amplitudeNew}
  `;
};

const t1 = [1, 'oj', 'error', 4, -2];
const t2 = [-5, 'ayy', 7, 'err', 9];

console.log(calcTempAmplitudeNew(t1, t2));
