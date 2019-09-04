// Arrays are basically variables that hold multiple values
// There a couple of different ways to create arrays

// Old way
const numbers = new Array(1, 2, 3, 4, 5); // when you see the 'new' keyword and something after it, this is called a constructor; think of it as we are constructing an array
console.log(numbers);

// New/better way
const fruits = ['apples', 'oranges', 'pears', 'bananas']; // we can simply use [ ] and place or values inside
console.log(fruits);

// In JavaScript, you can also have multiple data types in the same array (NOT RECOMMENDED)
// And you also don't need to pre-define the length of your array
const fruitsV2 = ['apples', 'oranges', 'pears', 'bananas', 10, true];
console.log(fruitsV2);

// Access just one index in the fruits array
console.log(fruits[1]); // Note we get oranges, and not apples. This is becaus arrays start at zero (are zero-based, and the same are goes for any other programming language in fact). So changing it to [0] would give us apples

// Add on to the end of the array
fruits[3] = 'grapes';
console.log(fruits); // note that even though the array is set to 'const', we can still add values. The thing you cannot do is reassign it. Most times you just manipulate it anyways

// Add on to the end of the array - best practice (you may not always know the length of the array)
// Use the 'push' method
fruits.push('mangos');
console.log(fruits);

// Add on to the beginning of the array
// Use the 'unshift' method
fruits.unshift('blueberries');
console.log(fruits);

// Remove the last item in the array (pops the last one off)
// Use the 'pop' method
fruits.pop();
console.log(fruits);

// Verify if something is an array:
console.log(Array.isArray(fruits)); // returns true
console.log(Array.isArray('Andrew')); // returns false

// Retrieve the index location of a certain value
// Use indexOf
console.log(fruits.indexOf('oranges'));