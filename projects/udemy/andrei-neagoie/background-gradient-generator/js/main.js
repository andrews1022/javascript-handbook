const header = document.querySelector('h3');
const colorOne = document.querySelector('.color1');
const colorTwo = document.querySelector('.color2');
const body = document.querySelector('.gradient');
const random = document.querySelector('.random');

// Function to call when selecting colors from picker
function setGradient() {
  body.style.background = `linear-gradient(to right, ${colorOne.value}, ${colorTwo.value})`;

  // Inject background color
  header.textContent = `${body.style.background};`;
}

// Add event listener for first colour picker
colorOne.addEventListener('input', setGradient);

// Add event listener for second colour picker
colorTwo.addEventListener('input', setGradient);

// On page load, display gradient info
window.onload = () => {
  setGradient();
};

// Function to generate random colors and set background gradient to them
function setRandomColors() {
  // eslint-disable-next-line prettier/prettier
  const randomColorOne = `#${Math.floor(Math.random() * 16777216).toString(16)}`;
  // eslint-disable-next-line prettier/prettier
  const randomColorTwo = `#${Math.floor(Math.random() * 16777216).toString(16)}`;

  colorOne.value = randomColorOne;
  colorTwo.value = randomColorTwo;

  setGradient();
}

// Call the function when the random colors button is clicked
random.addEventListener('click', setRandomColors);
