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


// ------------------------------ PART 2 ------------------------------

// HTML for text input field:
<input type="text" class="form-control mr-2 text-input"></input>

// Grab the text input box
const input = document.querySelector('.text-input');

// Change it's style
input.style.border = '4px solid black';


// HTML for submit button:
<input type="submit" class="btn btn-dark" value="Submit"></input>

// Grab the submit button:
const submitBtn = document.querySelector(`input[type='submit']`);

// Change the text displayed inside the button
submitBtn.value = 'Value Changed!';


// ------------------------------ PART 3 ------------------------------

// HTML FOR REFERENCE:
<body>
  <h1 id="header">The Dom is cool for many reasons</h1>
  <ul class="list">
    <li>You can see how pages are made</li>
    <li>You can manipulate it</li>
  </ul>
</body>

// You can use CSS selectors to grab your elements:
document.querySelector('#header');
// NOTE ABOUT querySelector: if you are selecting by class and there are multiple elements with the same class name, it will grab just the first one it finds
// In this case, use querySelectorAll

// Another example using .children to grab the child elements of whatever you are selecting:
document.querySelector('.list').children;

// From here, you can grab the first one, and see what content it has:
document.querySelector('.list').children[0].innerHTML;

//And you can modify this, like so:
document.querySelector('.list').children[0].innerHTML = "This HTML content has been modified!";