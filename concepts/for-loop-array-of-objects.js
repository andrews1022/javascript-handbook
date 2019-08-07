// The array:
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

// LOOPING THROUGH AN ARRAY - OLD WAY
for (let i = 0; i < toDoLoop.length; i++) { // loop through no more than the length of the array
    console.log(toDoLoop[i].text);
}

// LOOPING THROUGH AN ARRAY - BETTER WAY - FOR OF LOOP
for (let todo of toDoLoop) { // the todo could be anything, could just be t, or z, w/e. then place your array name after the 'of' keyword
    console.log(todo.isCompleted);
}