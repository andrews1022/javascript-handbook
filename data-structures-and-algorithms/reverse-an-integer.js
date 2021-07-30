// The goal: Return an integer in reverse
// Exmaple: reverseInt(521) === 125

function reverseInt(int) {
	// Reverse the int as a string, split it, join it again
	const revString = int.toString().split('').reverse().join('');
	// Then parse it as a number - add a sign if there is one (catches negative numbers)
	return parseInt(revString) * Math.sign(int);
}

// Call the function
reverseInt(521);
reverseInt(645);
reverseInt(23164);
reverseInt(12345);
