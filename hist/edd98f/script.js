const MAX_RADIUS = 50;
// Select elements
const rectangle = document.getElementById('rectangle');
const guessBtn = document.getElementById('guess-btn');
const resultText = document.getElementById('result');
const radiusInput = document.getElementById('radius-input');

const STATE_IN_GAME = "IN_GAME";
const STATE_FINISHED = "FINISHED";

let state = STATE_IN_GAME

// Generate a random radius between 0 and 100
let randomRadius = Math.floor(Math.random() * MAX_RADIUS);

// Apply the random radius to the rectangle
rectangle.style.borderRadius = randomRadius + 'px';

// Add event listener to the guess button
guessBtn.addEventListener('click', () => {
    if (state == STATE_IN_GAME) {
        const userGuess = parseInt(radiusInput.value);

        // Check if the input is a valid number
        if (isNaN(userGuess) || userGuess < 0 || userGuess > MAX_RADIUS) {
            resultText.textContent = "Please enter a number between 0 and 100!";
            resultText.style.color = "red";
            return;
        }

        // Compare the guess with the random radius
        if (Math.abs(userGuess - randomRadius) < 3) {
            resultText.textContent = `Correct! The radius is ${randomRadius}px.`;
            resultText.style.color = "green";
        } else {
            resultText.textContent = `Nope, the answer is ${randomRadius}px.`;
            resultText.style.color = "red";
        }

        guessBtn.textContent = "New";
        guessBtn.style.backgroundColor = "orange";
        state = STATE_FINISHED;
    } else {
        resetGame();
        state = STATE_IN_GAME;
    }

});


// Function to reset the game
function resetGame() {
    randomRadius = Math.floor(Math.random() * MAX_RADIUS);
    rectangle.style.borderRadius = randomRadius + 'px';
    resultText.textContent = "";
    radiusInput.value = "50";
    guessBtn.textContent = "Guess";
    guessBtn.style.backgroundColor = "green";
}
