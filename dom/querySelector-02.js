// ------------------------------ PART 2 ------------------------------

// HTML for reference:
<input type="text" class="form-control mr-2 text-input"></input>

// Grab the text input box
const input = document.querySelector('.text-input');

// Change it's style
input.style.border = '4px solid black';


// HTML for reference:
<input type="submit" class="btn btn-dark" value="Submit"></input>

// Grab the submit button:
const submitBtn = document.querySelector(`input[type='submit']`);

// Change the text displayed inside the button
submitBtn.value = 'Value Changed!';