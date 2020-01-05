const num1 = 100;
const num2 = 50;

let val;

// Simple math with numbers
console.log(num1 + num2); // Addition
console.log(num1 - num2); // Subtraction
console.log(num1 * num2); // Multiplication
console.log(num1 / num2); // Division
console.log(num1 % num2); // Modulus (remainder)

// ---------- MATH OBJECT ----------
val = Math.PI;
console.log(val);

val = Math.E;
console.log(val);

// Round a number
val = Math.round(2.68);
console.log(val);
val = Math.round(2.3);
console.log(val);

// To round a number up or downm, use ceil and/or floor
// ceil for rounding up (going to the ceiling, high end), floor for rounding down (going to the floor, low end)
val = Math.ceil(2.4);
console.log(val);
val = Math.floor(2.8);
console.log(val);

// Square root a number
val = Math.sqrt(64);
console.log(val);

// Get absolute number
val = Math.abs(-3);
console.log(val);

// Calculate a certain power
val = Math.pow(8, 2);
console.log(val);

// Min and max
val = Math.min(2, 33, 4, 1, 55, 6, 3, -2); // Get lowest value
console.log(val);
val = Math.max(2, 33, 4, 1, 55, 6, 3, -2); // Get highest value
console.log(val);

// Random number
val = Math.random(); // Provides a random number between 0 & 1 in decimal form

// Get a random number between 1 & 20
val = Math.floor(Math.random() * 20) + 1;
console.log(val);