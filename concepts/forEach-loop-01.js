// The array
const toDoLoop = [
  { id: 1, text: 'Take out the trash', isCompleted: true },
  { id: 2, text: 'Meeting wit the boss', isCompleted: true },
  { id: 3, text: 'Dentist appointment', isCompleted: false }
];

// For Each loop:
// forEach just loops through the array
// Place a variable inside the () beside 'function' as each item
toDoLoop.forEach((toDoItem) => {
  console.log(toDoItem.text); // use the same variable passed as the parameter before the .
});
