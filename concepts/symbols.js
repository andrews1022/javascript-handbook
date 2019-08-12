// ----------------------------------- SYMBOLS -----------------------------------
let symbolOne = Symbol();
let symbolTwo = Symbol('Foo');
let symbolThree = Symbol('Foo');

// If we run symbolTwo === symbolThree, we get false.
// Symbols are used because they create these completely unique type.
// This way, you can make sure there's never going to be any conflict.

// And the symbol value is used as an indentifier mostly for object properties.
// It's pretty much the only purpose of that because sometimes you don't want object properties if you have thousands of them to collide and be the same ones because then they'll get bugs.

// ADDITIONAL EXAMPLE
// Create a symbol: "This is my first Symbol"
const sym = Symbol('This is my first Symbol');