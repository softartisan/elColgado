


class Hangman {
    constructor(word = [], remainingGuesses) {
        this.word = word.toLowerCase().split('');
        this.guessedLetters = [];
        this.remainingGuesses = remainingGuesses;
        this.status = 'playing';
    }
    makeGuess(guess) {
        if (!this.status === 'playing')
            return;
        guess = guess.toLowerCase();
        if (this.word.includes(guess) && !this.guessedLetters.includes(guess)) {
            this.guessedLetters.push(guess);
        }
        else {
            this.remainingGuesses--;
        }
        this.calculateStatus();
    }
    get puzzle() {
        let text = '';
        this.word.forEach((letter) => {
            text += this.guessedLetters.includes(letter) || letter === ' ' ? letter : '_';
            text += ' ';
        });
        return text;
    }
    get statusMessage() {
        if (this.status === 'playing') return `Jugando -> Intentos restantes: ${this.remainingGuesses}`;
        else if (this.status === 'failed') return `Buen intento! la palabra era "${this.word.join('')}"`;
        else if (this.status === 'finished') return 'Buen trabajo! haz acertado a la palabra';
    }
    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter));
        if (this.remainingGuesses <= 0)
            this.status = 'failed';
        else if (finished)
            this.status = 'finished';
        else
            this.status = 'playing';
    }
}








