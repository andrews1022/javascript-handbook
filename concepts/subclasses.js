// Subclasses are essentially prototypal inheritance in ES6 classes
// We can create, for example, a 'Person' class and then create a subclass called 'Customer' and then extend the Person class to it

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

// To extend a class, simply use the 'extends keyword'
// Here, we extend the above Person class to to this Customer class
class Customer extends Person {
  constructor(firstName, lastName, phoneNumber, membershipType) {
    // We use the super() function to call the parent constructor (in this case, Person)
    // Again, te constructor funciton is where we define the initial properties that we want our object to have
    // We need to pass in the parameters from the parent constructor
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
