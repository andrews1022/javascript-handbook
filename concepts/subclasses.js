// Subclasses is essentially inheritance in ES6 classes
// So we can create for example a person class, and then create a subclass called customer or whatever it is we want to call it, and we can extend the Person class

// ---------- EXAMPLE #1 ----------
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

// Extend this person class to a customer class
class Customer extends Person {
  constructor(firstName, lastName, phoneNumber, membershipType) {
    // We use the super() function to call the parent constructor (in this case, Person)
    // It also needs to pass in the parameters from the parent constructor
    super(firstName, lastName);

    // And anything extra we have to define seperately
    this.phoneNumber = phoneNumber;
    this.membershipType = membershipType;
  }

  static getMembershipCost() {
    return 500;
  }
}

// Instantiate a new customer
const john = new Customer('John', 'Doe', '123-456-7890', 'Standard');
console.log(john);

// Access the greeting() method inside of the Person class
// We can use this because we extended it
console.log(john.greeting());

// Use a Customer specific method
console.log(Customer.getMembershipCost());

// ---------- EXAMPLE #2 ----------
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written ${this.author} in ${this.year}`;
  }
}

// Let's say we want a subclass called Magazine which will have everything Book has, but also a month property
// Magazine Subclass
class Magazine extends Book {
  constructor(title, author, year, month) {
    // In order to call the parent constructor, we need to use a function called super()
    super(title, author, year);
    this.month = month;
  }
}

// Instantiate the Magazine subclass
const mag1 = new Magazine('Time', 'Edward Felsenthal', 1923, 'March');
console.log(mag1);

// Use the getSummary() method on magazine
console.log(mag1.getSummary());

// ---------- EXAMPLE #3 ----------
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

// Create subclass
var AthleteES5 = function (name, yearOfBirth, job, olympicGamesAttended, olympicModalsWon) {
  // Call our super class PersonES5
  PersonES5.call(this, name, yearOfBirth, job);

  // Set others as usual
  this.olympicGamesAttended = olympicGamesAttended;
  this.olympicModalsWon = olympicModalsWon;
};

// Create prototype chain
AthleteES5.prototype = Object.create(PersonES5.prototype);

// Create a method just for the AthleteES5 object
AthleteES5.prototype.wonMedal = function () {
  this.olympicModalsWon += 1;
  console.log(this.olympicModalsWon);
};

var johnAthleteES5 = new AthleteES5('John', 1990, 'Swimmer', 3, 10);
console.log(johnAthleteES5);
// Here we see that our prototype is PersonES5, and that means that the AthleteES5 function constructor's prototype property is the same as PersonES5's prototype property

johnAthleteES5.calcAge();
johnAthleteES5.wonMedal();

// ES6
class PersonES6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    let age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
}

// Create a sub-class
// Simply use the extends keyword, followed up the super class
class AthleteES6 extends PersonES6 {
  constructor(name, yearOfBirth, job, olympicGamesAttended, olympicModalsWon) {
    // We use the super function to call the super class
    // No need to set the this keyword
    super(name, yearOfBirth, job);
    this.olympicGamesAttended = olympicGamesAttended;
    this.olympicModalsWon = olympicModalsWon;
  }

  wonMedal() {
    this.olympicModalsWon += 1;
    console.log(this.olympicModalsWon);
  }
}

const johnAthleteES6 = new AthleteES6('Mark', 1992, 'Swimmer', 3, 10);
johnAthleteES6.wonMedal();
johnAthleteES6.calculateAge();
