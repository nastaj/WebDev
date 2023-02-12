'use strict';

const score1El = document.querySelector('#score--0');
const score2El = document.querySelector('#score--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');
const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');
const currentScore1El = document.querySelector('#current--0');
const currentScore2El = document.querySelector('#current--1');

let score1 = 0;
let score2 = 0;
let currentScore1 = 0;
let currentScore2 = 0;

score1El.textContent = 0;
score2El.textContent = 0;

btnRoll.addEventListener('click', function () {
  const roll = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  switch (roll) {
    case 1:
      diceEl.src = 'dice-1.png';
      break;
    case 2:
      diceEl.src = 'dice-2.png';
      break;
    case 3:
      diceEl.src = 'dice-3.png';
      break;
    case 4:
      diceEl.src = 'dice-4.png';
      break;
    case 5:
      diceEl.src = 'dice-5.png';
      break;
    case 6:
      diceEl.src = 'dice-6.png';
      break;
  }

  if (player1El.classList.contains('player--active')) {
    if (roll !== 1) {
      currentScore1 += roll;
      currentScore1El.textContent = currentScore1;
    } else {
      diceEl.classList.add('hidden');
      currentScore1 = 0;
      currentScore1El.textContent = currentScore1;
      player1El.classList.remove('player--active');
      player2El.classList.add('player--active');
    }
  } else if (player2El.classList.contains('player--active')) {
    if (roll !== 1) {
      currentScore2 += roll;
      currentScore2El.textContent = currentScore2;
    } else {
      diceEl.classList.add('hidden');
      currentScore2 = 0;
      currentScore2El.textContent = currentScore2;
      player2El.classList.remove('player--active');
      player1El.classList.add('player--active');
    }
  }
});

btnHold.addEventListener('click', function () {
  diceEl.classList.add('hidden');
  if (player1El.classList.contains('player--active')) {
    score1 += currentScore1;
    score1El.textContent = score1;
    currentScore1 = 0;
    currentScore1El.textContent = currentScore1;
    player1El.classList.remove('player--active');
    player2El.classList.add('player--active');
  } else {
    score2 += currentScore2;
    score2El.textContent = score2;
    currentScore2 = 0;
    currentScore2El.textContent = currentScore2;
    player2El.classList.remove('player--active');
    player1El.classList.add('player--active');
  }

  if (score1 >= 100) {
    player1El.style.backgroundColor = '#60b347';
    btnRoll.disabled = true;
    btnHold.disabled = true;
    player2El.classList.remove('player--active');
    player1El.classList.add('player--active');
  } else if (score2 >= 100) {
    player2El.style.backgroundColor = '#60b347';
    btnRoll.disabled = true;
    btnHold.disabled = true;
    player1El.classList.remove('player--active');
    player2El.classList.add('player--active');
  }
});
