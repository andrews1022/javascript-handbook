// ------------------------------ PART 1 ------------------------------

// querySelector for this heading
<h1 class="heading" id='header'>Shopping List</h1>

// querySelector by tag
document.querySelector('h1');

// querySelector by class
document.querySelector('.heading');

// querySelector by ID
document.querySelector('#header');

// Select a button on the page with a class of button
// Caching the button as a variable 'btn'
let btn = document.querySelector('.button');

// *** NOTE ***
// When using querySelector, if select something which could possible find more than 1 result, just the FIRST item will be selected