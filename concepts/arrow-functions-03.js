// Converting the 4 functions below to arrow functions

// ----------------------------------- FUNCTION #1 -----------------------------------
// A named function with multiple parameters, in this case 'a' & 'b'
function sum(a, b) {
	return a + b;
}
// Convert Function #1 to an Arrow Function:
// The first step is to completely remove the function keyword
// Because with an arrow function, the function keyword is assumed
sum(a, b) {
	return a + b;
}
// Now weed need to assign this function to a variable fpr what we have leftover
// This will be the beginning of the syntax of our arrow function
// The reason for assigning it to a variable is because normal functions already create a variable of sum (in this case)
// But since we no longer have the function keyword, we need to create our own variable to store this function
let sumArrow = (a, b) {
	return a + b;
}
// The remaining step is to add in the arrow that denotes these are our parameters
let sumArrow = (a, b) => {
	return a + b;
}
// But we can reduce this code slightly more:
let sumArrow = (a, b) => a + b;
// This way, everything after the arrow is assumed to be returned

// So this:
let sumArrow = (a, b) => a + b;
// Is the same as this:
function sum(a, b) {
	return a + b;
}


// ----------------------------------- FUNCTION #2 -----------------------------------
// A named function with one parameter
function isPositive(number) {
	return number >= 0;
}
// Convert Function #2 to an Arrow Function:
let isPositiveArrow = (number) => number >= 0;
// But if we have just a single parameter, we can reduce it a tiny bit more:
let isPositiveArrow = number => number >= 0;
// We can remove the ( ) surrounding the parameter, in this case 'number'


// ----------------------------------- Function #3 -----------------------------------
// A named function with no parameters
function randomNumber() {
	return Math.random;
}
// Convert Function #3 to an Arrow Function:
let randomNumberArrow = () => {
	return Math.random;
}
// But this can be condensed down to this:
let randomNumberArrow = () => Math.random;

// ----------------------------------- Function #4 -----------------------------------
// An anonymous function, a function with no name
// Where arrow functions really shine, are anonymous functions like this one
document.addEventListener('click', function () {
	console.log('Clicked!');
})
// Convert Function #4 to an Arrow Function:
document.addEventListener('click', () => {
	console.log('Clicked!');
})
// But the above can be condensed down to this:
document.addEventListener('click', () => console.log('Clicked!'));