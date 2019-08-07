// ARROW FUNCTIONS
// Very handy, clean things up a bit
// So lets turn addNumsV3 into an arrow function
function addNumsV3(num5 = 1, num6 = 1) {
    return num5 + num6;
}

// First step is to define it as a variable instead of using the function keyword
// Next, place an = operator inbetween the variable name and (
// Then, place a 'fat arrow' between ) and {
const addNumsV4 = (num7 = 1, num8 = 1) => {
    return num7 + num8;
}
console.log(addNumsV4(5, 5));

// What's nice about this is if it's just one expression (no other variables being assigned, nothing else going on inside the { }), we don't even need the curly braces:
const addNumsV5 = (num9 = 1, num10 = 1) => console.log(num9 + num10);
addNumsV5(5, 5);

// But, we can trim it down EVEN FUTHER!
const addNumsV6 = (num11 = 1, num12 = 1) => num11 + num12;
console.log(addNumsV6(5, 5));
// If wish to use the return keyword, you would need to place it inside { } like in addNumsV4

// And if you have just one parameter:
const addNumsV7 = num13 => num13 + 5;
console.log(addNumsV7(5));