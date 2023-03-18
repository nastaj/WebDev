'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Lecture: Simple Array Methods
/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// Returns selected elements in an array, as a new array
// Slice does not mutate the original array - it returns a new array.
console.log('======== SLICE ========');
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
// Shallow copy with slice
console.log(arr.slice());

// SPLICE
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place (similar to slice).
// Splice, as opposed to slice, mutates the original array. It is best used for removing the last element from an array.
console.log('======== SPLICE ========');
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2); // First argument works the same as in the slice method, and the second argument specifies the number of elements that we want to delete
console.log(arr);

// REVERSE
// Reverses order of the array elements.
// Reverse mutates the original array.
console.log('======== REVERSE ========');
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
// Concatanates elements from one array with elements with the second array.
// Concat does not mutate the original array.
console.log('======== CONCAT ========');
const letters = arr.concat(arr2);
console.log(letters);

// JOIN
// Joins the elements from an array, returning them as a string separated with the specified separator.
console.log('======== JOIN ========');
console.log(letters.join(' - '));

// AT
// Returns specified element of the array
console.log('======== AT ========');
const arr3 = [23, 11, 64];

// Old way
console.log(arr3[0]);

// New way
console.log(arr3.at(0));

// Getting last element
// Traditional
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
// Modern
console.log(arr3.at(-1));
