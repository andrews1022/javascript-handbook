// ------------------------------ PART 1 ------------------------------

// For a complete list of events, check out the MDN Docs: https://mzl.la/1JcBR22

// EXAMPLE #1 - A Simple Button Click
// Saving the button as a variable
let button = document.querySelector('.btn');

// Adding the event listener based on click the button
button.addEventListener('click', function () {
	console.log('Clicked!');
});

// Adding the event listener based on mouse enter (hovering over the button)
button.addEventListener('mouseenter', function () {
	console.log('Clicked!');
});

// Adding the event listener based on mouse enter (hovering over the button)
button.addEventListener('mouseleave', function () {
	console.log('Clicked!');
});


// ------------------------------ PART 2 ------------------------------

// FORM SUBMIT BUTTON
const button = document.querySelector('.btn');

// Let's use addEventListener
// This takes in two things: the event that we want. In this case 'click'
// The second is going to be a function that you want to run when this event happens
// Let's use an arrow function
// We need to include an event parameter, which is just 'e'
button.addEventListener('click', (event) => {
	// Since this a submit button for a form, we need to remove the default behavior:
	event.preventDefault();

	console.log('click'); // Notice it says 'click' in the console!

	// We can see which element that is being targeted
	// It will give us the element that the event is on
	console.log(e.target);

	// Get the class name:
	console.log(e.target.className);
});


// ------------------------------ PART 3 ------------------------------

// HTML Button for reference:
<button class="btn btn-dark" id="button">Click Here!</button>

// Method 1:
var button = document.querySelector('#button').addEventListener('click', function () {
	console.log(123);
});

// Method 2 - using a named function (ideal way)
var button = document.querySelector('#button').addEventListener('click', buttonClick);

function buttonClick(event) {
		// Add console log event, or whatever else here
		console.log(345);
}

// Copy and paste these into the function to see their effect
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