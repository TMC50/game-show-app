const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const missedGuesses = 0;

// five array strings to be used in the guessing game
const phrases = [
    'i love code',
    'learn to fly',
    'the earth is round',
    'candy is life',
    'lasagna is amazing'
];

// listens for the start game button to be selected
startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
});

// return a random phrase from an array 
function getRandomPhraseAsArray(arr) {
    // let randomNumber = Math.floor( Math.random() * arr.length ) + 1;
    let randomNumber = arr.length;
    let splitPhrase = randomNumber.split();
    return splitPhrase;
}

getRandomPhraseAsArray(phrases);

