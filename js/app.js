/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Instantiate Game Class
const game = new Game();

// DOM Elements
const startGame = document.querySelector('#btn__reset');
const qwerty = document.querySelectorAll('#qwerty button');
const hearts = document.querySelectorAll('#scoreboard img');
const phrase = document.querySelector('#phrase ul');

/* ---------------------------------------------------------------------------------------------------- */
// Events
/* ---------------------------------------------------------------------------------------------------- */

// Start Game
startGame.addEventListener('click', () => {
  game.startGame();
});

// Keys (Click);
qwerty.forEach(button => {
  button.addEventListener('click', (e) => {
    // const userGuess = e.target.textContent;
    const userGuess = e.target;

    game.handleInteraction(userGuess);
  })
})

// Keys (Keyup)
document.addEventListener('keyup', (e) => {
  const userGuess = e.key;

  qwerty.forEach(button => {
    if (userGuess === button.textContent && !button.disabled) {
      game.handleInteraction(button);
    }
  })
})