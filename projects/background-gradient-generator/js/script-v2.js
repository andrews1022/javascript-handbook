const css = document.querySelector('h3');
const colorOne = document.querySelector('.color1');
const colorTwo = document.querySelector('.color2');
const body = document.querySelector('.gradient');

// Function to call when selecting colors from picker
function setGradient() {
  body.style.background = `linear-gradient(to right, ${colorOne.value}, ${colorTwo.value})`;

  // Inject background color
  css.textContent = `${body.style.background};`;
}

// Add event listener for first colour picker
colorOne.addEventListener('input', setGradient);

// Add event listener for second colour picker
colorTwo.addEventListener('input', setGradient);
