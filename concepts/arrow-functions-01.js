// ------------------------------ PART 1 ------------------------------

// Arrow functions are very handy, and they help clean things up a bit
// With an arrow function, if you have a single return, you can just put it on one line and it assumes that you want to return something

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
const addNumsArrow = num13 => num13 + 5;
console.log(addNumsArrow(5));