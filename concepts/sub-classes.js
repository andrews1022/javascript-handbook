// Subclasses is essentially inheritance in ES6 classes
// So we can create for example a person class, and then create a subclass called customer or whatever it is we want to call it, and we can extend the Person class

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`
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

  static getMembershipCost(){
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