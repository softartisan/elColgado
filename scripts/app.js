
const puzzle = document.querySelector('#puzzle');
const guesess = document.querySelector('#guesses');
let game;


window.addEventListener('keypress', (e) =>{
    const guess = String.fromCharCode(e.charCode);
    game.makeGuess(guess);
    render();
});


const render = () => {
    puzzle.innerHTML = '';
    const puzzleArray = game.puzzle.split('');
    console.log(game.word.join(''));
    puzzleArray.forEach((letter) => {
        const span = document.createElement('span');
        span.textContent = letter;
        puzzle.appendChild(span);
    });
    guesses.textContent = game.statusMessage;

}

const startGame = async () => {
    const puzzle = await getPuzzleFetch('2');
    game = new Hangman(puzzle,5);
    render();
}


document.querySelector('#reset').addEventListener('click',startGame);

startGame();


// getPuzzleFetch('2').then((puzzle) => {
//     console.log(puzzle);
// }).catch((err) => {
//     console.log(err);
// });







// getLocationFetch().then((location) => {
//     console.log(location);
// }).catch((err) => {
//     console.log(err);
// });

// getCountryFetch('CL').then((countryName) =>{
//     console.log(countryName);
// }).catch((err) => {
//     console.log(err);
// });

// getCurrentCountry().then((country) => {
//     console.log(country.name);
// }).catch((error) => {
//     console.log(error);
// })



