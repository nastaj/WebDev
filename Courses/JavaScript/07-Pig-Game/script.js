'use strict';

// Player 1
const playerOne = {
  playerEl: document.querySelector('.player--0'),
  overallScore: document.querySelector('#score--0'),
  currentScore: document.querySelector('#current--0'),
  overallScoreValue: 0,
  currentScoreValue: 0,
  isActive: function () {
    return this.playerEl.classList.contains('player--active');
  },
  addActive: function () {
    return this.playerEl.classList.add('player--active');
  },
  removeActive: function () {
    return this.playerEl.classList.remove('player--active');
  },
  isWinner: function () {
    this.playerEl.classList.add('player--winner');
    btnRoll.disabled = true;
    btnHold.disabled = true;
    playerTwo.removeActive();
    this.addActive();
  },
};

// Player 2
const playerTwo = {
  playerEl: document.querySelector('.player--1'),
  overallScore: document.querySelector('#score--1'),
  currentScore: document.querySelector('#current--1'),
  overallScoreValue: 0,
  currentScoreValue: 0,
  isActive: function () {
    return this.playerEl.classList.contains('player--active');
  },
  addActive: function () {
    return this.playerEl.classList.add('player--active');
  },
  removeActive: function () {
    return this.playerEl.classList.remove('player--active');
  },
  isWinner: function () {
    this.playerEl.classList.add('player--winner');
    btnRoll.disabled = true;
    btnHold.disabled = true;
    playerOne.removeActive();
    this.addActive();
  },
};

// Show current score
const showCurrent = function (player) {
  return (player.currentScore.textContent = player.currentScoreValue);
};

// Set initial scores to 0
playerOne.overallScore.textContent = 0;
playerTwo.overallScore.textContent = 0;

// Buttons
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const diceEl = document.querySelector('.dice');

// Modal
const btnRules = document.querySelector('.btn--rules');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// Roll function
btnRoll.addEventListener('click', function () {
  // Roll 1-6
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

  if (playerOne.isActive()) {
    if (roll !== 1) {
      playerOne.currentScoreValue += roll;
      showCurrent(playerOne);
    } else {
      diceEl.classList.add('hidden');
      playerOne.currentScoreValue = 0;
      showCurrent(playerOne);
      playerOne.removeActive();
      playerTwo.addActive();
    }
  } else if (playerTwo.isActive()) {
    if (roll !== 1) {
      playerTwo.currentScoreValue += roll;
      showCurrent(playerTwo);
    } else {
      diceEl.classList.add('hidden');
      playerTwo.currentScoreValue = 0;
      showCurrent(playerTwo);
      playerTwo.removeActive();
      playerOne.addActive();
    }
  }
});

btnHold.addEventListener('click', function () {
  diceEl.classList.add('hidden');
  if (playerOne.isActive()) {
    playerOne.overallScoreValue += playerOne.currentScoreValue;
    playerOne.overallScore.textContent = playerOne.overallScoreValue;
    playerOne.currentScoreValue = 0;
    showCurrent(playerOne);
    playerOne.removeActive();
    playerTwo.addActive();
  } else {
    playerTwo.overallScoreValue += playerTwo.currentScoreValue;
    playerTwo.overallScore.textContent = playerTwo.overallScoreValue;
    playerTwo.currentScoreValue = 0;
    showCurrent(playerTwo);
    playerTwo.removeActive();
    playerOne.addActive();
  }

  // Determine the winner
  if (playerOne.overallScoreValue >= 100) playerOne.isWinner();
  else if (playerTwo.overallScoreValue >= 100) playerTwo.isWinner();
});

btnNew.addEventListener('click', function () {
  // Remove winner overlay
  playerOne.playerEl.classList.remove('player--winner');
  playerTwo.playerEl.classList.remove('player--winner');

  // Set player 1 as active
  playerTwo.removeActive();
  playerOne.addActive();

  // Hide the dice
  diceEl.classList.add('hidden');

  // Enable buttons
  btnRoll.disabled = false;
  btnHold.disabled = false;

  // Reset scores to 0 for both players
  playerOne.overallScoreValue = 0;
  playerOne.overallScore.textContent = playerOne.overallScoreValue;
  playerOne.currentScoreValue = 0;
  showCurrent(playerOne);

  playerTwo.overallScoreValue = 0;
  playerTwo.overallScore.textContent = playerTwo.overallScoreValue;
  playerTwo.currentScoreValue = 0;
  showCurrent(playerTwo);
});

btnRules.addEventListener('click', function () {
  document.querySelector('.modal').classList.remove('hidden');
  document.querySelector('.overlay').classList.remove('hidden');
});

btnCloseModal.addEventListener('click', function () {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
});

overlay.addEventListener('click', function () {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
});
