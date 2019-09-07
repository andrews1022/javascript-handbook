// To-do list array of objects
const toDo = [
	{ id: 1, text: 'Take out the trash', isCompleted: true },
	{ id: 2, text: 'Meeting wit the boss', isCompleted: true },
	{ id: 3, text: 'Dentist appointment', isCompleted: false }
];

// Selecting just the 'Meeting with boss'
console.log(toDo[1].text); //select which index location (is 1), then use .[property]

// JSON is a data format known as JavaScript Object Notation
// Similiar in structure to an array of objects as seen above (toDo array)
// Convert the toDo array to JSON format so to get it ready for sending it to a server, for example:

const toDoJSON = JSON.stringify(toDo); // Create a new variable & use the JSON object and stringify method
console.log(toDoJSON);