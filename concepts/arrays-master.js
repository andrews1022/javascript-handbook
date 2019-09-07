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


// ------------------------------ PART 2 ------------------------------

// A basic array structure
var list = ['tiger', 'cat', 'bear', 'bird'];

// Access an item in the array
// This will log 'cat'
console.log(list[1]);

// Arrays can hold lots of different types of data
var numbers = [1, 2, 3, 4, 5];
var booleans = [true, false, true];

// You can even have an array of functions
var functionsList = [function apple() {
  console.log('apple');
}]

// You can also have arrays hold different types of data at the same time
// But this not recommended, as it can lead to performance issues
var mixedList = ['apples', 3, undefined, true, function orange() {
  console.log('orange');
}]

// You can have arrays inside of an array, also known as 'nested arrays'
var animalList = [
  ['tiger', 'cat', 'bear', 'bird'],
  ['dog', 'mouse', 'elephant', 'zebra']
];

// Log both arrays
console.log(animalList);

// Log the array at index 1
console.log(animalList[1]);

// Log an item from a particular array
// The first [] is for which index location, and the second [] is for the index location of the array item
// So in this case, bear from the first array
console.log(animalList[0][2]);

// Arrays come with multiple methods:
// Let's use the array from earlier
var list = ['tiger', 'cat', 'bear', 'bird']; 
list.shift()    // To remove the first item in the array
list.pop()      // To remove the last item in the array
list.unshift()  // To add an item at the beginning of the array
list.push()     // To add an item at the end of the array
list.concat()   // To add multiple items to the array, such as list.concat(['bee', 'deer']);
list.sort()     // sort items in the array

// BE CAREFUL: There are some methods, that creates new lists: like 'concat'; and some methods: like 'push' or 'pop', that don't create a new list, just modify the current one.


// ------------------------------ PART 3 ------------------------------

// Covered here: .map(), .filter(), & .reduce()
// These 3 are the most important in day to day use of JavaScript

// We said arrays look something like this:
const array = [1, 2, 10, 16];
// And we said we can do for loops, forEach loops, and more
// But here, we're going to take it up a notch

// Let's remember how forEach loop works agin
// Let's say we want to multiply every single number in the array.
const newArray = array.forEach((num) => {
	num * 2;
})

// We're just randomly multiplying the numbers by two but we're not really storing it anywhere.
const double = [];
const newArray2 = array.forEach((num) => {
	double.push(num * 2);
})
console.log('forEach/double.push', double);


// -------------------- .MAP() --------------------
// With .map(), you always need to return something
// Below, we loop over each element/each number, and return a NEW array.
const mappedArray = array.map((num) => {
	return num * 2;
})
console.log('map', mappedArray);
// BREAKDOWN:
// Every time the array loops, let's say the first one is number 1.
// We return 1 times 2, and that gets put into map array which is now 2.
// And then we go to the next number, which is 2 x 2.
// Now gets added to the array 10 x 2 gets added to the array and 16 x 2 gets added to the array.
// So that's why we return it.

// ADDITIONAL NOTES:
// Whenever you want to loop and take some action on something like an array, you want to use map over forEach 
// With forEach the operation may do nothing
// Because all forEach cares about is to iterate over a collection of elements like 1, 2, 10, and 16 and apply whatever operation we tell it to on each element

// Now map on the other hand has a restriction on the operation
// It expects the operation to return an element
// The map iterates through over a collection of elements applying the operation on each element
// Then it finally stores the result of each invocation of the operation into another collection which is a mappedArray
// In other words, map transforms the array - it creates a new array which is mappedArray

// And again, since our arrow function has a single parameter, it can be written in shorthand like this:
const mappedArrayShort = array.map(num => num * 2);
console.log('map short', mappedArrayShort);


// -------------------- .FILTER() --------------------
// And as the name suggests, we can FILTER an array based on a condition
// For our demo, let's return all the elements in the array 'array' (near the top of this section) that are greater than 5
const filteredArray = array.filter(num => {
	// And as with .map, we must return something
	return num > 5;
})
console.log('filter', filteredArray);

// Again, since this is a single return value, we can use shorthand version
const filteredArrayShort = array.filter(num => num > 5);

console.log('filter short', filteredArrayShort);
// If it returns false, ut won't go into the array 
// If it returns true, it will


// -------------------- .REDUCE() --------------------
// You can actually do filtering and mapping with reduce, so this is a really powerful method.

// Reduce takes something called an 'accumulator' and the 'number'.
// The accumulator can be anything, sometimes written as 'acc' for short
// What is an accumulator?
// An accumulator is something where we can store the information that happens in the body of the function.
const reducedArray = array.reduce((acc, num) => {
	return acc + num;

	// This line below: 
	// '}, 0)' 
	// It's a second parameter
	// We can specify what we want our accumulator to start with the default value.
	// In our case let's say zero.
}, 0)
console.log('reduce', reducedArray);
// We get 29 because 10 + 16 = 26, then plus 1 & 2 = 29