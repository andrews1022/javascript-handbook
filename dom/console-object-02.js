// ------------------------------ PART 2 ------------------------------

// Console logging various data types

console.log('Hello'); // Strings
console.log(123); // Numbers
console.log(true); // Booleans
var greeting = 'Hi there';
console.log(greeting); // Variables
console.log(1,2,3,4); // Arrays
console.log({a:1, b:2, c:3}) // Objects

// Using console.table
console.table({a:1, b:2, c:3}) // Objects

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