// Creating variables for elements
const button = document.querySelector('.btn');
const input = document.querySelector('.input');
const ul = document.querySelector('.list');

// Creating variable for list items
const items = document.querySelectorAll('.list-item');

// Function to toggle strikethrough styling
items.forEach(
  item =>
    (item.onclick = function() {
      item.classList.toggle('done');
    })
);

// Reuseable function for creating list element
function createListElement() {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = '';
}

// Function to create a list element if the inputted string length is greater than 0 after clicking button
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

// Function to create a list element if the inputted string length is greater than 0 after hitting enter button
function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

// Function calls
button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);
