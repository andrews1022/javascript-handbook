// ------------------------------ PART 3 ------------------------------

// HTML Button for reference:
<button class='btn btn-dark' id='button'>
  Click Here!
</button>;

// Method 1:
var button = document.querySelector('#button').addEventListener('click', function () {
  console.log(123);
});

// Method 2 - using a named function (ideal way)
var button = document.querySelector('#button').addEventListener('click', buttonClick);

function buttonClick(event) {
  // Add console log event, or whatever else here
  console.log(345);

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
}
