// There are 2 types of data:
// Primitive & Reference

// Primitive Data Types
// Stored directly in the location the variable accesses
// Stored on the stack

// Reference Data Types
// Accessed by reference
// Objects that are stored on the heap
// A pointer to a location in memory

// In JavaScript, there are 6 Primitive Data Types
// String
// Number
// Boolean
// Null
// Undefined
// Symbols (ES6)

// Reference Data Types:
// Arrays
// Object Literals
// Functions
// Dates
// Anything else that you can store, such as object wrappers

// JavaScript is known as a Dynamically Typed Language. This means:
// Types are associated with values, not variables
// The same variable can hold multiple types
// We do not need to specify types
// Most other languages are statically typed (Java, C#, C++)
// There are supersets of JavaScript and addons to allow static typing (TypeScript, Flow) (superset means everything that JavaScript is, plus more (additional features))

// PRIMITIVE DATA TYPES
const name = 'John Doe'; // String
console.log(typeof name);

const age = 45; // Number
console.log(typeof age);

const hasDog = false; // Boolean
console.log(typeof hasDog);

const car = null; // Null
console.log(typeof car); // Returns 'object' - this is a bug in JavaScript

let test; // Undefined
console.log(typeof test);

const sym = Symbol(); // Symbol
console.log(typeof sym);

// REFERENCE DATA TYPES - all return object when using typeof
const hobbies = ['movies', 'music']; // Arrays
console.log(typeof hobbies); // Returns object

const address = {
  // Object literal
  city: 'Vancouver',
  province: 'BC'
};
console.log(typeof address);

const today = new Date(); // Date object
console.log(today);
console.log(typeof today);
