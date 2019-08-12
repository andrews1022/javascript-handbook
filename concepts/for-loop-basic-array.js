// Create a list (array) of things to do
var todos = [
    'clean room',
    'brush teeth',
    'exercise',
    'study javascript',
    'eat healthy'
];

// Create a for loop to add a ! at the end of each index item
for (var i = 0; i < todos.length; i++) {

    // Add on exclamation point:
    todos[i] = todos[i] + "!";

    console.log(i);
}