// Arrow functions are very handy, and they help clean things up a bit
// With an arrow function, if you have a single return, you can just put it on one line and it assumes that you want to return something

// ---------- EXAMPLE #1 ----------
// So lets turn this function below into an arrow function
function addNums(num5 = 1, num6 = 1) {
	return num5 + num6;
}

// The irst step is to define it as a variable instead of using the function keyword
// Next, place an = operator inbetween the variable name and (
// Then, place a 'fat arrow' between the ) and {
const addNumsArrow = (num7 = 1, num8 = 1) => {
	return num7 + num8;
}
console.log(addNumsArrow(5, 5));

// What's nice about this is if it's just one expression (no other variables being assigned, nothing else going on inside the { }), we don't even need the curly braces:
const addNumsArrow = (num9 = 1, num10 = 1) => console.log(num9 + num10);
addNumsArrow(5, 5);

// But, we can trim it down EVEN FUTHER!
const addNumsArrow = (num11 = 1, num12 = 1) => num11 + num12;
console.log(addNumsArrow(5, 5));
// If wish to use the return keyword, you would need to place it inside { } like in addNumsV4

// And if you have just one parameter:
const addNumsArrow = (num13) => num13 + 5;
console.log(addNumsArrow(5));


// ---------- EXAMPLE #2 ----------
// An arrow function with default values
// Convert this function to arrow function with default age to 10;
function isValidAge(age) {
	return age;
}

// Answer:
const isValidAge = (age = 10) => age;


// ---------- EXAMPLE #3 ----------
// Convert this function with an if/else statement to arrow function:
function whereAmI(username, location) {
	if (username && location) {
		return "I am not lost";
	} else {
		return "I am totally lost!";
	}
}

// Answer:
const whereAmI = (username, location) => {
	if (username && location) {
		return "I am not lost";
	} else {
		return "I am totally lost!";
	}
}

// ---------- EXAMPLE #4 ----------
// A named function with one parameter
function isPositive(number) {
	return number >= 0;
}

// Convert to an Arrow Function:
let isPositiveArrow = (number) => number >= 0;

// But if we have just a single parameter, we can reduce it a tiny bit more:
let isPositiveArrow = number => number >= 0;
// We can remove the ( ) surrounding the parameter, in this case 'number'


// ---------- EXAMPLE #5 ----------
// A named function with no parameters, generating a random number
function randomNumber() {
	return Math.random;
}

// Convert to an Arrow Function:
let randomNumberArrow = () => {
	return Math.random;
}

// But this can be condensed down to this:
let randomNumberArrow = () => Math.random;


// ---------- EXAMPLE #6 ----------
// Where arrow functions really shine, are anonymous functions like this one
// Great for event listeners, for each loops, and more

// An anonymous function is a function with no name
document.addEventListener('click', function () {
	console.log('Clicked!');
})

// Converted to an Arrow Function:
document.addEventListener('click', () => {
	console.log('Clicked!');
})

// But the above can be condensed down to this as we only have 1 line in the block:
document.addEventListener('click', () => console.log('Clicked!'));


// ---------- EXAMPLE #7 ----------
// Consider this HTML:
<ul id="items" class="list-group">
	<li class="list-group-item">Item 1</li>
	<li class="list-group-item">Item 2</li>
	<li class="list-group-item">Item 3</li>
	<li class="list-group-item">Item 4</li>
</ul>

// Select all li elements using querySelectorAll
const itemsList = document.querySelectorAll('.list-group-item');

// REGULAR FUNCTION SYNTAX
itemsList.forEach(function (item) {
	item.style.backgroundColor = 'SpringGreen';
})

// ARROW FUNCTION SYNTAX
itemsList.forEach((item) => {
	item.style.backgroundColor = 'SpringGreen';
})

// CONDENSED ARROW FUNCTION
itemsList.forEach((item) => item.style.backgroundColor = 'PaleTurquoise');