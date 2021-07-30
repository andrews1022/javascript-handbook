// Code from previous lecture:
var Person = function (name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

Person.prototype.calculateAge = function () {
	console.log(2020 - this.yearOfBirth);
};

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

// If we console.log our instantiated john object...
console.log(john);
// We see it comes with something called the _proto_
// This is the prototype of the john object, which is the prototype property of the Person constructor
// You'll see we have the calculateAge method which we added to our prototype
// So we if take a look at this as well in the console:
console.log(Person.prototype);
// Here we see these two are the same

// And to prove that John's prototype is in fact the prototype property of the Person object
console.log(john.__proto__ === Person.prototype); // true

// Now if we look at the __proto__ property of john, we see there is also a prototype property here as well
// Here we see that this is the prototype of the Object constructor
// As mentioned before, all of the objects are actually instances of the Object object
// Here we have a bunch of methods that are associated to the prototype property of the object function constructor.
// And that's because the person function constructor is in fact an instance of the object function constructor.
// And that's why we can see this whole prototype chain

// One of the more useful methods of the Object constructor is hasOwnProperty
// We can use hasOwnProperty to check if an object has a property or not, like this:
console.log(john.hasOwnProperty('job')); // true
console.log(john.hasOwnProperty('lastName')); // false
// The second console.log returns false because that is not John's own property, it is a property inherited from from the prototype

// instanceof operator
console.log(john instanceof Person); // true
// john is of course an instance of Person because we created it through the person function constructor, so get true

// Remember that almost everything in JavaScript is an object?
// A basic array
var x = [2, 4, 6];
console.info(x);
// Remember that arrays are objects too, so we can inspect this inside the console and see that is ALSO has its own __proto__

// So we can see all the array methods we can use, some of which we already have, like push, pop, unshift, and length property

// This is because it is an instance of the Array object
// And that's why we can use them
// So now you will never wonder why we could simply call the push method or something like this on all of our arrays, so now you know
// It's because of the prototype chain
// So all the arrays that you will ever create will always have access to these methods because they are stored in their prototype
// And that is how useful inheritance really is
