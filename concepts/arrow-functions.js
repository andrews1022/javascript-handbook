// ARROW FUNCTIONS
// Very handy, clean things up a bit
// With an arrow function, if you have a single return, you can just put it on one line and it assumes that you want to return something

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


// ADDITIONAL EXAMPLE 1
// Arrow function with default values
// Convert this function to arrow function with default age to 10;
function isValidAge(age) {
    return age;
}
// V V V
const isValidAge = (age = 10) => age;


// ADDITIONAL EXAMPLE 2
// Convert this function with an if/else statement to arrow function:
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
// V V V
const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}