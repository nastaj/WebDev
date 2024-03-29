'use strict';

const openingHours = {
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
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Old way
  // openingHours: openingHours,

  // ES6 enhanced object literals
  openingHours,

  // Old way
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  //ES6 enhanced object literals
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderCategory(categoriesIndex, mainIndex) {
    return [this.categories[categoriesIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  specialOffer({ day, categoryIndex, starterIndex, mainIndex, discount }) {
    console.log(
      `Special offer for ${this.categories[categoryIndex]} ${day}! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} on ${discount} discount! Visit our restaurant ${this.name} at ${this.location}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    let str = '';
    for (let i = 0; i <= otherIngredients.length - 1; i++) {
      if (i == otherIngredients.length - 1) {
        str += otherIngredients[i];
        str += '.';
      } else if (i == otherIngredients.length - 2) {
        str += otherIngredients[i];
        str += ' and ';
      } else {
        str += otherIngredients[i];
        str += ', ';
      }
    }
    console.log(
      `Order successful. Ordered pizza with ${mainIngredient}${
        otherIngredients.length === 1 ? ' and' : ','
      } ${str}`
    );
  },
};
///////////////////////////////
//Lecture: WORKING WITH STRINGS #1
///////////////////////////////
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

// Slice (Hard-coded examples)
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

// Slice (Computed examples)
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// Slice (Minus indexes)
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat 😥');
  } else {
    console.log('You got lucky 😎');
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// What JavaScript does when we call method on a string
console.log(new String('Jakub'));
console.log(typeof new String('Jakub'));

// Exercises
const showInitials = function (fullName) {
  let str = ''; // initial string
  const spacesCount = fullName.split(' ').length - 1; // check how many spaces are in the string
  const initialFirst = fullName[0]; // get the first initial
  const initialSecond = fullName[fullName.indexOf(' ') + 1]; // get the second initial
  const initialThird = fullName[fullName.lastIndexOf(' ') + 1]; // get the third (optional) initial
  str += `Your initials are: ${initialFirst}${initialSecond}`; // building the string

  if (spacesCount > 1) {
    str += initialThird; // add the third initial if the number of spaces is greater than 1
  }

  console.log(str); // log the string
};

showInitials('Jakub Nasta');
showInitials('Mark Linder');
showInitials('John Johnny Johnson');

const js = 'JavaScript Shenanigans';
console.log(js.slice(0, js.indexOf(' ')));
console.log(js.slice(js.indexOf(' ') + 1));

const isLong = function (string) {
  string.length > 10
    ? console.log(
        `That's a long string! Number of characters: ${string.length}`
      )
    : console.log(
        `Not a very long string. Number of characters: ${string.length}`
      );
};

isLong('Jakub');
isLong(js);

// Changing string to lower/upper case
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jAkUB'; // Jakub
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const fixCapitalization = function (passenger) {
  const passengerLower = passenger.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(passengerCorrect);
};

fixCapitalization('jAKuB');
fixCapitalization('MARk');
fixCapitalization('jOHN');

// Comparing emails
const email = 'hello@jakub.io';
const loginEmail = '   Hello@Jakub.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

const checkEmails = function (email1, email2) {
  const normalizedEmail = email2.toLowerCase().trim().replaceAll(' ', '');
  email1 === normalizedEmail
    ? console.log('Emails are matching ✅')
    : console.log('Emails are not the same ❌');
};

checkEmails('donme@don.me', 'DON  mE@ DOn .Me');
checkEmails('donme@don.me', 'DbNms@DOn .Me ');

// Replacing
const priceIE = '288,97€';
const priceUS = priceIE.replace('€', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

// Boleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320neo'));
console.log(plane2.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Part of the NEW AIRBUS family.');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase().replaceAll(' ', '');
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a Laptop, some Food and a Pocket Kn i fe');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jakub Nasta'.split(' '));

const [firstName, lastName] = 'Jakub Nasta'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jakub nasta');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Jakub'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(9583459862356));
console.log(maskCreditCard('158322356'));
console.log(maskCreditCard(958395));

// Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛬'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

///////////////////////////////
//Lecture: MAPS: Iteration
///////////////////////////////
/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
const answer = 3;
console.log(answer);

// answer === question.get('correct')
//   ? console.log(question.get(true))
//   : console.log(question.get(false));

console.log(question.get(answer === question.get('correct')));

// Convert map to array
console.log([...question]);
// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/
///////////////////////////////
//Lecture: MAPS: FUNDAMENTALS
///////////////////////////////
/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
console.log(rest.size);

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

const h1 = document.querySelector('h1');
rest.set(h1, 'Heading');
console.log(rest.get(h1));
*/
///////////////////////////////
//Lecture: SETS
///////////////////////////////
/*
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jakub'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) {
  console.log(order);
}

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('Jakub').size);

const weekdays = new Set([
  'mon',
  'tue',
  'wed',
  'thu',
  'fri',
  'mon',
  'sat',
  'sun',
  'sat',
  'fri',
  'tue',
]);
weekdays.delete('fri');
console.log(weekdays);
const weekdaysArr = [...weekdays];
console.log(weekdaysArr);
*/
///////////////////////////////
//Lecture: LOOPING OBJECTS: KEYS, VALUES, ENTRIES
///////////////////////////////
/*
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
///////////////////////////////
//Lecture: OPTIONAL CHAINING (?.)
///////////////////////////////
/*
// Old way
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open;
  console.log(
    `On ${day}, we ${
      restaurant.openingHours[day] == undefined
        ? 'are closed.'
        : 'open at ' + open + '.'
    }`
  );
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jakub', email: 'hello@jakub.ie' }];

// Old way
if (users.length > 0) console.log(users[0].name);
else console.log('User array is empty');

// WITH optional chaining
console.log(users[0]?.name ?? 'User array is empty');
*/
///////////////////////////////
//Lecture: ENHANCED OBJECT LITERALS
///////////////////////////////
/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHoursComp = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
*/
///////////////////////////////
//Lecture: FOR-OF LOOP
///////////////////////////////
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// For-of function example
const orderForOf = function (...items) {
  let orderString = '';
  for (const [i, el] of items.entries()) {
    if (i == items.length - 1) {
      orderString += el + '.';
    } else {
      orderString += el + ', ';
    }
  }
  console.log(`Ordered ${orderString}`);
};

// For function example
const orderFor = function (...items) {
  let orderString = '';
  for (let i = 0; i < items.length; i++) {
    if (i == items.length - 1) {
      orderString += items[i] + '.';
    } else {
      orderString += items[i] + ', ';
    }
  }
  console.log(`Ordered ${orderString}`);
};

orderForOf('pizza', 'margherita', 'garlic bread', 'coke');
orderFor('pizza', 'margherita', 'garlic bread', 'coke');
// orderFor('pizza', 'margherita', 'garlic bread', 'coke');

// console.log(...menu.entries());
*/
///////////////////////////////
//Lecture: LOGICAL ASSIGNMENT OPERATORS
///////////////////////////////
/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/
///////////////////////////////
//Lecture: NULLISH COALESCING OPERATOR (??)
///////////////////////////////
/*
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/
///////////////////////////////
//Lecture: SHORT CIRCUITING (&& and ||)
///////////////////////////////
/*
console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jakub');
console.log('' || 'Jakub');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Jakub');
console.log(7 && 'Jakub');
console.log('Hello' && undefined);

console.log('Hello' && 23 && null && 'Jakub');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/
///////////////////////////////
//Lecture: REST PATTERN AND PARAMETERS
///////////////////////////////
/*
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

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach', 'pepperoni');
*/
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
