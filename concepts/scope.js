// Root/Parent Scope:
function aa() {
	console.log('Testing');
}
aa();
// Can be run with the window object
window.aa();

// Limited Scope
function bb() {
	let a = 'Hello!';
}
console.log(a); // this will not work, as a's scope is only inside the function. You must the console.log to the inside of the function:
function bb() {
	let a = 'Hello!';
	console.log(a);
}

// Now if we create this variable
let b = 'Can I access this variable?';

// The answer is yes, as it was created in the root scope
// Any variables defined in the root scope can be accessed from anywhere
function bb() {
	let a = 'Hello!';
	console.log(a);
	console.log(b);
}


// EXAMPLE 3
let c = 'Can I access this?';

function cc() {
	c = 'Hello!';
}
// This example works because c is the same variable, and was defined in the root scope


// EXAMPLE 4

// We declare a variable called sweet and assign it a value of 5
let sweet = 5; // Root scope

// We created three functions and each of these functions create their own scope and each of these functions 'console.log(sweet)'.
// But what sweet means in each one of them is different based on their scope.
// Function 1
function sweetFunc() {
	// child scope
	let sweet = "Hello!";
	console.log(sweet);
}

// Function 2
function sweeterFunc() {
	// child scope
	let sweet = "Bye";
	console.log(sweet);
}

// Function 3
function sweetestFunc() {
	// child scope
	sweet = "AHHHH!!!!";
	console.log(sweet);
}

console.log(sweet); // this will log 5

// Now if we run all of this
console.log(sweet); // will log 5
sweetFunc(); // will log Hello!
sweeterFunc(); // will log Bye
sweetestFunc(); // will log AHHHH!!!!

// BREAKDOWN OF ABOVE:
// First we 5 again
// Then we see in first function we have the variable sweet equals to "Hello!" because well we've created a new scope and within this function lives variable fun that has " Hello!". So that gets overridden.
// And then we have the second function that has "Bye" again same thing as above because we have a new scope with a new variable where sweet equals "Bye".
// And then the third one we see that we have sweet equals "AHHHH!!!!". And again, that gets changed, and that equals the fun.



// RECAP WITH SIMPLER FUNCTION
let dope = 5;

function dopestFunc() {
	// child scope
	console.log(dope);
}

// When somebody runs this function:
// JavaScript reads console.log(dope);
// It then asks, do we know dope?
// The function will say no, but you should ask my parent
// So now we go into outside of the function, and in this case the roots scope.
// Now ask again, do you know dope?
// They will say yeah we do! We have  variable named dope which is assigned the value of 5
// So now 'console.log' can log 5. 
// NOTE:
// But if 'dope' doesn't exist, we asked the parent and the parent says, Sorry I have no idea what 'dope' is. Then we get, well we get an error. So, the last check is always the root scope.