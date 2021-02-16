/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase('incredible'), 
      new Phrase('up up and away'), 
      new Phrase('wake me up'), 
      new Phrase('shine bright'), 
      new Phrase('speedy')
    ];
    this.activePhrase = null;
  }

  startGame() {
    // Hide Overlay
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';

    // Get Random Phrase & Set Active Phrase
    const randomPhrase = this.getRandomPhrase();
    this.activePhrase = randomPhrase;

    // Instantiate Phrase Object & Add Phrase To Display
    this.activePhrase.addPhraseToDisplay();

  }

  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

  handleInteraction(userGuess) {
    // Disable Key
    userGuess.disabled = true;

    // Check If Active Phrase Contains Letter
    const letter = userGuess.textContent;

    // Letter Guess Status
    const letterStatus = this.activePhrase.checkLetter(letter, userGuess);
    
    if (!letterStatus) {
      this.removeLife();
    }
    else {
      this.activePhrase.showMatchedLetter(letter);
      this.checkForWin();
    }

  }

  removeLife() {
    // Increment Missed Guesses
    this.missed++;
    
    // // Replace Full Hearts With Empty Heart
    hearts[hearts.length - this.missed].setAttribute('src', '../images/lostHeart.png');

    if (this.missed >= 5) {
      this.gameOver('Sorry, try again next time!', 'lose');
    }
  }

  checkForWin() {
    const hiddenLetters = document.querySelectorAll('#phrase .hide');

    if (hiddenLetters.length === 0) {
      this.gameOver('You win!', 'win');
    }
  }

  gameOver(message, status) {
    // Set Text For Play Again Button
    const resetBtn = document.querySelector('#btn__reset');
    resetBtn.textContent = 'Play Again';

    // Set Text For Message
    resetBtn.previousElementSibling.textContent = message;

    // Display Overlay
    resetBtn.parentElement.style.display = 'flex';
    resetBtn.parentElement.className = status;

    // Reset Game
    this.resetGame();
  }

  resetGame() {
    qwerty.forEach(button => {
      button.disabled = false;
      button.className = 'key';
    });
   
    this.missed = 0;

    phrase.innerHTML = '';

    hearts.forEach(heart => heart.setAttribute('src', '../images/liveHeart.png'));
  }
}