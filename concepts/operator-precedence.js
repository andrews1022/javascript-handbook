// Operator precedence
var currentYear = 2020;
var yearJohnIsBorn = 1989;
var fullAge = 18;

var isFullAge = currentYear - yearJohnIsBorn >= fullAge;
console.log(isFullAge);
// How does JavaScript know what to execute first?
// This is where operator precedence comes into place - which operator is executed first
// Check out the full table over on MDN: https://mzl.la/2TBn6QZ
// The table is ordered from highest (21) to lowest (1) precedence.

// Calculate average fullAge
var ageJohn = currentYear - yearJohnIsBorn;
var ageMark = 35;
var average = ageJohn + ageMark / 2; // but this is not correct, as the division has a higher precedence
console.log('incorrect answer:', average);
// should be like this
average = (ageJohn + ageMark) / 2; // now the ( ) has the highest precedence
console.log('correct answer:', average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 --> 32-6 --> 26
console.log(x, y);
// This works because the assignment operator runs from right to left
// First, y is = 26
// Then x is = to y, also 26
// So that is why we got 26 26 in the console
// This is because of associativity

// More operators
x = x * 2;
x *= 2; // Same as above
console.log(x);
x += 10; // Using addition
console.log(x);

// Increment
x = x + 1;
x++; // Same as above
console.log(x);
// Decrement
x--;
console.log(x);
