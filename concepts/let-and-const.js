// ----------------------------------- LET & CONST -----------------------------------
// let and const are the new ways of declaring variables
const player = 'Bobby'; // const stands for constant
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
  let wizardLevel = true;
  console.log(wizardLevel); // true

  // *NOTE*
  // Without this console.log line, it would be false
  // it would be false because it is not inside of a function
  // We've created a 'wizardLevel' variable inside of 'if' so the only way that we can access this is inside the 'if'.
  // So, with 'let', any time it's wrapped around a curly bracket, it creates a new scope, versus with var, where both would be true
}

console.log(wizardLevel); // false

// ----------------------------------- NOTE -----------------------------------
// With const, you're not able to reassign to the variable. So it cannot be updated.
// Now, why would that be useful?
// It's really, really useful because a lot of bugs happen when you're working in a team of people.
// The recommendation is that if you have anything that isn't going to change, it should be a constant.

// Const example
const obj = {
  player: 'Jack',
  xpPoints: 100,
  isWizardLevel: false,
};
// With this example, you cannot do something like const obj = 5;
// But what you CAN DO, is reassign the values inside the object
// Such as obj.isWizardLevel = true;
// This rule also applies to arrays

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
  age: 27,
};

person.name = 'Charlie';
person.age = '23';

console.log(person); // Notice Charlie and 23 are logged and not Andy + 27

// This logic applies to arrays as well
const numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray);
numbersArray.push(6);
console.log(numbersArray);
