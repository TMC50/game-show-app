const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
let missedGuesses = 0;


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
    let allListItems = document.querySelectorAll('.letter');
    let match = null;

    for ( let i = 0; i < allListItems.length; i++ ) {
        if ( button.textContent === allListItems[i].textContent ) {
            allListItems[i].classList.add('show');
            match = button.textContent;
        } 
    }
    return match;
}

// listens for the onscreen keyboard to be clicked
qwerty.addEventListener('click', (event) => {
    let button = event.target;

    if (button.tagName === 'BUTTON') {
        button.disabled = true;
        if ( event.target && event.target.className !== 'chosen') {
            button.classList.add('chosen');
        }

        const letterFound = checkLetter(button);
        
        if (letterFound === null) {
            // replace a liveHeart to lostHeart image, and increment the missed counter by 1
            let tries = document.querySelectorAll('img');
            tries[missedGuesses].src = 'images/lostHeart.png';
            missedGuesses ++;
        }
    }
});

// check if the game has been won or lost
function checkWin() {
    const liLetter = document.getElementsByClassName('letter');
    const liShow = document.getElementsByClassName('show');
    let startOverlay = document.getElementById('overlay')
    // Unsure if the two lines (88 & 89) below are necessary, so I commented them out for now
    // let winOverlay = document.querySelector('.win');
    // let loseOverlay = document.querySelector('.lose');

    if (liLetter.length === liShow.length) {
        startOverlay.classList.add('win');
        startOverlay.textContent = 'Congratulations! You won!';
        startOverlay.style.display = 'flex';
    } 
    
    else if (missedGuesses > 4) {
        startOverlay.classList.add('lose');
        startOverlay.textContent = 'Sorry! You lost!';
        startOverlay.style.display = 'flex';
    }
}

checkWin();
