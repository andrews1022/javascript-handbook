// The ternary operator is basically a shorthand if statement
// It is used a lot to assign variables based on a condition
// The ternary operator is represented by the ? operator, and stands for 'then'
// The : operators represents 'else'
// Best used for a quick A or B situation


// ---------- EXAMPLE #1 ----------
// Change the value of the 'd' variable to see different results
const d = 16;
const color = d > 10 ? 'red' : 'blue'; // Try removing all of this and just have color = 'green'
console.log(color);
// The operators reads as:
// Is d greater than 10?
// If so, then color is assigned value of red
// Else, assigned the value of blue


// ---------- EXAMPLE #2 ----------
// Using the ternary operator essentially boils down to this:
condition ? expression 1 : expression 2;
// It says is this true or false?
// If it's true, then provide this value (expression 1)
// If it's false, provide this value (expression 2)


/// ---------- EXAMPLE #3 ----------
function isUserValid(bool) {
	return bool;
}
let answer = isUserValid(true) ? "You may enter!" : "Access denied!";
// If we run ‘answer’, we get 'You may enter!' because isUserValid is true.
// If we changed this to say 'false', well in that case we'll get 'Access denied'


// ---------- EXAMPLE #4 ----------
// USING isUserValid ABOVE
let automatedAnswer = 'Your account # is ' + (isUserValid(false) ? 12345 : 'not available');
// If we run 'automatedAnswer' we get "Your account # is not available" because isUserValid is false
// If we set it to true, we get "Your account # is 12345"
// A ternary operator is really really good for these 'if else' where there is a check for a condition and there's two possible expressions that come out of it.


// ---------- EXAMPLE #5 ----------
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


// ---------- EXAMPLE #6 ----------
const id = 100;
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');