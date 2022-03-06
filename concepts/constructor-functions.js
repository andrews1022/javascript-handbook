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
  };

  // Another examaple:
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
const human2 = new HumanV2('Tom', 'Hanks', '07-09-1956');

// We can call .getBirthYear :
console.log(human2.getBirthYear());

// Calling the getFullName function
console.log(human2.getFullName());

// ---------- EXAMPLE #2 ----------
// A basic object literal
const brad = {
  name: 'Brad',
  age: 30
};
console.log(brad);
console.log(brad.age);

// Creating multiple instances of this same object like this would be tedious and repetitive

// So we create a constructor function
// Note that the name of a constructor function typically starts with a capital letter
function Person(name, dateOfBirth) {
  this.name = name;
  this.birthday = new Date(dateOfBirth);

  // Calcuate age from a birthday
  this.calculateAge = () => {
    const difference = Date.now() - this.birthday.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

let brad = new Person('Andrew', 'October 22, 1992');
console.log(brad.calculateAge());

// Instantiate an object (create new one)
let brad = new Person('Brad', 35);
console.log(brad);

let john = new Person('John', 30);
console.log(john);
console.log(`John's age: `, john.age);

// ---------- THIS KEYWORD ----------
// The 'this' keyword is very important
// It refers to the current instance of the object
// It pertains to that function's scope, but also outside of it

// For example, get the window object
console.log(this);
