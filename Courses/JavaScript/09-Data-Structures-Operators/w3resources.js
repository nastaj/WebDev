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

// 6)
const protectEmail = function (email) {
  const mail = email.split('@');
  let str = '';
  str += `${mail[0].slice(0, 3).padEnd(6, '...')}@${mail[1]}`;
  console.log(str);
};

protectEmail('jakub56@gmail.com');
protectEmail('lilla145@wp.com');
protectEmail('robin_singh@example.com');

// 7)
const stringParameterize = function (string) {
  console.log(string.toLowerCase().replaceAll(' ', '-').replaceAll('.', ''));
};

stringParameterize('Robin Singh from USA.');
stringParameterize('Jakub from Poland');

// 8)
const capitalize = function (string) {
  console.log(
    `${string[0].replace(string[0], string[0].toUpperCase())}${string.slice(1)}`
  );
};

capitalize('jakub');
capitalize('js string exercises');

// 9)
const capitalizeWords = function (string) {
  const words = string.split(' ');
  const capitalizedWords = [];
  for (const word of words) {
    capitalizedWords.push(word.replace(word[0], word[0].toUpperCase()));
  }
  console.log(capitalizedWords.join(' '));
};

capitalizeWords('js string exercises');

// 10)
const swapCase = function (string) {
  const chars = [];
  for (const char of string) {
    chars.push(
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    );
  }
  console.log(chars.join(''));
};

swapCase('AaBbc');
swapCase('Jakub');
swapCase('BRuNo');
