// Covered in Part 3:
// Different events and how to attach them to DOM elements with addEventListener();

// Grab the 'Click Here!' button
// Method one:
var button = document.querySelector('#button').addEventListener('click', function () {
  console.log(123);
});

// Method two - using a named function (ideal way)
var button = document.querySelector('#button').addEventListener('click', buttonClick);

function buttonClick(event) {
  console.log(345);
}

// Change Item Lister heading text
document.querySelector('#header-title').textContent = 'Text Changed!';

// Change background colour on square box
document.querySelector('#main').style.backgroundColor = 'lightgreen';

// We see a whole list of properties
console.log(event);

// Logs the actual element
console.log(event.target);
// Get the ID
console.log(event.target.id);
// Get the class
console.log(event.target.className);
// Get the class list
console.log(event.target.classList);

// Inject id as text into a div
var output = document.querySelector('.output');
output.innerHTML = '<h3>' + event.target.id + '</h3>';

// Logs the event type
console.log(event.type);

// Get the position of the mouse:
// 'client' is from the browser/window
console.log(event.clientX);
console.log(event.clientY);

// Get the position of the mouse on the element itself
console.log(event.offsetX);
console.log(event.offsetY);

// Check if key is being held
console.log(event.altKey);
console.log(event.ctrlKey);
console.log(event.shiftKey);

// ---------- MOUSE EVENTS ----------
var button = document.querySelector('#button');
var greyBox = document.querySelector('.grey-box');
var output = document.querySelector('.output');

// ----- Button mouse events -----
// Single click
button.addEventListener('click', runEvent);

// Double click
button.addEventListener('dblclick', runEvent);

// Mouse down
button.addEventListener('mousedown', runEvent);

// Mouse up
button.addEventListener('mouseup', runEvent);


// ----- Grey box mouse events -----
// Mouse enter
greyBox.addEventListener('mouseenter', runEvent);

// Mouse leave
greyBox.addEventListener('mouseleave', runEvent);

// Mouse over
greyBox.addEventListener('mouseover', runEvent);

// Mouse out
greyBox.addEventListener('mouseout', runEvent);

// Difference between mouseenter and mouseover?
// mouseenter is for the parent element itself, and mouseover will be for any inner elements
// same for mouseleave and mouseout. mouseout applies to the inner elements, and mouseleave is for the parent element

// Mouse move
greyBox.addEventListener('mousemove', runEvent);


function runEvent(event) {
  console.log('EVENT TYPE: ' + event.type);

  console.log(event.target.value);

  // Prevent default form behavior
  event.preventDefault();

  output.innerHTML = event.target.value;

  // Track mouse movement
  output.innerHTML = '<h3>MouseX: ' + event.offsetX + ' </h3><h3>MouseY: ' + event.offsetY + ' </h3>';

  // Dynamically change colour based on mousemovement
  greyBox.style.backgroundColor = 'rgb('+event.offsetX+', '+event.offsetY+', 20)';
}


// ---------- Keyboard events EVENTS ----------
var itemInput = document.querySelector('#text-input');
var form = document.querySelector('#form');
var select = document.querySelector('#select');

itemInput.addEventListener('keydown', runEvent); // pressing the key/holding key down
itemInput.addEventListener('keyup', runEvent); // releasing the key

itemInput.addEventListener('focus', runEvent); // click inside text input
itemInput.addEventListener('blur', runEvent); // click outside text input

itemInput.addEventListener('cut', runEvent); // triggers when text is cut from input field
itemInput.addEventListener('paste', runEvent); // triggers when text is pasted from input field

itemInput.addEventListener('input', runEvent); // will run off anything done to an input

select.addEventListener('change', runEvent); // triggers when something is changed/picked
select.addEventListener('input', runEvent); // will run off anything done to an input

form.addEventListener('submit', runEvent); // will trigger once form is submitted