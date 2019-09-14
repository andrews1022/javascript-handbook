// ------------------------------ PART 1 ------------------------------

// Classes were added in ES6
// Does same thing under the hood as above, however, is done with 'syntactic sugar'

// Class creation:
// use the class keyword, and then give it a name
class HumanBeing {
	// create a method called a constructor, and assign properties just like before)
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
const humanBeing1 = new HumanBeing('Andrew', 'Shearer', '10-22-1992');
const humanBeing2 = new HumanBeing('Aryn', 'Ogilvie', '06-11-1990');

// Log it
console.log(humanBeing2.getFullName());
console.log(humanBeing1);


// ------------------------------ PART 2 ------------------------------

// Create two classes: an Animal class and a Mammal class. 
// Create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
	constructor(name, type, color) {
		this.name = name;
		this.color = color;
		this.type = type;
	}
}

class Mammal extends Animal {
	constructor(name, type, color) {
		super(name, type, color)
	}
	sound() {
		console.log(`Moooo I'm ${this.name} and I'm a ${this.color} ${this.type}`);
	}
}

const cow = new Mammal('Shelly', 'cow', 'brown');


// ------------------------------ PART 3 ------------------------------

// Class (ES6), needs an uppercase
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  // getSummary Prototype Method - arrow function doesn't work
  getSummary() {
    return `${this.title} was written ${this.author} in ${this.year}`;
  }

  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }

  revise(newYear) {
    this.year = newYear;
    this.revise = true;
  }

  // You can see that we have all the above methods in the __proto__ for this class

  // ALSO NOTE: You can have static methods which don't require instantiating the object
  // Example
  static topBookStore() {
    return 'Chapters';
  }
}

// Instantiate Object
const book1 = new Book('Heroes', 'Andrew Shearer', 2013);
console.log(book1);
console.log(book1.getSummary());

// static needs to be run on the class itself
console.log(Book.topBookStore());