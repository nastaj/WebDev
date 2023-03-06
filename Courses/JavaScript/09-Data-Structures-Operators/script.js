'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderCategory: function (categoriesIndex, mainIndex) {
    return [this.categories[categoriesIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  specialOffer: function ({
    day,
    categoryIndex,
    starterIndex,
    mainIndex,
    discount,
  }) {
    console.log(
      `Special offer for ${this.categories[categoryIndex]} ${day}! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} on ${discount} discount! Visit our restaurant ${this.name} at ${this.location}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    if (otherIngredients.length > 3) {
      console.log('Too many ingredients!');
    } else {
      console.log(`Ordered pizza with ${mainIngredient} 
      ${otherIngredients}`);
    }
  },
};

///////////////////////////////
//Lecture: REST PATTERN AND PARAMETERS
///////////////////////////////

// 1) Destructuring
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
///////////////////////////////
//Lecture: SPREAD OPERATOR (...)
///////////////////////////////
/*
// Expanding an array
const arr = [7, 8, 9];

// Manual way
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Using spread operator
const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jakub';
const letters = [...str, ' ', 'N.'];
console.log(letters);
console.log(...str);

// Real-world example with arguments and function
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];

console.log(ingredients);

// Old way
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// Using spread operator
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guisseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
///////////////////////////////
//Lecture: DESTRUCTURING OBJECTS
///////////////////////////////
/*
// Destructuring with functions
restaurant.specialOffer({
  day: 'Saturday',
  categoryIndex: 3,
  starterIndex: 3,
  mainIndex: 2,
  discount: '20%',
});

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

// Destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Custom variable names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

const {
  openingHours: {
    thu: { open: thuOpen, close: thuClose },
  },
} = restaurant;
console.log(thuOpen, thuClose);

// Exercise
const snacks = {
  chips: {
    name: 'Pringles',
    salty: true,
  },
  candy: {
    name: 'Twizzlers',
    salty: false,
  },
  chocolate: {
    name: 'Mars',
    salty: false,
  },
};

const { candy, fruit = { name: 'Banana', salty: false } } = snacks;
console.log(candy, fruit);
*/
///////////////////////////////
//Lecture: DESTRUCTURING ARRAYS
///////////////////////////////
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring arrays
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// Skipping elements from the array
const [, , third, fourth] = restaurant.categories;
console.log(third, fourth);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function and store them in a variable
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);

// Testing

const arr2 = [10, 11, 12, [13, 14, [15, 16], 'Joseph'], 'John'];
const [
  firstNumber,
  secondNumber,
  ,
  [
    thirdNumber,
    ,
    [fourthNumber, fifthNumber],
    name1 = 'notFound',
    name2 = 'notFound',
  ],
  name3,
] = arr2;
console.log(
  firstNumber,
  secondNumber,
  thirdNumber,
  fourthNumber,
  fifthNumber,
  name1,
  name2,
  name3
);

const [category = 'notFound', mainItem = 'notFound'] = restaurant.orderCategory(
  0,
  1
);
console.log(category, mainItem);
*/
