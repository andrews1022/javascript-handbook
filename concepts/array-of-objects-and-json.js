// {name: "RBC", category: "Finance", start: 1981, end: 2004},
const toDo = [
	{ id: 1, text: 'Take out the trash', isCompleted: true },
	{ id: 2, text: 'Meeting wit the boss', isCompleted: true },
	{ id: 3, text: 'Dentist appointment', isCompleted: false }
];

// Selecting just the 'Meeting with boss'
console.log(toDo[1].text); //select which index location (is 1), then use .[property]

// JSON - is a data format (known as JavaScript Object Notation)
// Similiar in structure to array of objects, as seen above (toDo)
// Convert the toDo array to JSON format, to get it ready for send to a server for example:

const toDoJSON = JSON.stringify(toDo); // create new variable, use the JSON object and stringify method
console.log(toDoJSON);