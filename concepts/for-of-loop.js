// The for of loop works with ARRAYS
// On the other hand, we have the for in loop which is for OBJECTS

// ---------- EXAMPLE #1 ----------
// Let's say we have a basket, that has our grocery list
const basket = ['apples, oranges, grapes'];

// The for of loop:
for (item of basket) {
  console.log('for of loop:', item);
}

// What we're doing here is ITERATING over this array
// Iterating simply means we're able to go one by one through an item, in this case our basket array
// You can iterate over arrays and strings, so they are considered iterable

// ---------- EXAMPLE #2 ----------
// Iterating over a string:
for (item of 'basket') {
  console.log('for of loop iterating over a string:', item);
}


// ---------- EXAMPLE #3 ----------
// Create a function called biggestNumberInArray() that takes arr as a parameter and returns the biggest number.
const array = [-1, 0, 3, 100, 99, 2, 99] // should return 100

// The function
function biggestNumberInArray(arr) {
	let highest = 0;
	for (item of arr) {
		if (highest < item) {
			highest = item;
		}
	}
	return highest;
}


// ---------- EXAMPLE #4 ----------
// The array:
const toDoLoop = [
	{ id: 1, text: 'Take out the trash', isCompleted: true },
	{ id: 2, text: 'Meeting wit the boss', isCompleted: true },
	{ id: 3, text: 'Dentist appointment', isCompleted: false }
];

// LOOPING THROUGH AN ARRAY - OLD WAY
for (let i = 0; i < toDoLoop.length; i++) { // loop through no more than the length of the array
	console.log(toDoLoop[i].text);
}

// LOOPING THROUGH AN ARRAY - BETTER WAY - FOR OF LOOP
for (let todo of toDoLoop) { // the todo could be anything, could just be t, or z, w/e. then place your array name after the 'of' keyword
	console.log(todo.isCompleted);
}