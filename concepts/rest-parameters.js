// Rest parameters allow us to pass an arbitrary number of arguments into a function, and to use these arguments in that function
// Rest parameters look exactly the same as the spread operator, but they are very different
// They use the same notation with the three dots, but actually rest parameters are the exact opposite of the spread operator
// And that's because the spread operator takes an array, and transforms it into single values, while the rest parameters receive a couple of single values and transforms them into an array when we call a function with multiple parameters

// Suppose we want to create a function that receives an arbitrary number of years, and then prints to the console whether each person corresponding to these years is of full age or not

// ES5 Way
function isFullAgeES5() {
	// In ES5, if we want to receive an undefined number of arguments, then we simply don't define any parameters for our function, and then just use the 'arguments' keyword
	// And remember the 'arguments' keyword is very similar to the 'this' keyword
	// It's a variable that each execution context gets access to
	console.log(arguments);

	// Arguments is not an array, but an array like structure
	// So, we would need to convert it to an array first if we wanted to loop over it
	var argsArr = Array.prototype.slice.call(arguments);

	argsArr.forEach(function (el) {
		console.log(2020 - el >= 18);
	});
}
isFullAgeES5(1990, 2004, 1965, 2018, 1987);

// ES6 Way
// Instead of having no arguments, we use the rest parameter operator
// Then we say the name of the variable
// What this will do is as soon as we call the function, it will transform the arguments, for example the years we enter, it will transform them into an array and then pass it into the function
// And we can then access that years array automatically in the function as we did before
function isFullAgeES6(...years) {
	years.forEach((current) => console.log(2020 - current >= 18));
}
isFullAgeES6(1990, 2004, 1965, 2018, 1987);
// The big difference between the spread operator and the rest parameters is actually the place in which we use them
// The spread operator is used in the function call
// The rest operator is used in the function declaration to exact an arbitrary number of paramters

// Now what we want to change is to accept another parameter which will act as the age limit

// ES5 Way
function isFullAgeES5(limit) {
	var argsArr = Array.prototype.slice.call(arguments, 1); // Exclude the first argument (limit)

	argsArr.forEach(function (el) {
		console.log(2020 - el >= limit);
	});
}
// isFullAgeES5(21, 1990, 2004, 1965, 2018, 1987);

// ES6 Way
// All we have to do the ES6 way is to include the limit, and then our ...years
function isFullAgeES6(limit, ...years) {
	years.forEach((current) => console.log(2020 - current >= limit));
}
isFullAgeES6(19, 1990, 2004, 1965, 2018, 1987);
