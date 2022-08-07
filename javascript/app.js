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
    document.getElementById('overlay').style.display = 'none';
});

// return a random phrase from an array 
function getRandomPhraseAsArray(arr) {
    const randomNumber = arr[Math.floor( Math.random() * arr.length )];
    return randomNumber.split('');
}

let randomPhrase = getRandomPhraseAsArray(phrases);

// adds letters of a string to the display
function addPhraseToDisplay(arr) {
    const letterAdded = document.querySelector('#phrase ul');
    for ( let i = 0; i < arr.length; i++ ) {
        const listItem = document.createElement('li');   
        listItem.textContent = arr[i];
        letterAdded.append(listItem); 
        
        if (arr[i] !== ' ') {
            listItem.classList.add('letter');
        } else {
            listItem.classList.add('space');
        }
    }
}

addPhraseToDisplay(randomPhrase);

// check if a letter is in the phrase
function checkLetter(button) {
    // let allListItems = document.getElementsByClassName('letter');
    let allListItems = document.querySelectorAll('li');
    let match = null;

    for ( i = 0; i < allListItems.length; i++ ) {
        if ( button === allListItems[i] ) {
            allListItems[i].classList.add('show');
            match = button.textContent;
            return match;
        } else {
            return null;
        }
    }
}

// listens for the onscreen keyboard to be clicked
qwerty.addEventListener('click', (event) => {
    let button = event.target;

    if ( event.target && event.target.className !== 'chosen') {
        button.classList.add('chosen');
        button = button.disabled;
    }
});

const letterFound = checkLetter(button);
