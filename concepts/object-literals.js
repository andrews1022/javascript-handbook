// Object literals can also be known as key value pairs
// This syntax using the '= { }' defines an object literal

// ---------- EXAMPLE #1 ----------
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 33,

  // You can have arrays inside your object
  hobbies: ['acting', 'movies', 'web development'],

  // You can have an object within an object, which is known as an embedded or nested object
  address: {
    street: '124 Main Street',
    city: 'Miami',
    province: 'FL'
  },

  // You can even have functions inside your object
  getBirthYear: function () {
    // And to access another property within the object, use the 'this' keyword
    return 2019 - this.age;
  }
};

// See it in the console
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
const { firstName, lastName } = person;
console.log(firstName);

// Create a destructured variable from the nested object:
const {
  address: { city }
} = person;
console.log(city);

// Add a property to the object:
person.emailAddress = 'fakeemail@gmail.com';
console.log(person);

// ---------- EXAMPLE #2 ----------
// Let's create a book
const book1 = {
  // Properties, which are just key value pairs
  title: 'Adventures of Huckleberry Finn',
  author: 'Mark Twain',
  year: '1884',

  // You can also have functions (known as methods) inside of an object:
  getSummary: function () {
    return `${this.title} was written ${this.author} in ${this.year}`;
    // 'this' refers to this specific object (book1)
    // and 'this' refers to it's current environment
  }
};
// Access each property:
console.log('Book object: ', book1);
console.log('Book title: ', book1.title);
console.log('Book author: ', book1.author);
console.log('Book year: ', book1.year);
console.log('Call getSummary method:', book1.getSummary());
console.log('See all the values of an object: ', Object.values(book1)); // returns an array
console.log('See all the propeties of an object: ', Object.keys(book1)); // returns an arrayarray

// ---------- EXAMPLE #3 ----------
const person = {
  // In here, we put key value pairs
  // firstName is the key, 'Steve' is the value
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports', 'movies'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function () {
    // To access another property within the object, use the 'this' keyword
    return 2019 - this.age;
  }
};

// Variable named val to be changed as you work your way down
let val;

val = person;
console.log(val);

// Get a specific value (RECOMMENDED WAY)
val = person.firstName;
console.log(val);

// Another way of doing it
val = person['lastName'];
console.log(val);

// Get age value
val = person.age;
console.log(val);

// Get hobbies value
val = person.hobbies;
console.log(val);

// Get sports value from hobbies array
val = person.hobbies[1];
console.log(val);

// Access state from nested address object
val = person.address.state;
console.log(val);

// Access city from nested address object using alternate method
val = person.address['city'];
console.log(val);

// Call getBirthYear function
val = person.getBirthYear();
console.log(val);

// ---------- EXAMPLE #4 ----------
// You can also create an array of objects, like so
const people = [
  { name: 'John', age: 30 },
  { name: 'Mike', age: 23 },
  { name: 'Tom', age: 25 }
];

// Loop through the array of objects and get the current name
for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
