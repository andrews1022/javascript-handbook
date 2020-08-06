// ---------- CONCATENATION & TEMPLATE LITERALS ----------
// Basic variables
const actor1 = 'Scarlett Johansson';
const actor2 = 'Hugh Jackman';
const actor3 = 'Sidney Poitier';
const actor4 = 'Audrey Hepburn';

// Concatenation - older method
console.log('My name is ' + actor1 + '.');

// Concatenation - newer method using Template Strings (aka template literals)
// You use backticks ` ` (beside the 1 key), and this makes it a template string
// Wherever you use the variable, place it inside ${ }
console.log(`My name is ${actor2}.`);

// You could even put the entire template string into a variable, then print it out as seen below
const greeting = `My name is ${actor3}.`;
console.log(greeting);

// ---------- COMMON STRING METHODS ----------
// Basic variable
const hello = 'Hello World!';

// Get the length (number of characters in the string)
console.log(hello.length); // Note that this is a property, NOT a method. A method uses () at the end, while a property does not

// Change to uppercase
console.log(hello.toUpperCase()); // This is a method (uses the () ). A method is essentially a function that is associated with an object

// Change to lowercase
console.log(hello.toLowerCase());

// Substring - pull a substring out of the string
// Takes in two indexes - where you want to start and end
console.log(hello.substring(0, 5));

// You can add on other methods as well
console.log(hello.substring(0, 5).toUpperCase());

// You can split a string into an array
// This splits based on the parameter you use
console.log(hello.split('')); // Split by letter, use ''
console.log(hello.split(' ')); // Split by word, use ' '

// A common example would be a blog post, and you need different tags
const blog = 'technology, computers, front-end, it, code'; // The comma+space is now used as a separator
console.log(blog.split(', ')); // Notice how each word is now an index in the array
// You could then insert this into a database, you can search for it, etc.

// ---------- ES6 STRING METHODS ----------
let firstName = 'John';
let lastName = 'Smith';

const name = `${firstName} ${lastName}`;
// Starts and ends with
console.log(name.startsWith('J')); // true, is case sensitive
console.log(name.endsWith('h')); // true

// What about the middle? We use includes
// We basically, does this string include ...
console.log(name.includes(' ')); // true
console.log(name.includes('oh')); // true

// Repeat method
console.log(firstName.repeat(4)); // JohnJohnJohnJohn

// ---------- STRING PADDING ----------
// ES8 introduced 2 string padding methods: .padStart() & .padEnd()

// For example:
'Turtle'.padStart(10);
('    Turtle');
// We get 10 "total" characters/spaces used including the string

'Turtle'.padEnd(10);
('Turtle    ');
