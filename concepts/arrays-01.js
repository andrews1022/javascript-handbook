// ------------------------------ PART 1 ------------------------------

// Arrays are essentially variables that hold multiple values
// There a couple of different ways to create arrays

// The old way - NOT RECOMMENDED
const numbers = new Array(1, 2, 3, 4, 5); // when you see the 'new' keyword and something after it, this is called a constructor; think of it as we are constructing an array
console.log(numbers);

// The new/better way - RECOMMENDED
const fruits = ['apples', 'oranges', 'pears', 'bananas']; // We can simply use [ ] and place our values inside
console.log(fruits);

// In JavaScript, you can also have multiple data types in the same array, althought that is NOT RECOMMENDED
// You also don't need to pre-define the length of your array
const fruitsV2 = ['apples', 'oranges', 'pears', 'bananas', 10, true];
console.log(fruitsV2);

// Access just one index in the fruits array
console.log(fruits[1]); 
// Notice that we get oranges, and not apples. 
// This is because arrays are zero-based, meaning the first index location starts at 0 and not at 1
// So changing it to [0] would give us apples

// Add on to the end of the array
fruits[3] = 'grapes';
console.log(fruits); 
// Notice that even though the array is set to 'const', we can still add values. 
// What you cannot do is reassign the array itself, but you can modify the values inside the array

// Add on to the end of the array - best practice (you may not always know the length of the array):
// Use the 'push' method
fruits.push('mangos');
console.log(fruits);

// Add on to the beginning of the array:
// Use the 'unshift' method
fruits.unshift('blueberries');
console.log(fruits);

// Remove the last item in the array (it POPS the last one off):
// Use the 'pop' method
fruits.pop();
console.log(fruits);

// Verify if something is an array:
console.log(Array.isArray(fruits)); // Returns true
console.log(Array.isArray('Andrew')); // Returns false

// Retrieve the index location of a certain value:
// Use indexOf
console.log(fruits.indexOf('oranges'));