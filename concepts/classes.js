// CLASSES
// Added in ES6
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