// Variable for input field
const input = document.querySelector('#lbsInput');

// Variables for card
const grams = document.querySelector('#gramsOutput');
const kilo = document.querySelector('#kgOutput');
const ounce = document.querySelector('#ozOutput');

// Select the output container and hide it by default
const output = document.querySelector('#output');
output.style.visibility = 'hidden';

// Listen for event type input
input.addEventListener('input', () => {
  // Set visibility of the card/output container back to visible
  output.style.visibility = 'visible';

  // Conversion
  grams.innerHTML = Number(input.value * 453.592);
  kilo.innerHTML = Number(input.value / 2.205);
  ounce.innerHTML = Number(input.value * 16);
});
