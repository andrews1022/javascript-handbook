// Replace an <h5> element with an <h2>

// Create and element
const newHeading = document.createElement('h2');

// Add an id
newHeading.id = 'task-title';

// Create a new text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.querySelector('h5');

// Get parent div
const div = document.querySelector('.parent-div');

// Replace the elements
cardAction.replaceChild(newHeading, oldHeading);
