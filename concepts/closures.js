// To demonstrate the power of closures, we will write a small function that returns another function which calculates how many years we have until retirement
function retirement(retirementAge) {
	var msg = ' years left until retirement';

	return function (yearOfBirth) {
		var age = 2020 - yearOfBirth;
		console.log(retirementAge - age + msg);
	};
}

// And now, let's try to use this function, and, as mentioned above, this returns a function
// We can therefore store the result of calling this function in a variable, and then this variable will be a function itself
var retirementUS = retirement(66);
retirementUS(1990);

// Shorthand way:
retirement(66)(1990);

// BREAKDOWN:
// So we started by calling the retirement function and passed the value of 66
// The function then declares the msg variable and returns the function.
// Then the function finishes, and its execution context gets popped off the stack
// Wwe stored the returned function here in the retirementUS variable
// In the nested function, we use the retirementAge parameter of the outer function here, and also the msg variable that is also declared outside of this anonymous function
// Still, when we run this, this works
// So somehow, we are able to still use these variables even after the retirement function, which declares these variables, already stopped its execution.

// Think about that again...
// Our inner function here is able to use the retirement variable and msg variable of this function here that is already gone.
// It has already returned, but somehow the variables are still there, and THIS is the closure
// So now that we know what a closure is, let's see how and why this actually works behind the scenes

// We can summarize how a closure works like this:
// An inner function always has access to the variables and parameters of its outer function, even after the outer function has returned

// Let's now see how this function that we created can be useful for us
// We can create two different functions for countries with different retirement ages, and use these functions over and over again

// Let's create a retirement function for Germany and Iceland
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

// Now we can go ahead and use these functions for different people in these different countries
retirementGermany(1990);
retirementIceland(1990);

// Challenge: Re-write this function below, but using the power of closures
function interviewQuestion(job) {
	if (job === 'designer') {
		return function (name) {
			console.log(`${name}, can you please explain is UX design is?`);
		};
	} else if (job === 'teacher') {
		return function (name) {
			console.log(`${name}, what subject(s) do you teach?`);
		};
	} else {
		return function (name) {
			console.log(`Hello ${name}, what do you do?`);
		};
	}
}

// Solution
function interviewQuestion(job) {
	return function (name) {
		if (job === 'designer') {
			console.log(`${name}, can you please explain is UX design is?`);
		} else if (job === 'teacher') {
			console.log(`${name}, what subject(s) do you teach?`);
		} else {
			console.log(`Hello ${name}, what do you do?`);
		}
	};
}

interviewQuestion('teacher')('John');
