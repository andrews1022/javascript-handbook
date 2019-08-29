// TERNARY OPERATOR (short hand if statement)
// Is used a lot to assign variables based on a condition
// The ternary operator is represented by the ? operator, and stands for 'then'
// The : operators represents 'else'
// Change the value of the 'd' variable to see different results
const d = 16;
const color = d > 10 ? 'red' : 'blue'; // try removing all of this and just have color = 'green'
console.log(color);

// The operators reads as
// Is d greater than 10?
// If so, then color is assigned value of red
// Else, assigned the value of blue


// ----------------------------------- MORE NOTES -----------------------------------
// Boils down to this:
condition ? expression 1 : expression 2;
// It says is this true or false?
// If it's true then provide this value (expr1).
// If it's false provide this value (expr2).


// ----------------------------------- EXAMPLE 1 -----------------------------------
function isUserValid(bool) {
	return bool;
}

let answer = isUserValid(true) ? "You may enter!" : "Access denied!";
// If we run ‘answer’, we get 'You may enter!' because isUserValid is true.
// Now if we changed this to say 'false', well in that case we'll get 'Access denied'


// ----------------------------------- EXAMPLE 2 -----------------------------------
// USING isUserValid ABOVE
let automatedAnswer =
	'Your account # is ' + (isUserValid(false) ? 12345 : 'not available');
// If we run 'automatedAnswer' we get "Your account # is not available" because isUserValid is false
// If we set it to true, we get "Your account # is 12345"

// A ternary operator is really really good for these 'if else' where there is a check for a condition and there's two possible expressions that come out of it.


// ----------------------------------- CHALLENGE -----------------------------------
// Turn this function into a ternary operator expression
function experiencePoints() {
	if (winBattle()) {
		return 10;
	} else {
		return 1;
	}
}
//  ||
//  V
let experiencePoints = winBattle() ? 10 : 1;