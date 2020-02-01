// ---------- EXAMPLE #1 ----------
// Console log a regular message
console.log ('Hello World!');

// Console log an error message
console.error('This is an error!');

// Console log a warning message
console.warn('This is a warning!');


// ---------- EXAMPLE #2 ----------

// Console logging various data types

console.log('Hello');           // Strings
console.log(123);               // Numbers
console.log(true);              // Booleans
var greeting = 'Hi there';
console.log(greeting);          // Variables
console.log(1,2,3,4);           // Arrays
console.log({a:1, b:2, c:3})    // Objects

// Using console.table
console.table({a:1, b:2, c:3})  // Objects

// Log all the different properties and methods attached to the document object:
console.dir('The different properties and methods attached to the document object:');
console.dir(document);

// See how long items take inbetween tasks using .time and .timeEnd
console.time('Start');
  console.log('Hello');
  console.log('Hello');
  console.log('Hello');
  console.log('Hello');
  console.log('Hello');
  console.log('Hello');
  console.log('Hello');
console.timeEnd('Finish');