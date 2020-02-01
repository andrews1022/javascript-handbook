// HTML for reference:
<form class="form-inline mb-3" id="form">
  <input type="text" class="form-control mr-2 text-input" id="text-input" />
  <select class="form-control mr-2" id="select">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
</form>

// Select the elements:
var itemInput = document.querySelector('#text-input');
var form = document.querySelector('#form');
var select = document.querySelector('#select');

// Show the event type
function runEvent(event) {
  console.log('EVENT TYPE: ' + event.type); 

  // Prevent default form behavior
  event.preventDefault();
}

// List of events
itemInput.addEventListener('keydown', runEvent);  // pressing the key or holding key down
itemInput.addEventListener('keyup', runEvent);    // releasing the key

itemInput.addEventListener('cut', runEvent);      // triggers when text is cut from input field
itemInput.addEventListener('paste', runEvent);    // triggers when text is pasted from input field

select.addEventListener('change', runEvent);      // triggers when something is changed/picked
select.addEventListener('input', runEvent);       // will run off anything done to an input
form.addEventListener('submit', runEvent);        // will trigger once form is submitted