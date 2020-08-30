// Classes are one of the biggest additions to ES6
// Classes don't actually add anything new to the language, they're just syntactic sugar over the way to do prototypal inheritence
// This simply means classes make it easier to implement inheritence and to create objects based on blueprints

// ES5 - using function constructor and create prototype methods
var PersonES5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

// And again, to make all instances of this inherit a calculate age method, we simply add it to the prototype property
PersonES5.prototype.calcAge = function () {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};

var johnES5 = new PersonES5('John Smith', 1990, 'Web Developer');
console.log(johnES5);
console.log(johnES5.calcAge());

// The same thing, but using ES6 Classes
class PersonES6 {
  // All classes MUST the have the constructor method
  // This is where we define the initial properties that we want our object to have
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  // Define the calculate age method, right here in the class
  // And we also we don't need commas, or any other punctuation to separate
  calculateAge() {
    let age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }

  // Another thing that we can do with classes, is to add static methods
  // Static methods are methods that are simply attached to the class, but not inherited by the class instances - objects that we create through that class
  static greeting() {
    console.log('Hey there!');
  }
}
// What we wrote here is the EXACT same as writing above with the function constructor and .prototype

// Create an instance of this class
const johnES6 = new PersonES6('John Doe', 1990, 'Web Developer');
console.log(johnES6);

// Again since we can't use static methods on any instance we create, we simply call it like this
PersonES6.greeting();

// IMPORTANT:
// Class definitions are NOT hoisted
// Unlike function constructors, we need to first implement a class, and only later in our code can we start using it
// Second, we can only add methods to classes, not properties
// But that's not really an issue, because inheriting properties through the object instances is not a best practice anyway
// And so, that's why this rule is now really enforced here in classes

// ---------- EXAMPLE #1 ----------
// Class creation:
// Use the 'class' keyword, and then give it a name using uppercase (best practice)
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
    super(name, type, color);
  }
  sound() {
    console.log(`Moooo I'm ${this.name}, and I'm a ${this.color} ${this.type}!`);
  }
}

const cow = new Mammal('Shelly', 'cow', 'brown');

// ---------- EXAMPLE #3 ----------
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
    this.birthday = new Date(dateOfBirth);
  }

  // Any method you add inside the class gets added to the prototype as well
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const difference = Date.now() - this.birthday.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
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

// ---------- EXAMPLE #5 ----------
// Create Person class
class Person {
  constructor(passedInFullName, passedInMass, passedInHeight) {
    this.fullName = passedInFullName;
    this.mass = passedInMass;
    this.height = passedInHeight;
  }

  calculateBMI() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}

// Instantiate
const amanda = new Person('Amanda Daniels', 64, 1.68);
const claude = new Person('Claude McCoy', 90, 1.57);

console.log(amanda);
console.log(claude);

console.log(`Amanda's BMI is:`, amanda.calculateBMI());
console.log(`Claude's BMI is:`, claude.calculateBMI());

// Check
if (amanda.calculateBMI() > claude.calculateBMI()) {
  console.log(
    `${amanda.fullName}'s BMI of ${amanda.bmi} is higher than claude's BMI of ${claude.bmi}`
  );
} else if (claude.bmi > amanda.bmi) {
  console.log(
    `${claude.fullName}'s BMI of ${claude.bmi} is higher than amanda's BMI of ${amanda.bmi}`
  );
} else if (claude.bmi === amanda.bmi) {
  console.log(
    `Both ${amanda.fullName} and ${claude.fullName} have the same BMI, which is ${amanda.bmi}`
  );
} else {
  console.log('Something is not right here...');
}

// ---------- EXAMPLE #6 ----------
// Create a person object - should have a name and array of bills paid at a restaurant
// Create methods to calculate the tips, average tip, and total amount paid (bill + tip)
// If the bill is less than $50, tip 20%
// If the bill is between $50 and $200, tip 15%
// If the bill is more than $200, tip 10%

class Person {
  // Constructor - passing in a name and array of bill amounts (numbers)
  constructor(passedInFullName, passedInBills) {
    this.fullName = passedInFullName;
    this.bills = passedInBills;
  }

  // Calculate tips
  calculateTips() {
    // Create a new/mapped array based of passed in bills array
    this.tips = this.bills.map((bill) => {
      let tip; // Initialize tip variable

      // Conditions checking current iteration (bill), and setting tip variable accordingly
      if (bill <= 49) {
        tip = 0.2;
      } else if (bill >= 50 && bill <= 200) {
        tip = 0.15;
      } else if (bill >= 201) {
        tip = 0.1;
      }

      // Finally, return each bill iteration amount multipled by the tip amount, then parsed and decimals rounded off
      return parseFloat((bill * tip).toFixed(2), 10);
    });
  }

  // Calculate average tips
  calculateAverageTip() {
    // Initialize some variables
    this.averageTip = 0;
    this.total = 0;

    // Loop through the array, and for each iteration/value, add it on to total
    for (let i = 0; i < this.tips.length; i++) {
      this.total += this.tips[i];
    }

    // After looping, take the total and divide it by the array length, while parsing and rounding of decimals
    this.averageTip = parseFloat((this.total / this.tips.length).toFixed(2), 10);
    return this.averageTip;
  }

  // Calculate total
  calculateTotal() {
    // To calculate the total, map a new array based off the tips array, and then add each tip and each corresponding bill amount together
    this.total = this.tips.map((tip, index) => {
      return tip + this.bills[index];
    });
  }
}

// Instantiate John
const john = new Person('John Doe', [124, 48, 268, 180, 42]);

// Method calls and console logs
john.calculateTips();
console.log('What John tipped:', john.tips);
john.calculateAverageTip();
console.log('What John tipped on average:', john.averageTip);
john.calculateTotal();
console.log('What John paid in total:', john.total);
