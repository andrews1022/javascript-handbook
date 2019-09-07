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