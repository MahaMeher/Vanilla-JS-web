// script.js

let randomNumber = Math.floor(Math.random() * 100) + 1;
let remainingAttempts = 6;

const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const submitGuess = document.getElementById('submitGuess');
const resetGame = document.getElementById('resetGame');

attemptsDisplay.textContent = remainingAttempts;

submitGuess.addEventListener('click', () => {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Please enter a valid number between 1 and 100.';
    message.style.color = 'red';
    return;
  }

  if (userGuess === randomNumber) {
    message.textContent = '🎉 Correct! You guessed it!';
    message.style.color = 'green';
    disableInput();
  } else {
    remainingAttempts--;
    attemptsDisplay.textContent = remainingAttempts;

    if (remainingAttempts === 0) {
      message.textContent = `😅 "No more tries! It was ${randomNumber}. Don't worry, you'll get it next time!"`;
      message.style.color = 'deepskyblue';
      disableInput();
    } else if (userGuess > randomNumber) {
      message.textContent = '📉 Too high! Try again.';
      message.style.color = 'orange';
    } else {
      message.textContent = '📈 Too low! Try again.';
      message.style.color = 'orange';
    }
  }

  guessInput.value = '';
  guessInput.focus();
});

resetGame.addEventListener('click', () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  remainingAttempts = 6;
  attemptsDisplay.textContent = remainingAttempts;
  guessInput.value = '';
  message.textContent = '';
  guessInput.disabled = false;
  submitGuess.disabled = false;
  guessInput.focus();
});

function disableInput() {
  guessInput.disabled = true;
  submitGuess.disabled = true;
}
