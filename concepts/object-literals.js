// Object literals can also be known as key value pairs

// For example:
const person = {
    firstName: 'Andrew',
    lastName: 'Shearer',
    age: 30,
    hobbies: ['metal music', 'movies', 'web development'],

    // You can have embedded/nested objects (object within an object):
    address: {
        street: '124 Main Street',
        city: 'Vancouver',
        province: 'BC'
    }
}
console.log(person);

// Access a single value within the object:
console.log(person.firstName);

// Access multiple values:
console.log(person.firstName, person.lastName); // use the comma as a separator

// Access a single value from the array:
console.log(person.hobbies[1]); // select the array, then select the index location

// Access a value within the nested object
console.log(person.address.city); // use the dot(.) selector multiple times

// Destructuring (create variables from the object literal)
const {
    firstName,
    lastName
} = person;
console.log(firstName);

// Create a destructured variable from the nested object:
const {
    address: {
        city
    }
} = person;
console.log(city);

// Add a property to the object:
person.emailAddress = 'fakeemail@gmail.com';
console.log(person);