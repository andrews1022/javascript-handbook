// The array
const toDoLoop = [
	{ id: 1, text: 'Take out the trash', isCompleted: true },
	{ id: 2, text: 'Meeting wit the boss', isCompleted: true },
	{ id: 3, text: 'Dentist appointment', isCompleted: false }
];

// .filter allows us to create a new array based on a condition
const toDoCompleted = toDoLoop.filter(function (toDoItem) {
	return toDoItem.isCompleted === true;
}).map(function (toDoThing) { // you can also add on additional methods
	return toDoThing.text;
});

console.log(toDoCompleted); // we print an array with two values