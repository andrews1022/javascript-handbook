// ------------------------------ PART 5 ------------------------------

// A named function with no parameters
function randomNumber() {
	return Math.random;
}

// Convert to an Arrow Function:
let randomNumberArrow = () => {
	return Math.random;
}

// But this can be condensed down to this:
let randomNumberArrow = () => Math.random;