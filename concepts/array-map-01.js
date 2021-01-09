// The array
const toDoLoop = [
	{ id: 1, text: 'Take out the trash', isCompleted: true },
	{ id: 2, text: 'Meeting wit the boss', isCompleted: true },
	{ id: 3, text: 'Dentist appointment', isCompleted: false }
];

// Map (again, create a new array from an array)
// .map allows us to create a new array from an array
const toDoID = toDoLoop.map((toDoItem) => toDoItem.text);

console.log(toDoID);
