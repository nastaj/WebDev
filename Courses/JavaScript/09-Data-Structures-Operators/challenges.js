'use strict';
// CHALLENGE #1
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: [
    'Lewandowski',
    'Gnarby',
    'Lewandowski',
    'Hummels',
    'Lewandowski',
    'Hummels',
    'Lewandowski',
  ],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;

// 2.
const [gk, ...fieldPlayers] = players1;

// 3.
const allPlayers = [...players1, ...players2];

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Persic'];

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game;

// 6.
const printGoals = function (...players) {
  for (let i = 0; i <= players.length - 1; i++) {
    console.log(players[i]);
  }
  console.log(`${players.length} goals were scored.`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win.');
team1 > team2 && console.log('Team 2 is more likely to win.');
*/
// CHALLENGE #2
/*
// 1.
console.log('==================');
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
let totalOdds = 0;
for (const odd of Object.values(game.odds)) {
  totalOdds += odd;
}
let avgOdds = Math.round((totalOdds / Object.keys(game.odds).length) * 10) / 10;
console.log(`Average odds: ${avgOdds}`);

// 3.
for (const [teamName, odds] of Object.entries(game.odds)) {
  console.log(
    `Odds of ${game[teamName] ? game[teamName] + ' victory' : 'draw'}: ${odds}`
  );
}

// 4.
const scorers = {};
for (const players of game.scored) {
  console.log(players);
  scorers[players] ? (scorers[players] += 1) : (scorers[players] = 1);
}
console.log(scorers);

// 5.
const [teamOne, teamTwo] = [game.players[0], game.players[1]];
console.log(teamOne, teamTwo);
const viewMatch = function (teamOne, teamTwo) {
  console.log('========== MATCH ===========');
  console.log(`Date: ${game.date}`);
  console.log(`${game.team1} VS ${game.team2}`);
  console.log('');
  console.log(`${game.team1}`);
  for (const [i, player] of teamOne.entries()) {
    console.log(`${i + 1}. ${player}`);
  }
  console.log('');
  console.log(`${game.team2}`);
  for (const [i, player] of teamTwo.entries()) {
    console.log(`${i + 1}. ${player}`);
  }
};

viewMatch(teamOne, teamTwo);
*/
// Challenge #3
/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🟨 Yellow card'],
  [69, '🟥 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟨 Yellow card'],
]);

// 1.
const events = [...new Set([...gameEvents.values()])];
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
const times = [...gameEvents.keys()];
console.log(
  `An event happened, on average, every ${
    times[times.length - 1] / gameEvents.size
  } minutes.`
);

// 4.
for (const [key, value] of gameEvents) {
  console.log(
    `${key < 45 ? '[FIRST HALF]' : '[SECOND HALF]'} ${key}: ${value}`
  );
}

// 5.
for (const [key, value] of gameEvents) {
  value === '🟥 Red card'
    ? console.log(`There was a ${value} at ${key} minute!`)
    : 'No red cards in this match.';

  value === '⚽ GOAL'
    ? console.log(`There was a ${value} at ${key} minute!`)
    : 'No goals this match.';
}

// 6.
const goalsTimes = [];
for (const [key, value] of gameEvents) {
  if (value === '⚽ GOAL') {
    goalsTimes.push(key);
  }
}

console.log(
  `Average time between goals: ${
    goalsTimes[goalsTimes.length - 1] / goalsTimes.length
  } minutes.`
);
*/

// Challenge #4
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textArea = document.querySelector('textarea');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  const content = textArea.value;
  const splitContent = content.split('\n');
  const trimmedContent = splitContent.map(function (arr) {
    return arr.trim();
  });
  const splitContent2 = [];
  for (let el of trimmedContent) {
    splitContent2.push(el.split('_'));
  }
  for (let [i, el] of splitContent2.entries()) {
    const finishedContent =
      el[0].toLowerCase() +
      el[1][0].toUpperCase() +
      el[1].slice(1).toLowerCase();
    console.log(
      finishedContent.replaceAll(' ', '').padEnd(20) + '✅'.repeat(i + 1)
    );
  }

  // ALTERNATIVE SOLUTION
  // const text = textArea.value;
  // const rows = text.split('\n');
  // for (const [i, row] of rows.entries()) {
  //   const [first, second] = row.toLowerCase().trim().split('_');
  //   const output = `${first}${second.replace(
  //     second[0],
  //     second[0].toUpperCase()
  //   )}`;
  //   console.log(output.padEnd('20') + '✅'.repeat(i + 1));
  // }
});
*/
// Challenge #5

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
// Data needed for first part of the section

for (let flight of flights.split('+')) {
  let str = '';
  let [status, sector1, sector2, time] = flight.split(';');

  status = status.replace(status[0], '').replace('_', ' ');
  sector1 = sector1.slice(0, 3).toUpperCase();
  sector2 = sector2.slice(0, 3).toUpperCase();
  time = time.replace(':', 'h');

  str += `${
    status.includes('Delayed') ? '🔴 ' + status : status.padStart(20)
  } from ${sector1} to ${sector2} (${time})`;

  console.log(str);
}
