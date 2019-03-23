
const game = new Hangman('cat',2);
const h1Puzzle = document.querySelector('#puzzle');
const spanGuesses = document.querySelector('#spanGuesses')

h1Puzzle.textContent = game.getPuzzle();
spanGuesses.textContent = game.getStatus();

window.addEventListener('keypress', (e) =>{
    const guess = String.fromCharCode(e.charCode);
   
    game.makeGuess(guess);
    h1Puzzle.textContent = game.getPuzzle();
    spanGuesses.textContent = game.getStatus();

    game.calculateStatus();
});