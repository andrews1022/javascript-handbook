// The ternary operator, wWhich is also called the conditional operator, is an operator that basically allows us to write like an if...else statement all in one line.
// Steps:
// Write your condition
// Use the ? and then after what you want to happen if true (if block)
// Use the : and then after what you want to happen if false (else block)

const firstName = 'John';
const age = 16;

// Check John's age sif he is of legal drinking age
age >= 18
  ? console.log(`${firstName} can drink beer`)
  : console.log(`${firstName} can drink juice`);
// It's called ternary, because it has three operands, basically three parts that interact with the operator.

// Another way - assign values to variables using the ternary operator itself
const drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// Ternary operator is best for quick and easy if / else check

// ---------- EXAMPLE #1 ----------
// Change the value of the 'd' variable to see different results
const d = 16;
const color = d > 10 ? 'red' : 'blue'; // Try removing all of this and just have color = 'green'
console.log(color);
// The operators reads as:
// Is d greater than 10?
// If so, then color is assigned value of red
// Else, assigned the value of blue

/// ---------- EXAMPLE #2 ----------
function isUserValid(bool) {
  return bool;
}
let answer = isUserValid(true) ? 'You may enter!' : 'Access denied!';
// If we run ‘answer’, we get 'You may enter!' because isUserValid is true.
// If we changed this to say 'false', well in that case we'll get 'Access denied'

// ---------- EXAMPLE #3 ----------
// USING isUserValid ABOVE
let automatedAnswer = 'Your account # is ' + (isUserValid(false) ? 12345 : 'not available');
// If we run 'automatedAnswer' we get "Your account # is not available" because isUserValid is false
// If we set it to true, we get "Your account # is 12345"
// A ternary operator is really really good for these 'if else' where there is a check for a condition and there's two possible expressions that come out of it.

// ---------- EXAMPLE #4 ----------
// Turning this function into a ternary operator expression
function experiencePoints() {
  if (winBattle()) {
    return 10;
  } else {
    return 1;
  }
}
// Using ternary operator:
let experiencePoints = winBattle() ? 10 : 1;
// This reads as 'If winBattle returns true, output 10. Else, output 1.'

// ---------- EXAMPLE #5 ----------
const id = 100;
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// ---------- EXAMPLE #6 ----------
// Ternary operator can be great for toggling the display of a nav menu, for example
// HTML for reference:
<h2 class='heading headingMain'>Search Jobs</h2>;

const heading = document.querySelector('h2');

// Use ternary operator to check (can show/hide something on the page)
const classCheck = heading.classList.contains('open')
  ? heading.classList.remove('open')
  : heading.classList.add('open');
