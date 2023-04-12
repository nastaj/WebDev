const characters = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male',
  },
];

// MAP
// Get an array of all names
const names = characters.map(char => char.name);
console.log(names);

// Get an array of all heights
const heights = characters.map(char => char.height);
console.log(heights);

// Get an array of objects with just name and height properties
const nameHeights = characters.map(char => ({
  name: char.name,
  height: char.height,
}));
console.log(nameHeights);

// Get an array of all first names
const firstNames = characters.map(char => char.name.split(' ')[0]);
console.log(firstNames);

// REDUCE
// Get the total mass of all characters
const totalMass = characters.reduce(
  (sum, char) => (sum += Number(char.mass)),
  0
);
console.log(totalMass);

// Get the total height of all characters
const totalHeight = characters.reduce(
  (sum, char) => (sum += Number(char.height)),
  0
);
console.log(totalHeight);

// Get the total number of characters in all the character names
const totalCharactersNames = characters.reduce(
  (sum, char) => (sum += char.name.length),
  0
);
console.log(totalCharactersNames);

// Get the total number of characters by eye color (hint. a map of eye color to count)
const totalCharactersEyes = characters.reduce(
  (sum, char) => (sum += char.eye_color.length),
  0
);
console.log(totalCharactersEyes);

// FILTER
// Get characters with mass greater than 100
const massGreater100 = characters.filter(char => Number(char.mass) > 100);
console.log(massGreater100);

// Get characters with height less than 200
const heightLess200 = characters.filter(char => Number(char.height) < 200);
console.log(heightLess200);

// Get all male characters
const males = characters.filter(char => {
  if (!char.gender.includes('female')) return char;
});
console.log(males);
// Get all female characters
const females = characters.filter(char => char.gender === 'female');
console.log(females);

// SORT
// Sort by name
const sortName = characters.slice().sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
});
console.log(sortName);

// Sort by mass
const sortMass = characters.slice().sort((a, b) => a.mass - b.mass);
console.log(sortMass);

// Sort by height
const sortHeight = characters.slice().sort((a, b) => b.height - a.height);
console.log(sortHeight);

// Sort by gender
const sortGender = characters.slice().sort((a, b) => {
  if (a.gender > b.gender) {
    return 1;
  }
  if (a.gender < b.gender) {
    return -1;
  }
});
console.log(sortGender);

// EVERY
// Does every character have blue eyes?
const blueEyes = characters.every(char => char.eye_color.includes('blue'));
console.log(blueEyes);

// Does every character have mass more than 40?
const mass400 = characters.every(char => char.mass > 40);
console.log(mass400);

// Is every character shorter than 200?
const height200 = characters.every(char => char.height < 200);
console.log(height200);

// Is every character male?
const everyMale = characters.every(char => char.gender === 'male');
console.log(everyMale);

// SOME
// Is there at least one male character?
const atLeastOneMale = characters.some(char => char.gender === 'male');
console.log(atLeastOneMale);

// Is there at least one character with blue eyes?
const atLeastOneBlue = characters.some(char => char.eye_color === 'blue');
console.log(atLeastOneBlue);

// Is there at least one character taller than 200?
const atLeastOneTaller200 = characters.some(char => char.height > 200);
console.log(atLeastOneTaller200);

// Is there at least one character that has mass less than 50?
const atLeastOneMassLess50 = characters.some(char => char.mass < 50);
console.log(atLeastOneMassLess50);
