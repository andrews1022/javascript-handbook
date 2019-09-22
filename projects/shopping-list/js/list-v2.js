// Creating variables for elements
const button = document.getElementById('enter'); // Enter button
const input = document.getElementById('user-input'); // Text input field
const ul = document.getElementById('item-list'); // Selecting the ul element

// Reusable function for finding length of entered value
function inputLength() {
  return input.value.length;
}

// Reuseable function for creating list element
function createListElement() {
  // Create a variable for creating a new li on click
  const listItem = document.createElement('li');

  // Appending the child via text box input
  listItem.appendChild(document.createTextNode(input.value));

  // Append the created li item to the ul
  ul.appendChild(listItem);

  // Clear the box after the item is entered
  input.value = '';
}

// Event Listener for clicking on the Enter button
button.addEventListener('click', function checkStringLengthClick() {
  // Check if the length of the string is greater than 0
  if (inputLength() > 0) {
    createListElement(); // Calling the function to create the list item
  }
});

// Event Listener for hitting the enter key in the text input box
input.addEventListener('keypress', function checkStringLengthKey(event) {
  // Conditional if the length of the string is greater than 0
  // And adding based on hitting enter key based on keyCode value
  // REMINDER: using event.which also works
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement(); // Calling the function to create the list item
  }
});
