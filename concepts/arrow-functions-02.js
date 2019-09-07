// ------------------------------ PART 2 ------------------------------

// An arrow function with default values
// Convert this function to arrow function with default age to 10;
function isValidAge(age) {
	return age;
}

// Answer:
const isValidAge = (age = 10) => age;


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