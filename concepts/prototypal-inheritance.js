// Prototypal inheritance is essentially "What if we want to have one object or one object type inherit from another?"
// We will create a Person object and then have a customer object that will inherit its prototype.

// Person constructor
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
	return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person('John', 'Doe');
console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phoneNumber, membership) {
	// Let's call our Person constructor function using the .call() function
	// .call() is a function that allows us to call another function from somewhere else in the current context
	// The first parameter of this .call() function is actually the 'this' keyword
	// And then after that we want whatever properties are in the constructor that we're inheriting, in this case it's just firstName and lastName.
	Person.call(this, firstName, lastName);

	// And then after that, whatever extra properties we have for customer, we need to just assign like we would normally.
	this.phoneNumber = phoneNumber;
	this.membership = membership;
}

// Inherit the Person prototype method 'greeting'
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create a customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');
console.log(customer1);
console.log(customer1.greeting());

// Customer greeting
Customer.prototype.greeting = function () {
	return `Hello there ${this.firstName} ${this.lastName}. Welcome to our office.`;
};

console.log(customer1.greeting());
