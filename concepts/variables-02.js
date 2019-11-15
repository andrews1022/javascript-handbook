// ---------- KEYWORDS ----------
// 3 keywords to define a variable
// var, let, or const

// let and const and now the new standard, var isn't really used anymore

// Examples
var name = 'John Doe';
console.log(name);

// var and let, values can be reassigned
var name = 'Steve Smith';
console.log(name);


// ---------- INITIALIZATION ----------
// Can create variables but not assign a value
// This is known as 'initializing' a variable
var greeting;
console.log(greeting); // undefined
greeting = 'Hello World!';
console.log(greeting);

// Reason for doing it this way is if for example we have a conditional
// If something equals true or false, the value of 'greeting' can be assigned accordingly


// ---------- RULES & NAMING CONVENTIONS ----------
// Variable names can include letters & numbers, _ symbol, and $ symbol
// Variable names cannot START with a number however
// Variable name cannot also be another JS keyword
// Multiword variable names use camel casing
// Example:
var firstName = 'John'; // Standard camel case

// Another example
var first_name = 'Timmy'; // Underscores, more common in PHP

// Another example
var FirstName = 'Sally'; // Pascal case

// Another example
var firstname = 'Jenny'; // All lowercase


// ---------- LET & CONST ----------
// Let can be reassigned, as seen below
let myName = 'John Doe';
console.log(myName);
myName = 'Stan Smith';
console.log(myName);

// Const is different, as values cannot be reassigned
// const stands for constant
// And for const you must assign a value
// What you CAN do, is mutate data inside of an object or an array
// What you CANNOT do, is reassign person a completely different value
const person = {
  name: 'Andy',
  age: 27
}

person.name = 'Charlie'
person.age = '23'

console.log(person); // Notice Charlie and 23 are logged and not Andy + 27

// This logic applies to arrays as well
const numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray);
numbersArray.push(6);
console.log(numbersArray);