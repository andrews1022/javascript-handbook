// Creating variables for elements
const button = document.getElementById('enter'); // Enter button
const input = document.getElementById('user-input'); // Text input field
const ul = document.getElementById('item-list'); // Selecting the ul element

// Event Listener for clicking on the Enter button
button.addEventListener('click', function enterListen() {
  // console.log('Click is working!') // testing purposes

  // Conditional if the length of the string is greater than 0
  if (input.value.length > 0) {
    // Create a variable for creating a new li on click
    const listItem = document.createElement('li');

    // Appending the child via text box input
    listItem.appendChild(document.createTextNode(input.value));

    // Append the created li item to the ul
    ul.appendChild(listItem);

    // Clear the box after the item is entered
    input.value = '';
  }

  // Appending the child
  // listItem.appendChild(document.createTextNode('Testing')); // Adding text of "testing" to the li
});

// Event Listener for hitting the enter key in the text input box
input.addEventListener('keypress', function keyListen(event) {
  // Conditional if the length of the string is greater than 0
  // And adding based on hitting enter key
  if (input.value.length > 0 && event.keyCode === 13) {
    // Create a variable for creating a new li on click
    const listItem = document.createElement('li');

    // Appending the child via text box input
    listItem.appendChild(document.createTextNode(input.value));

    // Append the created li item to the ul
    ul.appendChild(listItem);

    // Clear the box after the item is entered
    input.value = '';
  }
});
