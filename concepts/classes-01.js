// ------------------------------ PART 1 ------------------------------

// Classes were added in ES6

// Class creation:
// Use the 'class' keyword, and then give it a name
class HumanBeing {
	// Create a method called a 'constructor', and assign properties just like before
	constructor(firstName, lastName, dateOfBirth) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.dateOfBirth = new Date(dateOfBirth);
	}

	// Any method we want to add, we can simply add it here:
	getBirthYear() {
		return this.dateOfBirth.getFullYear();
	}

	// And here:
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

// Instantiate the object
const humanBeing1 = new HumanBeing('Tiny', 'Fey', '05-18-1970');
const humanBeing2 = new HumanBeing('Ben', 'Stiller', '11-30-1965');

// Log it
console.log(humanBeing2.getFullName());
console.log(humanBeing1);