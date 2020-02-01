function myFunction(event) {
  let val;

  // Set val to the event object - see what happened
  val = event;
  console.log(val);

  // Event target element
  val = event.target;
  console.log(val);

  // Get target element id
  val = event.target.id;
  console.log(val);

  // Get class name
  val = event.target.className;
  console.log(val);

  // Get class list
  val = event.target.classList;
  console.log(val);

  // Change inner text
  event.target.innerText = 'Changed on click!';
  console.log(val);

  // Get event type
  val = event.type;
  console.log(val);

  // Get timestamp
  val = event.timeStamp;
  console.log(val);

  // Get coordinates relative to the window
  val = event.clientY;
  console.log(val);
  val = event.clientX;
  console.log(val);

  // Get coordinates relative to the element itself
  val = event.offsetY;
  console.log(val);
  val = event.offsetX;
  console.log(val);
}