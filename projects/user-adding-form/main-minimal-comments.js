// FORM SCRIPT

// Grab all the elements fist
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const message = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for a submit event on the form
myForm.addEventListener('submit', onSubmit);

// Create a function called onSubmit
function onSubmit(e) {

	// Prevent the default behavior
	e.preventDefault();

	// Making sure both fields are filled out
	if (nameInput.value === '' || emailInput === '') {

		message.classList.add('error'); // Adding the css stylings of class 'error'
		message.innerHTML = 'Please enter all fields!'; // Displaying the error message

		// Have this message go away after 1.5 seconds
		setTimeout(() => message.remove(), 1500);

	} else {
		// If successful, then we want to add it as a list item to into the ul with the id of 'users'

		// Create that element first:
		const li = document.createElement('li');

		// Add a text node with the input values
		li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

		// Append the li to the ul
		userList.appendChild(li);

		// Clear the input fields
		nameInput.value = '';
		emailInput.value = '';
	}
}