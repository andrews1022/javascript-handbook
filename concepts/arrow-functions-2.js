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