// An array for a person named John:
var john = ['John', 'Smith', 1990, 'teacher', false]; // First name, last name, birth year, job, isMarried boolean

// .indexOf() method
console.log(john.indexOf(1990)); // Get the index location, if it is in your array
// If the element you are checking for is NOT in the array, you will get -1

// This method is very useful for testing if a certain element is in your array
// Let's put this into practice, along with the ternary operator
var isDesigner = john.indexOf('designer') === -1 ?
  'John is NOT a designer' :
  'John is a designer'
console.log(isDesigner); // 'John is NOT a designer'