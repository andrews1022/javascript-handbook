// FORM SCRIPT
// Adding a user

// Grab all the elements fist
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const message = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Create a function called onSubmit
function onSubmit(event) {
  // Prevent the default behavior
  event.preventDefault();

  // Making sure both fields are filled out
  if (nameInput.value === '' || emailInput === '') {
    // here we saying if the nameinput or emailinput is equal to an empty string, display a message

    message.classList.add('error'); // Adding the css stylings of class 'error'
    message.innerHTML = 'Please enter all fields!'; // Displaying the error message

    // Have this message go away after 1.5 seconds
    // We do this by using the 'set' function
    setTimeout(() => message.remove(), 1500);
    // Here we used an arrow function with no parameters, so just the arrow
    // Enter in the variable name (in this case, message)
    // Then .remove which will remove it from the DOM
    // Then a second parameter, which is the amount in miliseconds before it goes away
  } else {
    // If successful, then we want to add it as a list item to into the ul with the id of 'users'

    // Create that element first:
    const li = document.createElement('li');

    // Add a text node with the input values
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    // Append the li to the ul
    userList.appendChild(li);

    // Clear the input fields
    nameInput.value = '';
    emailInput.value = '';

    // But when you refresh, the li items go away
    // We need to connect the backend, using AJAX, NodeJS, etc.
  }
}

// Listen for a submit event on the form
// Since it's on a form element we can use submit
myForm.addEventListener('submit', onSubmit);
