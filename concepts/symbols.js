// ---------- EXAMPLE #1 ----------
let symbolOne = Symbol();
let symbolTwo = Symbol('Foo');
let symbolThree = Symbol('Foo');

// If we run symbolTwo === symbolThree, we get false
// Symbols are used because they create these completely unique type
// This way, you can make sure there's never going to be any conflict

// And the symbol value is used as an indentifier mostly for object properties
// It's pretty much the only purpose of that because sometimes you don't want object properties if you have thousands of them to collide and be the same ones because then they'll get bugs

// ---------- EXAMPLE #2 ----------
// The nice thing about symbols is that every single one is completely unique

// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2'); // With an identifier
console.log(sym1);
console.log(sym2);
console.log(typeof sym2); // Shows Symbol is a primitive type

// Since Symbols cannot be the same, we get false here:
console.log(Symbol() === Symbol());
console.log(Symbol('123') === Symbol('123')); // Still fails

// console.log(`Hello ${sym1}`); // Cannot wrap a Symbol in a string this way
console.log(`Hello ${String(sym1)}`); // Must use String()
console.log(`Hello ${sym1.toString()}`); // Can also use toString()

// Main Reasons for Symbols = Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

// Create empty object
const myObject = {};

// Set values
myObject[KEY1] = 'Prop1';
myObject[KEY2] = 'Prop2';
myObject.key3 = 'Prop 3';
myObject.key4 = 'Prop 4';

// Log it
console.log(myObject[KEY1]);
console.log(myObject[KEY2]);

// If we were to loop through myObject using a forIn loop, it wouldn't actually show up in the iteration because they're not enumerable in forIn iteration.
// Symbols are enumerable in for...in
for (let i in myObject) {
	console.log(`${i}: ${myObject[i]}`); // We get justkey3 & key4
}

// Another thing with Symbols is that they are ignored with JSON.stringify
// Remember that JSON.stringify takes a JavaScript object literal and turns it into a JSON string
// JSON.parse does the opposite

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({ key: 'prop' })); // Regular object - works OK
console.log(JSON.stringify({ [Symbol('sym1')]: 'prop' })); // Gives empty object
