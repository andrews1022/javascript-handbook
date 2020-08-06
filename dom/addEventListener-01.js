// ------------------------------ PART 1 ------------------------------

// For a complete list of events, check out the MDN Docs: https://developer.mozilla.org/en-US/docs/Web/Events

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
