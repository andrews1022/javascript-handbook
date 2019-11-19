// --------------------------------- INPUT DOUBLER ---------------------------------
// Grab elements
const valueBox = document.querySelector('#value');
const doubleBtn = document.querySelector('#double');

// Set default value to 1
const defaultValue = 1;

// Add event listener
doubleBtn.addEventListener('click', () => {
  // Check to see if input is not NotANumber
  if (!isNaN(valueBox.value)) {
    // Double if it is a number
    valueBox.value *= 2;
  } else {
    // Set value to defaultValue (1) instead if it is not a number
    valueBox.value = defaultValue;
  }
});
