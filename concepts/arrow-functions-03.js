// ------------------------------ PART 3 ------------------------------

// A named function with multiple parameters, in this case 'a' & 'b'
var sum = function sum(a, b) {
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
let sum = (a, b) {
	return a + b;
}

// The remaining step is to add in the arrow that denotes these are our parameters
let sum = (a, b) => {
	return a + b;
}

// But we can reduce this code slightly more:
let sum = (a, b) => a + b;
// This way, everything after the arrow is assumed to be returned

// So this:
let sum = (a, b) => a + b;

// Is the same as this:
var sum = function sum(a, b) {
  return a + b;
}