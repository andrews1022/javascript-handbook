// ---------- ARRAYS ----------
// In simple terms, arrays are essentially variables that allow us to hold multiple values
// For further explanation on arrays, check out the MDN page:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ---------- PART 1: CREATING AN ARRAY ----------
// There a couple of different ways to create arrays

// The old way - NOT RECOMMENDED
const numbers = new Array(1, 2, 3, 4, 5); // When you see the 'new' keyword and something after it, this is called a constructor; think of it as 'we are constructing an array'
console.log(numbers);

// The better way - RECOMMENDED
const fruits = ['apples', 'oranges', 'pears', 'bananas']; // We can simply use [ ] and place our values inside
console.log(fruits);

// ---------- PART 2: STORING DATA IN THE ARRAY ----------
// You can also have multiple data types in the same array, althought that is NOT RECOMMENDED, as it can lead to performance issues
// And you also don't need to pre-define the length of your array
const fruitsV2 = ['apples', 'oranges', 'pears', 'bananas', 10, true];
console.log(fruitsV2);

// Some basic arrays:
const fibonacciSeries = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
const favouriteCars = ['BMW', 'Ferrari', 'Audi', 'Lamborghini', 'Lexus'];
const familyMembers = ['Chris', 'Jenny', 'Sally', 'David', 'Warren'];
const simpleNumbers = [1, 2, 3, 4, 5];
const booleans = [true, false, true];

// You can even have an array of functions
const functionsList = [
	function apple() {
		console.log('apple');
	}
];

// You can have arrays inside of an array, also known as 'nested arrays'
const animalList = [
	['tiger', 'cat', 'bear', 'bird'],
	['dog', 'mouse', 'elephant', 'zebra']
];

// ---------- PART 3: ACCESSING DATA IN THE ARRAY ----------
// Access just one index in the fruits array above
console.log(fruits[1]);
// Notice that we get oranges, and not apples.
// This is because arrays are zero-based, meaning the first index location starts at 0 and not at 1
// So, changing it to [0] would give us apples

// Add on to the end of the array
fruits[3] = 'grapes';
console.log(fruits);
// Notice that even though the array is set to 'const', we can still add values.
// What you cannot do is reassign the array itself, but you can modify the values inside the array

// For the animalList with nested arrays above, we use [][] to access data
// The first [] is for which index location, and the second [] is for the index location of the array item
// So in this case, bear from the first array
console.log(animalList[0][2]);

// ---------- PART 4: ARRAY METHODS ----------
fruits.push('mangos'); // Add an item to the end of an array
fruits.pop(); // Remove an item from the end of an Array
fruits.unshift('blueberries'); // Add an item to the beginning of the array
fruits.shift(); // Remove an item from the beginning of the array
fruits.concat(); // Add multiple items to the array
fruits.sort(); // Sort items in the array
fruits.reverse(); // Sort items in the array in reverse order
fruits.splice(1, 4); // Splice out values from the array (you chose where you want to start and end)

// Verify if something is an array:
console.log(Array.isArray(fruits)); // Returns true
console.log(Array.isArray('Nick')); // Returns false

// Find the index of an item in the array
console.log(fruits.indexOf('oranges'));

// Determine the length of the array
console.log(fruits.length);

// Access the last value in an array (dynamic)
let lastFruit = fruits[fruits.length - 1];

// Loop over an Array
fruits.forEach((item, index) => {
	console.log(item, index);
});

// ---------- PART 5: HIGHER ORDER ARRAY METHODS ----------
// The 3 most common higher order array methods are .map(), .filter(), & .reduce()

// We said arrays look like this:
const myNumbersArray = [1, 2, 10, 16];

// First, let's remember how the forEach loop works again
// Let's say we want to multiply every single number in myNumbersArray
const newArray = myNumbersArray.forEach((num) => {
	num * 2;
});

// We're just randomly multiplying the numbers by two but we're not really storing it anywhere.
// So let's create an empty array and push on to it, using the .push() method
const double = [];
const newArray2 = myNumbersArray.forEach((num) => {
	double.push(num * 2);
});
console.log('forEach/double.push', double);

// ------- .MAP() -------
// With .map(), you always need to return something
// Below, we loop over each element/each number, and return a NEW array.
const mappedArray = myNumbersArray.map((num) => {
	return num * 2;
});
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

// ------- .FILTER() -------
// And as the name suggests, we can FILTER an array based on a condition
// For our demo, let's return all the elements in the array 'array' (near the top of this section) that are greater than 5
const filteredArray = myNumbersArray.filter((num) => {
	// And as with .map, we must return something
	return num > 5;
});
console.log('filter', filteredArray);

// Again, since this is a single return value, we can use shorthand version
const filteredArrayShort = myNumbersArray.filter((num) => num > 5);

console.log('filter short', filteredArrayShort);
// If it returns false, ut won't go into the array
// If it returns true, it will

// ------- .REDUCE() -------
// You can actually do filtering and mapping with reduce, so this is a really powerful method.

// Reduce takes something called an 'accumulator' and the 'number'.
// The accumulator can be anything, sometimes written as 'acc' for short
// What is an accumulator?
// An accumulator is something where we can store the information that happens in the body of the function.
const reducedArray = myNumbersArray.reduce((acc, num) => {
	return acc + num;

	// This line below:
	// '}, 0)'
	// It's a second parameter
	// We can specify what we want our accumulator to start with the default value.
	// In our case let's say zero.
}, 0);
console.log('reduce', reducedArray);
// We get 29 because 10 + 16 = 26, then plus 1 & 2 = 29
