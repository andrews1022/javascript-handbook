// The typeof operator returns a string indicating the type of the data being checked

// PRIMITIVE DATA TYPES
const name = 'John Doe' // String
console.log(typeof name);

const age = 45; // Number
console.log(typeof age)

const hasDog = false; // Boolean
console.log(typeof hasDog)

const car = null; // Null
console.log(typeof car); // Returns 'object' - this is a bug in JavaScript

let test; // Undefined
console.log(typeof test);

const sym = Symbol(); // Symbol
console.log(typeof sym);


// REFERENCE DATA TYPES - all return object when using typeof
const hobbies = ['movies', 'music']; // Arrays
console.log(typeof hobbies); // Returns object

const address = { // Object literal
  city: 'Vancouver',
  province: 'BC'
}
console.log(typeof address);

const today = new Date(); // Date object
console.log(today);
console.log(typeof today);