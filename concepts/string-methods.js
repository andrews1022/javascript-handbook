// Basic variable
const hello = 'Hello World!';

// Get the length (number of characters in the string)
console.log(hello.length);  // Note that this is a property, NOT a method. A method uses () at the end, while a property does not

// Change to uppercase
console.log(hello.toUpperCase());   // This is a method (uses the () ). A method is essentially a function that is associated with an object

// Change to lowercase
console.log(hello.toLowerCase()); 

// Substring - pull a substring out of the string
// Takes in two indexes - where you want to start and end
console.log(hello.substring(0, 5));

// You can add on other methods as well
console.log(hello.substring(0, 5).toUpperCase());

// You can split a string into an array
// This splits based on the parameter you use
console.log(hello.split(''));   // Split by letter, use ''
console.log(hello.split(' '));  // Split by word, use ' ' 

// A common example would be a blog post, and you need different tags
const blog = 'technology, computers, front-end, it, code';  // The comma+space is now used as a separator
console.log(blog.split(', '));  // Notice how each word is now an index in the array
// You could then insert this into a database, you can search for it, etc.