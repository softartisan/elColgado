


const Hangman = function (word = [],remainingGuesses) {
    this.word =  word.toLowerCase().split('');
    this.guessedLetters = [];
    this.remainingGuesses = remainingGuesses;
    this.status = 'playing';
}


Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase();
    if(this.word.includes(guess) && !this.guessedLetters.includes(guess)) {
        this.guessedLetters.push(guess);
    }
    else{
        this.remainingGuesses--;
    }
}

Hangman.prototype.getPuzzle = function () {
   let text = '';
   this.word.forEach((letter) => {
       text += this.guessedLetters.includes(letter) || letter === ' ' ? letter : '_';
       text += ' ';
   });
   return text;
}
Hangman.prototype.calculateStatus = function () {
    if(this.remainingGuesses <= 0) this.status = 'failed';
    else if(this.guessedLetters.length === this.word.length) this.status = 'finished';
    else this.status = 'playing';
}


