// The new spread operator is a very convenient way to expand elements of an array in places like arguments and function calls

function addFourAges(a, b, c, d) {
  return a + b + c + d;
}
var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// Now imagine that we had these four numbers in an array instead of, for example, four different variables.
// How would we pass that entire array into that function?

// ES5 Way
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);
// Reminder: what the apply method does is to receive an array, and it calls the function that the apply method is used on by using the elements of the array as the arguments

// ES6 Way
const sum3 = addFourAges(...ages);
console.log(sum3);
// What this operator here does is it expands the age array into its components, so in this case 18, 30, 12, and 21
// This the same as written above: var sum1 = addFourAges(18, 30, 12, 21);


// Spread operator to join arrays
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

// To join them
const bigFamily = [...familySmith, 'Dave', ...familyMiller]; // We can also include something inbetween the spread operators if we wish
console.log(bigFamily);


// On a NodeList
const heading = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

// Use spread operator to put them into the same structure
const all = [heading, ...boxes];
// const allArray = Array.from(all).forEach((el) => {
//   el.style.color = 'rebeccapurple';
// });
// In one line:
const allArray = Array.from(all).forEach((el) => el.style.color = 'rebeccapurple');