// ------------------------------ PART 2 ------------------------------

// ---------- FORM SUBMIT BUTTON ----------
// HTML Button for reference:
<button class='btn'>Click Here!</button>;

// Store the element in a variable called 'button'
const button = document.querySelector('.btn');

// Let's use 'addEventListener'
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
	console.log(event.target);

	// Get the class name:
	console.log(event.target.className);
});
