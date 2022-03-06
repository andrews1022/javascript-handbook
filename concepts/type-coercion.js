// Type coersion is basically the same thing as type conversion
// We take one type and change it to another but we don't actually do it, Javascript does it for us

const val1 = 5;
const val2 = 6;
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);

// But what if we change one to a string?
const val3 = String(5);
const val4 = 6;
const newSum = val3 + val4;
console.log(newSum);
console.log(typeof newSum);
