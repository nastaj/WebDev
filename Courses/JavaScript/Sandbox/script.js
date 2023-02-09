// Remember, we're gonna use strict mode in all scripts now!
'use strict';

console.log('********************************');
console.log('======ALLOWANCE CALCULATOR======');
console.log('********************************');
console.log('');

const mark = {
  firstName: 'Mark',
  age: 20,
  grade: 'A',
  baseAllowance: 50,
  checkWeeklyAllowance: function (age, grade, baseAllowance) {
    switch (this.grade) {
      case 'A':
        this.grade = 6;
        break;
      case 'B':
        this.grade = 5;
        break;
      case 'C':
        this.grade = 4;
        break;
      case 'D':
        this.grade = 3;
        break;
      case 'E':
        this.grade = 2;
        break;
      case 'F':
        this.grade = 1;
    }

    let allowance;

    if (this.baseAllowance > 50 || this.age >= 23) {
      allowance = this.baseAllowance + this.grade * 5;
    } else if (this.baseAllowance < 50 || (this.age < 23 && this.age >= 18)) {
      allowance = this.baseAllowance + this.grade * 10;
    }
    if (this.age < 18) {
      allowance = this.baseAllowance + this.grade * 20;
    }

    return allowance;
  },
};

let weeklyAllowanceArray = [];
let monthlyAllowanceTotal = 0;

for (let i = 0; i <= 4; i++) {
  weeklyAllowanceArray.unshift(mark.checkWeeklyAllowance());
  for (i = 0; i < weeklyAllowanceArray.length; i++) {
    weeklyAllowanceArray[i] += 10;
  }
  console.log(`Week ${i}: ${weeklyAllowanceArray[i - 1]}`);
}

for (let i = 0; i < weeklyAllowanceArray.length; i++) {
  monthlyAllowanceTotal += weeklyAllowanceArray[i];
}
console.log(`Total monthly allowance: ${monthlyAllowanceTotal}`);

console.log('');
console.log('********************************');
console.log('======REVERSE WHATEVER======');
console.log('********************************');
console.log('');
//Reverse only numbers, strings and arrays

const reverse = function (value) {
  if (typeof value === 'string') {
    return firstName.split('').reverse().join('');
  } else if (typeof value === 'number') {
    return (
      parseFloat(value.toString().split('').reverse().join('')) *
      Math.sign(value)
    );
  } else if (Array.isArray(value)) {
    return value.reverse();
  } else {
    return `This variable cannot be reversed!`;
  }
};

let firstName = 'Jakub';
let currentYear = -2023;
let planets = ['Earth', 'Mars', 'Mercury', 'Venus'];
let data = {
  id: 1,
  firstName: 'Jakub',
  lastName: 'Nasta',
};

console.log(reverse(currentYear));
console.log(reverse([1, 3, 5, 7]));

console.log('********************************');
console.log('======AVERAGE GRADES======');
console.log('********************************');
console.log('');

const students = [
  { name: 'John', grades: [90, 85, 80] },
  { name: 'Jane', grades: [95, 92, 87] },
  { name: 'Jim', grades: [77, 84, 81] },
];

const calcAverageGrade = function (students) {
  for (let i = 0; i < students.length; i++) {
    let sum = 0;
    for (let j = 0; j < students[i].grades.length; j++) {
      sum += students[i].grades[j];
    }
    const avg = sum / students[i].grades.length;
    console.log(
      `${students[i].name}'s average grade is ${Math.round(avg * 100) / 100}`
    );
  }
  return 0;
};

console.log(calcAverageGrade(students));

console.log('********************************');
console.log('======SHOPPING LIST======');
console.log('********************************');
console.log('');

const shoppingList = [
  { item: 'apple', price: 0.5 },
  { item: 'banana', price: 0.25 },
  { item: 'orange', price: 0.75 },
  { item: 'pear', price: 0.35 },
];

const calcCost = function (shoppingList) {
  let total = 0;
  for (let i = 0; i < shoppingList.length; i++) {
    total += shoppingList[i].price;
  }
  return `Total cost of all items is: ${total}`;
};

console.log(calcCost(shoppingList));

console.log('');
console.log('********************************');
console.log('======AVERAGE SALARIES======');
console.log('********************************');
console.log('');

const employees = [
  { name: 'John', salary: 55000 },
  { name: 'Jane', salary: 75000 },
  { name: 'Jim', salary: 65000 },
  { name: 'Jake', salary: 85000 },
];

const calculateAverageSalary = function () {
  let totalSalary = 0;
  for (let i = 0; i < employees.length; i++) {
    totalSalary += employees[i].salary;
  }
  let avgSalary = totalSalary / employees.length;
  return `The average salary of all employees is: ${avgSalary}`;
};

console.log(calculateAverageSalary(employees));
