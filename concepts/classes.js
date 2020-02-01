// Classes were added in ES6

// ---------- EXAMPLE #1 ----------
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


// ---------- EXAMPLE #2 ----------
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
		console.log(`Moooo I'm ${this.name}, and I'm a ${this.color} ${this.type}!`);
	}
}

const cow = new Mammal('Shelly', 'cow', 'brown');


// ---------- EXAMPLE #3 ----------
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
const book1 = new Book('The Adventures of Tom Sawyer', 'Mark Twain', 1876);
console.log(book1);
console.log(book1.getSummary());

// static needs to be run on the class itself
console.log(Book.topBookStore());


// ---------- EXAMPLE #4 ----------
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dateOfBirth)
  }

  // Any method you add inside the class gets added to the prototype as well
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`
  }

  calculateAge() {
    const difference = Date.now() - this.birthday.getTime();
    const ageDate = new Date(difference)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  // Static methods
  // Good for if it's a stand alone function or method that you want in your class - and isn't really related to anything else within the class
  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person('Mary', 'Williams', 11 - 13 - 1984);

mary.getsMarried('Smith');

console.log(mary);
console.log(mary.greeting());

console.log(Person.addNumbers(1, 2));