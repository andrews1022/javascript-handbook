// -------------------- Context --------------------
// Context vs Scope (lots of confusion between the two)
// Reminder of scope
function b() {
	let a = 4;
}
// Doing console.log(a); will not work, because the variable only lives inside the universe of the function b()

// How is context is different?
// Context tells you where we are, WITHIN the object
// If in the console you enter:
console.log(this);
// We get a printout of the Window Object
// So, what 'this' means, is what is the object environment that we're in right now?
// For the above example, the environment we're currently in is the window object
// The best way to think of it is ask yourself "What is to left of the dot?"
// This is important to Instantiation

// Another example
function a() {
	console.log(this);
}
// We still get window, we're still in the window environment

// Let's use it like this:
const object4 = {
	a: function () {
		console.log(this);
	}
}
// So in the console we run:
object4.a();

// We get 
{
	a: ƒ
}
// So now, 'this' refers to object4, which is the current environment