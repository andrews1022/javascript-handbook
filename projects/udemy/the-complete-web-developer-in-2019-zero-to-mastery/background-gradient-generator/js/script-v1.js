const css = document.querySelector('h3');
const colorOne = document.querySelector('.color1');
const colorTwo = document.querySelector('.color2');
const body = document.querySelector('.gradient');

// For HTML inputs, there is a great event listener called, input

// addEventListener for first colour picker
colorOne.addEventListener('input', function setColorOne() {
  body.style.background = `linear-gradient(to right, ${colorOne.value}, ${colorTwo.value})`;
});

// addEventListener for second colour picker
colorTwo.addEventListener('input', function setColorTwo() {
  body.style.background = `linear-gradient(to right, ${colorOne.value}, ${colorTwo.value})`;
});
