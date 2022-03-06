// ---------- PASSING FUNCTIONS AS ARGUMENTS ----------
// Nearly everything in JavaScript is an object, including functions!
// Some facts about functions
// 1) A function is an instance of the Object type
// 2) A function behaves like any other object
// 3) We can store functions in a variable
// 4) We can pass a function as an argument to another function
// 5) We can also return a function from another function
// And because of all this, we say in JavaScript we have first class functions

// Example of passing a function as an argument
// Let's create some arrays filled with values that we want to perform some calculations on. A good example of this is an array of birth years
var years = [1990, 1965, 1937, 2008, 1992];
// Best practice here would be to create a function that will receive an array (arr) an return a new result array and do the calculations based on a function (fn) that we pass into the calculation function
function arrayCalc(arr, fn) {
	// Here, we will simply loop over the array and return a result
	// First, we create a new empty array
	var arrRes = [];

	for (var i = 0; i < arr.length; i++) {
		// Inside the loop, we will then use the function that we passed in, and push the result into our arrRes array
		arrRes.push(fn(arr[i]));
		// We do we want to push?
		// We want to push the result of our called fn function, and pass in the current element of our input array into this function
	}

	// Return the result array
	return arrRes;
}

// Let's now write some simple functions that ONLY perform simple tasks
// First, a calculateAge function
function calculateAge(el) {
	return 2020 - el;
}

// Call the function
var ages = arrayCalc(years, calculateAge);
console.log(ages);

// Another example
function isFullAge(el) {
	return el >= 18; // return a true or false value
}

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

// 3rd example, determine their maximum heart rate, which is the highest heart rate measured in beats per minute (bpm) that a person can reach while exercising
function maxHeartRate(el) {
	// if (el >= 18 && el <= 81) {
	//   return Math.round(206.9 - (0.67 * el));
	// } else {
	//   return -1;
	// }
	var hr = el >= 18 && el <= 81 ? Math.round(206.9 - 0.67 * el) : -1;
	return hr;
}

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);

// ---------- FUNCTIONS RETURNING FUNCTIONS ----------
// let's now talk about functions returning functions.

// And to learn how to do that, let's create a function that creates different interview questions for different jobs.
// For each job, we will return the function that builds a string using the person's name as an input.
// So basically, a function returning another function.
function interviewQuestion(job) {
	// In here, according to each of the different jobs, we will return a different function which will then log a question to the console
	if (job === 'designer') {
		return function (name) {
			console.log(name + ', can you please explain is UX design is?');
		};
	} else if (job === 'teacher') {
		return function (name) {
			console.log(name + ', what subject(s) do you teach?');
		};
	} else {
		return function (name) {
			console.log('Hello ' + name + ', what do you do?');
		};
	}
}
// This function here will not just return a simple value as we usually do with functions
// Instead, it returns an entire function that we can then use later, and this is possible because functions are always first class functions in JavaScript, because they are effectively objects
// So, we simply actually return an object here, an object that happens to be a function

// Now let's use it:
var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Jane');

// We can actually call the returned function in the same line, like so:
interviewQuestion('teacher')('Dave');

// Practice
function degrees(deg) {
	if (deg === 'CS') {
		return function (name) {
			console.log(`With a degree in ${deg}, ${name} could be a software engineer!`);
		};
	} else if (deg === 'MBA') {
		return function (name) {
			console.log(`With an ${deg}, ${name} could be a business analyst!`);
		};
	}
}

degrees('MBA')('Andrew');
degrees('CS')('Andrew');
