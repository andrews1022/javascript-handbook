// ------------------------------ ARRAYS ------------------------------
// Arrays are basically variables that hold multiple values
// There a couple of different ways to create arrays

// Old way
const numbers = new Array(1, 2, 3, 4, 5); // when you see the 'new' keyword and something after it, this is called a constructor - think of it as we are constructing an array
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

// Basic Array Structure
var list = ['tiger', 'cat', 'bear', 'bird'];

// Access an item in the array
// Arrays start at 0 - so this logs cat
console.log(list[1]);

// Arrays can hold lots of different types of data
var numbers = [1, 2, 3, 4, 5];
var booleans = [true, false, true];

// You can even have an array of functions
var functionsList = [function apple() {
  console.log('apple');
}]

// You can also have arrays hold different types of data at the same time
// But this not advised, as it can lead to performance issues
var mixedList = ['apples', 3, undefined, true, function orange() {
  console.log('orange');
}]

// You can have arrays inside of an array
var animalList = [
  ['tiger', 'cat', 'bear', 'bird'],
  ['dog', 'mouse', 'elephant', 'zebra']
];

// Log both arrays
console.log(animalList);

// Log the array at index 1
console.log(animalList[1]);

// Log an item from a particular array
// First [] is for which index location, then second [] is for index location of array item
// So in this case, bear from the first array
console.log(animalList[0][2]);

// Arrays come with multiple methods:
// Let's use this array from earlier
var list = ['tiger', 'cat', 'bear', 'bird']; 
list.shift() // - to remove the first item in the array
list.pop() // - to remove the last item in the array
list.unshift() // - to add an item at the beginning of the array
list.push() // - to add an item at the end of the array
list.concat() // - to add multiple items to the array, such as list.concat(['bee', 'deer']);
list.sort() // - sort items in the array
// ** BE CAREFUL** 
// There are some methods, that creates new lists: like 'concat'; and some methods: like 'push' or 'pop', that don't create a new list, they just MODIFY the current one.

// ----------------------------------- RECAP -----------------------------------
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


// ----------------------------------- MAP -----------------------------------
// With map, you always need to return something
// Below, we loop over each element each number and return a new array.
const mappedArray = array.map((num) => {
	return num * 2;
})
console.log('map', mappedArray);
// BREAKDOWN:
// Every time the array loops, let's say the first one is number one.
// We return 1 times 2 that gets put into map array which is now 2.
// And then we go to the next number to 2 x 2.
// Now gets added to the array 10 x 2 gets added to the array and 16 x 2 gets added to the array.
// So that's why we return it.

// NOTES:
// Whenever you want to loop do a simple loop and take some action on something like an array, you want to use map over for each 
// With for each the operation may do nothing.
// Because all forEach cares about is to iterate over a collection of elements like 1, 2, 10, and 16 and apply whateveroperation we tell it to on each element.

// Now map on the other hand has a restriction on the operation.
// It expects the operation to return an element.
// The map iterates through over a collection of elements applying the operation on each element
// Then it finally stores the result of each invocation of the operation into another collection which is map array.
// In other words, map transforms the array; it creates a new array which is mappedArray

// And again, since our arrow function has a single parameter, it can be written in shorthand like this:

// const mappedArray = array.map((num) => {
//    return num * 2;
//})
const mappedArrayShort = array.map(num => num * 2);
console.log('map short', mappedArrayShort);



// ----------------------------------- FILTER -----------------------------------
// And as the name suggests, we can filter our array based on a condition
// For our demo, let's return all the elements in the array 'array' that are greater than five
const filteredArray = array.filter(num => {
	// As with map, we must return something
	return num > 5;
})
console.log('filter', filteredArray);
// Again, since this is a single return value, we can use shorthand version
const filteredArrayShort = array.filter(num => num > 5);

console.log('filter short', filteredArrayShort);
// If it returns false, ut won't go into the array 
// If it returns true, it will



// ----------------------------------- REDUCE -----------------------------------
// You can actually do filtering and mapping with reduce, so it's a really powerful method.

// Reduce takes something called an accumulator and the number.
// accumulator can be anything, sometimes written as acc
// What is accumulator?
// Accumulator is something where we can store the information that happens in the body of the function.
const reducedArray = array.reduce((accumulator, num) => {
	return accumulator + num;

	// This line below: }, 0) 
	// Is a second parameter
	// We can specify what we want our accumulator to start with the default value.
	// In our case let's say zero.
}, 0)
console.log('reduce', reducedArray);
// We get 29 because 10 + 16 = 26, then plus 1 & 2 = 29