// indexOf() method
const firstArray = [1, 2, 3, 4, 5];
const secondArray = [4, 5, 6];
const difference = firstArray.filter((x) => secondArray.indexOf(x) === -1);
console.log(difference); // [1, 2, 3]

// includes() method
var firstArray = [1, 2, 3, 4, 5];
var secondArray = [4, 5, 6];
var difference = firstArray.filter((x) => !secondArray.includes(x));
console.log(difference); // [1, 2, 3]

// Set method
const firstArray = [1, 2, 3, 4, 5];
const secondArray = [4, 5, 6];
const arraySet = new Set(secondArray);
const difference = [...firstArray].filter((x) => !arraySet.has(x));
console.log(difference); // [1, 2, 3]
