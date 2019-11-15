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