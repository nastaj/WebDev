// https://www.w3resource.com/javascript-exercises/javascript-string-exercises.php

// 1)
const isString = function (value) {
  console.log(typeof value === 'string');
};
isString(1);

// 2)
const isBlank = function (value) {
  console.log(value === '');
};
isBlank('');

// 3)
const strToArr = function (value) {
  console.log(value.split(' '));
};
strToArr('Robin Singh');

// 4)
const truncate = function (value, number) {
  console.log(value.slice(0, number));
};
truncate('Robin Singh', 4);

// 5)
const abbrevName = function (value) {
  const splitValue = value.split(' ');
  const initial = splitValue[1].slice(0, 1) + '.';
  console.log(splitValue[0] + ' ' + initial);
};
abbrevName('Robin Singh');
abbrevName('Jakub Nasta');
