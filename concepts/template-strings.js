// Basic variables
const theName = 'Andrew';
const theAge = 26;

// Concatenation - older method
console.log('My name is ' + theName + ' and I am ' + theAge);

// Concatenation - newer method using Template Strings (aka template literals)
// You use backticks ` ` (beside the 1 key), and this makes it a template string
// Wherever you use the variable, place it inside ${ }
console.log(`My name is ${theName} and I am ${theAge} years old.`);

// You could even put the entire template string into a variable, then print it out as seen below
const greeting = `My name is ${theName} and I am ${theAge} years old.`;
console.log(greeting);


// ANOTHER EXAMPLE
// Old lame way
const newName = 'Sally';
const age = 34;
const pet = 'horse';
const greeting = 'Hello ' + name + 'you seem to be doing' + greeting + '!';

// New way with backticks (left of 1 key)
// Easier way of writing, and no need to worry about ' or "
// Can place variables inside of ${...}
const betterGreeting = `Hello ${newName} you seem to be ${age-10}. Your ${pet} is awesome!`;


// Using default arguments
function greet(newerName = 'Andrew', newAge = '28', newPet = 'corgi') {
    return `Hello ${newerName} you seem to be ${newAge-10}. Your ${newPet} is awesome!`;
}

// When we call greet(); in the console, we get:
// "Hello Andrew you seem to be 18. Your corgi is awesome!"
// Further details:
// If we run this function because of the way we set the parameters, we gave them default arguments which says if, I don't provide a value for name which I haven't, I haven't given any arguments.
// Well then make 'newerName' = 'Andrew', make 'age' = '30', and make 'pet' = 'cat'

// So we can call the function like so:
greet('John', 50, 'tiger');
// We get: "Hello John you seem to be 40. Your tiger is awesome!"