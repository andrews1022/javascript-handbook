// Get clear button
const button = document.querySelector('#myButton');

button.addEventListener('click', runEvent); // Click
button.addEventListener('dblclick', runEvent); // Double click
button.addEventListener('mousedown', runEvent); // Mouse down
button.addEventListener('mouseup', runEvent); // Mouse up
button.addEventListener('mouseenter', runEvent); // Mouse enter
button.addEventListener('mouseleave', runEvent); // Mouse leave
button.addEventListener('mouseover', runEvent); // Mouse over
button.addEventListener('mouseout', runEvent); // Mouse out

// *** NOTE ***
// mouseover and mouseout will fire off when you go into another element that's inside of that element
// mouseleave & mouseenter is only going to fire on the initial parent element.

// Mouse move
button.addEventListener('mousemove', runEvent); // Useful for games or highly interactive websites

// HTML for reference
<input type='text' class='form-control mr-2 text-input' id='text-input' />;

// Click inside text input
itemInput.addEventListener('focus', runEvent);
// Click outside text input
itemInput.addEventListener('blur', runEvent);
