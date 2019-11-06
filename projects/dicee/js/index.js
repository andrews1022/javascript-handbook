/* -------------------------- WORKING METHOD #1 --------------------------
// Create random number between 1-6
let randonNumber1 = Math.floor(Math.random() * 6) + 1;
let randonNumber2 = Math.floor(Math.random() * 6) + 1;

// Change img to corresponding side as per randonNumber1
let leftDie = document.querySelector('.img1');
leftDie.setAttribute('src', `img/dice${randonNumber1}.png`);

// Change right side
let rightDie = document.querySelector('.img2');
rightDie.setAttribute('src', `img/dice${randonNumber2}.png`);

if (randonNumber1 > randonNumber2) {
  let heading = document.querySelector('h1');
  heading.textContent = 'Player One wins!';
} else if (randonNumber2 > randonNumber1) {
  let heading = document.querySelector('h1');
  heading.textContent = 'Player Two wins!';
} else {
  let heading = document.querySelector('h1');
  heading.textContent = `It's a draw! Try again!`;
}
*/


/* -------------------------- WORKING METHOD #2 --------------------------
// Grab elements
const leftDie = document.querySelector('.img1');
const rightDie = document.querySelector('.img2');
const heading = document.querySelector('h1');

// function to 'roll' dice
function dieRoll() {
  // Create random number between 1-6
  const randonNumber1 = Math.floor(Math.random() * 6) + 1;
  const randonNumber2 = Math.floor(Math.random() * 6) + 1;

  leftDie.setAttribute('src', `img/dice${randonNumber1}.png`);
  rightDie.setAttribute('src', `img/dice${randonNumber2}.png`);

  if (randonNumber1 > randonNumber2) {
    heading.textContent = 'Player One wins!';
  } else if (randonNumber2 > randonNumber1) {
    heading.textContent = 'Player Two wins!';
  } else {
    heading.textContent = `It's a draw! Try again!`;
  }
}

// Call the function
dieRoll();
*/


/* -------------------------- WORKING METHOD #3 --------------------------
// function to 'roll' dice
(function dieRoll() {
  // Create random number between 1-6
  let randonNumber1 = Math.floor(Math.random() * 6) + 1;
  let randonNumber2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector('.img1').setAttribute('src', `img/dice${randonNumber1}.png`);
  document.querySelector('.img2').setAttribute('src', `img/dice${randonNumber2}.png`);

  if (randonNumber1 > randonNumber2) {
    document.querySelector('h1').textContent = 'Player One wins!';
  } else if (randonNumber2 > randonNumber1) {
    document.querySelector('h1').textContent = 'Player Two wins!';
  } else {
    document.querySelector('h1').textContent = `It's a draw! Try again!`;
  }
})();
*/


// -------------------------- WORKING METHOD #4 --------------------------
(() => {
  // Create random number between 1-6
  const randonNumber1 = Math.floor(Math.random() * 6) + 1;
  const randonNumber2 = Math.floor(Math.random() * 6) + 1;

  // Set attributes
  document.querySelector('.img1').setAttribute('src', `img/dice${randonNumber1}.png`);
  document.querySelector('.img2').setAttribute('src', `img/dice${randonNumber2}.png`);

  // Change title content based on rolls
  if (randonNumber1 > randonNumber2) {
    document.querySelector('h1').textContent = 'Player One wins!';
  } else if (randonNumber2 > randonNumber1) {
    document.querySelector('h1').textContent = 'Player Two wins!';
  } else {
    document.querySelector('h1').textContent = `It's a draw! Try again!`;
  }
})();
