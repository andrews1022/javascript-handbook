// Simple if, if else, else statement
const a = 5;

if (a === 10) {
	console.log('a is 10');
} else if (a > 10) {
	console.log('a is greater than 10')
} else {
	console.log('a is less than 10');
}

// Using == will not match the data types, just the value. Even if we change a = '10', this will still be true
// Using ===, try with 10 as '10', and it will not print. Because === also matches the data types