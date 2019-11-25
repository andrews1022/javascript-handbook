/* 
GAME RULES:
- The player must guess a number between a min and max value
- The player gets a certain amount of guesses
- Notify the player of guesses remaining
- Notify the player of the correct answer if they lose
- Let the player choose to play again
*/

// Game values
const min = 1;
const max = 10;
const winningNum = getRandomNumber(min, max);
let guessesLeft = 3;

// UI Element Variables
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// Assign UI min and max values
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener - use event delegation
game.addEventListener('mousedown', event => {
  if (event.target.className === 'play-again') {
    // Reload the page
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', () => {
  const guess = parseInt(guessInput.value);

  // Validate input:
  // - Check if blank
  // - Check if value is in the range stated
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'blue');
  }

  // Check if won
  if (guess === winningNum) {
    // Game over - player won
    gameOver(true, `${winningNum} is correct! You won!!`);
  } else {
    // Wrong number - minus 1 from guesses left
    guessesLeft -= 1;

    // Check to see if there are any guess left
    if (guessesLeft === 0) {
      // Game is over - they lost
      gameOver(false, `Game over, you lost. The correct number was ${winningNum}. Try again?`);
    } else {
      // Change border colour
      guessInput.style.borderColor = 'red';

      // Clear the input
      guessInput.value = '';

      // Game continues - answer is wrong
      setMessage(`${guess} is not correct. You have ${guessesLeft} remaining. Try again!`, 'red');
    }
  }
});

// Getting winning number (randomly generated)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set message function
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

// Game over function
function gameOver(won, msg) {
  // Border color conditional
  let color;
  won === true ? (color = 'green') : (color = 'red');

  // Disable input
  guessInput.disabled = true;

  // Change border colour
  guessInput.style.borderColor = color;

  // Set text colour
  message.style.color = color;

  // Set winning message
  setMessage(msg);

  // Play again?
  guessBtn.value = 'Play Again?';

  // Add new class for event listener
  guessBtn.className += 'play-again';
}