// Prompt displays a text input box at the top of the screen
let firstName = prompt('What is your first name?');
let lastName = prompt('What is your last name?');
console.log(`Your name is ${firstName} ${lastName}`);

// By default, prompt values are strings
// So if you answer using numbers, you need to use Number()
var firstNumber = prompt('Please provide the first number');
var secondNumber = prompt('Please provide the second number');
console.log(`The numbers you chose where ${firstNumber} and ${secondNumber}`);
