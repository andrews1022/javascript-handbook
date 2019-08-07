// Basic variables
const theName = 'Andrew';
const theAge = 26;

// Concatenation - older method
console.log('My name is ' + theName + ' and I am ' + theAge);

// Concatenation - newer method using Template Strings (aka template literals)
// You use backticks ` ` (beside the 1 key), and this makes it a template string
// Wherever you use the variable, place it inside ${ }
console.log(`My name is ${theName} and I am ${theAge} years old.`);

// You could even put the entire template string into a variable, then print it out as seen below
const greeting = `My name is ${theName} and I am ${theAge} years old.`;
console.log(greeting);