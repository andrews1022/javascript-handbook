// ---------- EXAMPLE #1 ----------
// HTML for reference:
<h1>Shopping List</h1>;

// Store it in a variable called h1
let h1 = document.querySelector('h1');

// Add class naming using classList
h1.classList.add('coolTitle');

// Remove class naming using classList
h1.classList.remove('coolTitle');

// Toggle class naming using classList
h1.classList.toggle('coolTitle');

// ---------- EXAMPLE #2 ----------
// *NOTE: classList will return an array of class names if there are multiple
<div class='first second third fourth'></div>;

const div = document.querySelector('div');

console.log(div.classList);

// You can also use ternary operator (or if/else) to check if the element has a certain class name
const classCheck = div.classList.contains('first')
  ? div.classList.remove('first')
  : div.classList.add('first');

return classCheck;
