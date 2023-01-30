// *************
// Challenge #1
// *************

// Test Data 1
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / heightJohn ** 2;
bmiMark = Math.round(bmiMark * 10) / 10;
bmiJohn = Math.round(bmiJohn * 10) / 10;

console.log("Mark's BMI: " + bmiMark);
console.log("John's BMI: " + bmiJohn);

// Test Data 2
// massMark = 95;
// heightMark = 1.88;
// massJohn = 85;
// heightJohn = 1.76;

// bmiMark = massMark / heightMark ** 2;
// bmiJohn = massJohn / heightJohn ** 2;
// markHigherBMI = bmiMark > bmiJohn;

// console.log("Mark's BMI: " + Math.round(bmiMark * 10) / 10);
// console.log("John's BMI: " + Math.round(bmiJohn * 10) / 10);
// console.log("Does Mark have higher BMI than John?: " + markHigherBMI);

// *************
// Challenge #2
// *************

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
}
