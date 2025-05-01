let Randnumber = parseInt(Math.random() * 10 + 1);

const submit = document.getElementById("subt");
const userInput = document.getElementById("guessField");

const guessSlot = document.getElementsByClassName("guesses")[0];
const remaining = document.getElementsByClassName("lastResult")[0];

const lowOrHi = document.getElementsByClassName("lowOrHi")[0];
const startOver = document.getElementsByClassName("resultParas")[0];

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a number between 1 and 10");
    } else if (guess < 1 || guess > 10) {
        alert("Please enter a number between 1 and 10");
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`!!! Game Over !!! The number was ${Randnumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === Randnumber) {
        displayMessage(`🎉 Congratulations! You guessed it right.`);
        endGame();
    } else if (guess < Randnumber) {
        displayMessage(`📉 Your guess is too low.`);
    } else if (guess > Randnumber) {
        displayMessage(`📈 Your guess is too high.`);
    }
}

function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `You have ${11 - numGuess} guesses left`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.setAttribute("disabled", "");
    submit.setAttribute("disabled", "");
    p.classList.add('button');
    p.innerHTML = `<button id="newGame">Start New Game</button>`;
    startOver.appendChild(p);
    playGame = false;

    const newGameButton = document.getElementById("newGame");
    newGameButton.addEventListener("click", function () {
        Randnumber = parseInt(Math.random() * 10 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `You have 10 guesses left`;
        lowOrHi.innerHTML = "";
        userInput.removeAttribute("disabled");
        submit.removeAttribute("disabled");
        startOver.removeChild(p);
        playGame = true;
    });
}
