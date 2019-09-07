// ------------------------------ PART 4 ------------------------------

// A named function with one parameter
function isPositive(number) {
	return number >= 0;
}

// Convert Function #2 to an Arrow Function:
let isPositiveArrow = (number) => number >= 0;

// But if we have just a single parameter, we can reduce it a tiny bit more:
let isPositiveArrow = number => number >= 0;
// We can remove the ( ) surrounding the parameter, in this case 'number'