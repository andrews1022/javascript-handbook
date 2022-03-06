// ---------- EXAMPLE #1 ----------
// Basic variables
const theName = 'Morgan Freeman';
const theAge = 82;

// Concatenation - older method
console.log('My name is ' + theName + ' and I am ' + theAge);

// Concatenation - newer method using Template Literals
// You use backticks ` ` (beside the 1 key), and this makes it a template literal
// Wherever you use the variable, place it inside ${ }
console.log(`My name is ${theName} and I am ${theAge} years old.`);

// You could even put the entire template string into a variable, then print it out as seen below
const greeting = `My name is ${theName} and I am ${theAge} years old.`;
console.log(greeting);

// ---------- EXAMPLE #2 ----------
const newName = 'Sally';
const age = 34;
const pet = 'horse';
// Together using the + symbol
const greeting = 'Hello ' + name + 'you seem to be doing' + greeting + '!';

// New way with backticks (left of #1 key)
// Easier way of writing, and no need to worry about ' or "
// Can place variables inside of ${ }
const betterGreeting = `Hello ${newName} you seem to be ${age - 10}. Your ${pet} is awesome!`;

// Using default arguments
function greet(newerName = 'Megan Mullally', newAge = '60', newPet = 'corgi') {
	return `Hello ${newerName} you seem to be ${newAge - 10}. Your ${newPet} is awesome!`;
}

// When we call greet(); in the console, we get:
// "Hello Andrew you seem to be 18. Your corgi is awesome!"
// Further details:
// If we run this function because of the way we set the parameters, we gave them default arguments which says if, I don't provide a value for name which I haven't, I haven't given any arguments.
// Well then make 'newerName' = 'Andrew', make 'age' = '30', and make 'pet' = 'cat'

// So we can call the function like so:
greet('John', 50, 'tiger');
// We get: "Hello John you seem to be 40. Your tiger is awesome!"

// ---------- EXAMPLE #3 ----------
// Template literals also making inserting JavaScript into HTML elements very easy:
const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Vancouver';
let html;

// You can place variables, expressions, functions, and even conditionals inside ${ }
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>

    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;

// Append to the page
document.body.innerHTML = html;

// ---------- EXAMPLE #4 ----------
// Get current milliseconds
console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);

// Get current seconds
console.log(`Current Seconds: ${new Date().getSeconds()}`);
