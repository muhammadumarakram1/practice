'use strict';
// Selecting elements 
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
let scores, currentScore, activePlayer, isPlaying;

function init() {
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    isPlaying = true;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
}
init();

function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = (activePlayer === 0 ? 1 : 0);
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// Rolling Dice
btnRoll.addEventListener('click', function () {
    if (isPlaying) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.src = `dice-${dice}.png`;
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // Switch to next player 
            switchPlayer();
        }
    }
});

// Hold Button Functionality
btnHold.addEventListener('click', function () {
    if (isPlaying) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            isPlaying = false;
            diceEl.src = `dice.png`;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', init);