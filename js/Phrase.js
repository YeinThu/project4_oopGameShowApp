/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    // Split Phrase Into Letters & Words
    const splitPhrase = this.phrase.split('');

    // Display Phrase
    const ul = document.querySelector('#phrase ul');
    let html = '';

    splitPhrase.forEach(character => {
      if (character === ' ') {
        html += `
          <li class="space"> </li>
        `;
      } 
      else {
        html += `
          <li class="hide letter ${character}">${character}</li>
        `;
      }
    });

    ul.innerHTML = html;
  }

  checkLetter(letter, button) {
    if (this.phrase.indexOf(letter) === -1) {
      button.classList.add('wrong');
      return false;
    }
    else {
      button.classList.add('chosen');
      return true;
    }
  }

  showMatchedLetter(letter) {
    const phraseLetters = document.querySelectorAll('.hide');
    
    phraseLetters.forEach(phraseLetter => {
      if (phraseLetter.textContent === letter) {
        phraseLetter.classList.replace('hide', 'show');
        phraseLetter.classList.add('magnify');
      }
    })
  }
}