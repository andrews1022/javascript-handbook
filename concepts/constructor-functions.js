// Constructor Functions
// We can construct objects using a constructor function

// Creating a Person object
// Note below that Person starts with a capital P -> when you create a constructor function it should be a capital letter
// For parameters, you want to pass in the properties you want to be ablet to set

// Constructor function
function Person(firstName, lastName, dateOfBirth) {
	// When you pass the above parameters in, we want to set them to properties of THIS object. 
	// We do that by using the 'this' keyword
	this.firstName = firstName;
	this.lastName = lastName;
	this.dateOfBirth = dateOfBirth;
}

// From here, we can do what's called 'instantiate an object'
// Here we are creating a custom Person object, which takes in the parameters mentioned above
const person1 = new Person('Paul', 'Newman', '01-26-1925');
console.log(person1);

// We can create as many custom objects as we like
// Here's another example:
const person2 = new Person('William', 'Shatner', '03-22-1931');
console.log(person2);
// You can of course fetch one of the parameters, for example the lastName
console.log(person2.lastName);

// One issue though is that dateOfBirth is enterted as a string, not an actual date. So let's fix that
function Human(firstName, lastName, dateOfBirth) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.dateOfBirth = new Date(dateOfBirth); // Here we use the Date Constructor
}
const human1 = new Human('Marlon', 'Brando', '04-03-1924');
console.log(human1.dateOfBirth); // Now we see this printed as March 27, 1995

// The date object has a bunch of methods you can use. One example
console.log(human1.dateOfBirth.getFullYear());

// Adding methods to the Human Object
function HumanV2(firstName, lastName, dateOfBirth) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.dateOfBirth = new Date(dateOfBirth);

	// We can add methods, which are essentially functions to this person object
	this.getBirthYear = function () {
		return this.dateOfBirth.getFullYear(); // We can still access the objects properties using 'this'
	}

	// Another examaple:
	this.getFullName = function () {
		return `${this.firstName} ${this.lastName}`;
	}
}
const human2 = new HumanV2('Tom', 'Hanks', '07-09-1956');

// We can call .getBirthYear :
console.log(human2.getBirthYear());

// Calling the getFullName function
console.log(human2.getFullName());