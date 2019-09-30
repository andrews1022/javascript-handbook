// What does...
0.1 + 0.2 === 0.3
// ...evaluate to?

// It evaluates to 
false

// This is because JavaScript uses 64-bit floating numbers
// So...
0.1 + 0.2
// ...really equates to
0.30000000000000004

// A solution to this problem would be to use a function that determines if two numbers are approximately equal by defining an error margin (epsilon) value that the difference between two values should be less than.
const approxEqual = (n1, n2, epsilon = 0.0001) => Math.abs(n1 - n2) < epsilon
approxEqual(0.1 + 0.2, 0.3) // true