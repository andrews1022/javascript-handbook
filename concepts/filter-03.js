// ------------------------------ PART 3 ------------------------------

// Array of Ages
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// As the name suggests what it does is that filter allows us to filter things out from the array
// Using the ages array above, let's filter out all ages 21 and over

// But first, let's see that using a standard for loop
// First we need an empty array
let canDrink = [];

// Next, our for loop
for (let i = 0; i < ages.length; i++) {

	// If ages, current iteration, is greater than or equal to 21
	if (ages[i] >= 21) {

		// Push on to it/add onto canDrink array
		canDrink.push(ages[i]);
	}
}
// Console log the canDrink array
console.log('for loop canDrink', canDrink);

// Now, lets use filter instead
// First define a variable
// Then it takes in a function
const canDrinkTwo = ages.filter(function (age) {
	// Test the age parameter
	if (age >= 21) {
		// All you have to do is return true
		return true;
	}
});
console.log('filter canDrink', canDrinkTwo);

// We can improve this, and put it all onto one line using ES6 Arrow Functions
// Put in the parameter of age, and insert arrow function, and the condition of age is equal to or greater than 21
const canDrinkArrow = ages.filter(age => age >= 21);
console.log('filter canDrink arrow ES6', canDrinkArrow);