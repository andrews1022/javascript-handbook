// ******* EXAMPLE 1 *******
// The array
const toDoLoop = [
    {
        id: 1,
        text: 'Take out the trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting wit the boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
];

// Filter (again, create a new array based on a condition)
// .filter allows use to create a new array based on a condition
const toDoCompleted = toDoLoop.filter(function (toDoItem) {
    return toDoItem.isCompleted === true;
}).map(function (toDoThing) { // you can also add on additional methods
    return toDoThing.text;
});
console.log(toDoCompleted); // we print an array with two values



// ******* EXAMPLE 2 *******
// We said arrays look something like this:
const array = [1, 2, 10, 16];

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