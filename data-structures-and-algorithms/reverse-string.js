// The goal: Return a string in reverse
// Example: reverseString('hello') === 'olleh'

function reverseString(str) {
	// ---------- METHOD 1 ----------
	// Split the string into an array
	const strArray = str.split('');
	// Reverse the array:
	strArray.reverse();
	// Join back into a string
	return strArray.join('');

	// ---------- METHOD 1 (CLEANED UP) ----------
	return str.split('').reverse().join('');
	// One one line:
	const reverseString = (str) => str.split('').reverse().join('');

	// ---------- METHOD 2 ----------
	// Use a for loop - decreasing array
	let revString = '';
	for (let i = str.length - 1; i >= 0; i--) {
		revString = revString + str[i];
	}
	return revString;

	// ---------- METHOD 3 ----------
	// Use a for loop - increasing array
	let revString = '';
	for (let i = 0; i <= str.length - 1; i++) {
		revString = str[i] + revString;
	}
	return revString;

	// ---------- METHOD 4 ----------
	// Use a for of loop
	let revString = '';
	for (let character of str) {
		revString = character + revString;
	}
	return revString;

	// ---------- METHOD 5 ----------
	// Use a forEach loop
	let revString = '';
	str.split('').forEach((character) => {
		revString = character + revString;
	});
	return revString;

	// ---------- METHOD 5 (CLEANED UP - USING ES6) ----------
	let revString = '';
	str.split('').forEach((character) => (revString = character + revString));
	return revString;

	// ---------- METHOD 6 ----------
	// Use reduce
	// Use .split to turn it into an array
	// Call reduce (takes in a function)
	// Function takes in a revString and character paramter
	// Also takes a second paramter of what we want to start with
	// In this case, an empty string: }, ''); at the bottom
	return str.split('').reduce((revString, character) => {
		return character + revString;
	}, '');

	// ---------- METHOD 6 (CLEANED UP - USING ES6) ----------
	return str.split('').reduce((revString, character) => character + revString, '');
}

// Call the function
reverseString('hello');
reverseString('canada');
reverseString('nick');
