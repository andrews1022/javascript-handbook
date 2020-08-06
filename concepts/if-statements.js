// If statements are used to evaluate some kind of condition and then do something based on that condition or something else if that condition isn't met

// ---------- EXAMPLE #1 ----------
if (true) {
  // Do something here...
} else {
  // Do something else here...
}

// ---------- EXAMPLE #2 ----------
// A simple if, if else, else statement:
const a = 5;

if (a === 10) {
  console.log('a is 10');
} else if (a > 10) {
  console.log('a is greater than 10');
} else {
  console.log('a is less than 10');
}
// Using == will not match the data types, just the value. Even if we change a = '10', this will still be true
// Using ===, try with 10 as '10', and it will not print. Because === also matches the data types

// ---------- EXAMPLE #3 ----------
// Using if and else if to check for multiple conditions
const myFavColor = 'yellow';

if (myFavColor === 'red') {
  console.log('The color is red');
} else if (myFavColor === 'blue') {
  console.log('The color is blue');
} else {
  console.log('The color is NOT red or blue');
}
