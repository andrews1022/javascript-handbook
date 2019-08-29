// HTML for reference:
<div>
  <button class="btn btn-dark" id="button">Click Here!</button>

  <div class="grey-box" style='width:400px; height:200px; background:#f4f4f4;'></div>

  <div class="output"></div>
</div>

// Select the elements:
var button = document.querySelector('#button');
var greyBox = document.querySelector('.grey-box');
var output = document.querySelector('.output');

// function
function runEvent(event) {
  console.log('EVENT TYPE: ' + event.type); 
}

// ------- OTHER OPTIONS -------
console.log(event.target.value);

// Prevent default form behavior
event.preventDefault();

// Output the values into a DOM element
output.innerHTML = event.target.value;

// Track mouse movement
output.innerHTML = '<h3>MouseX: ' + event.offsetX + ' </h3><h3>MouseY: ' + event.offsetY + ' </h3>';

// Dynamically change background colour based on mouse movement
greyBox.style.backgroundColor = 'rgb('+event.offsetX+', '+event.offsetY+', 20)';
