// From the Mozilla Developer Network documentation:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Math.random returns a random integer between min (include) and max (include)
Math.floor(Math.random() * (max - min + 1)) + min;

// Generate a random number between 1 & 6 (for a die roll, for example)
const dieRoll = Math.floor(Math.random() * 6) + 1;

// Other ranges/examples:
// 0 -> 10
Math.floor(Math.random() * 11);

// 1 -> 10
Math.floor(Math.random() * 10) + 1;

// 5 -> 20
Math.floor(Math.random() * 16) + 5;

// -10 -> (-2)
Math.floor(Math.random() * 9) - 10;

// 1 -> 20
Math.floor(Math.random() * 20) + 1;