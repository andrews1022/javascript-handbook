// Prompt displays a text input box at the top of the screen
const firstName = prompt('What is your first name?');
const lastName = prompt('What is your last name?');
console.log(`Your name is ${firstName} ${lastName}`);

// By default, prompt values are strings
// So if you answer using numbers, you need to use Number()
const firstNumber = prompt('Please provide the first number');
const secondNumber = prompt('Please provide the second number');
console.log(`The numbers you chose where ${firstNumber} and ${secondNumber}`);
