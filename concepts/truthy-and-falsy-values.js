// Truthy and falsy values.
// In JavaScript, a falsy value is a value that is considered false when evaluated in an if/else statement condition.
// And the values that are falsy in JavaScript are:
undefined
null
0
'' // empty string
NaN

// So all of these five different values here will be converted to false when evaluated in a true/false condition.
// So, that's why we call them falsy.
// They are not exactly false, but they will turn out to be false when evaluated in a if/else condition.

// Now we also have truthy values, and of course the truthy values are all the values that are considered true when evaluated in an if/else statement condition.
// Basically, it's all the values that are not falsy.

// Example
var height;

if (height) { // This is converted to false
  console.log('Variable is defined');
} else {
  console.log('Variable has NOT been defined');
}

// Why are we getting 'Variable has NOT been defined'?
// Well, we declared the variable here as height, but we didn't define it.
// So you already know that it's now undefined.
// And we also know undefined is a falsy value
// So therefore, we entered the else block, which will then print that the variable hasn't been defined yet.
// This is a very handy way of testing if a variable has actually been defined or not.

// But what about a height of 0? This falsy, so we will also get 'Variable has NOT been defined'
// Write it like so, using the || OR operator:
height = 23;
if (height || height === 0) { // Again, only of these needs to be true
  console.log('Variable is defined');
} else {
  console.log('Variable has NOT been defined');
}
