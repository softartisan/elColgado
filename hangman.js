


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
    this.calculateStatus();
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
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter));
    
    if(this.remainingGuesses <= 0) this.status = 'failed';
    else if(finished) this.status = 'finished';
    else this.status = 'playing';
}


