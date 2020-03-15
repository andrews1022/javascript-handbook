// Destructuring gives us a very convenient way to extract data from a data structure like an object or an array
// As an example, we have an array filled with some data, and we now want to store each of the elements of that array in a single variable

// ES5 Version
var john = ['John', 26];
var name = john[0];
var age = john[1];


// ES6 Version
const [name, age] = ['John', 26];
// What this is gonna do is it's gonna create a constant called 'name' and a constant called 'age', and then this data will be stored in each of the variables.
console.log(name, age); // John 26


// Destructuring with objects
const obj = {
  firstName: 'John',
  lastName: 'Smith'
}

// The variable names must be the same as the key names
const {
  firstName,
  lastName
} = obj;
console.log(firstName, lastName);

// But if you do want to use variable names that are different from the key names, you can do so like this:
const {
  firstName: a,
  lastName: b
} = obj;
// This means we assign the key firstName to the variable of a, and the key lastName to the variable of b
console.log(a, b); // John Smith


// More practical application - return multiple values from a function
// Let's create a function that returns the age of a person as well as the remaining time until their retirement
function calcAgeAndRetirement(year) {
  const age = new Date().getFullYear() - year;

  return [age, 65 - age];
}

// Use destructuring to store the return into different variables
const [age, retirement] = calcAgeAndRetirement(1992);
console.log(age, retirement);
console.log(`Age: ${age}, Years until retirement: ${retirement}`);


// ---------- EXAMPLE #1 ----------
// Let's use this object as reference:
const obj = {
  player: 'Timmy',
  xpPoints: 100,
  isWizardLevel: false
}

const player = obj.player;
const experience = obj.xpPoints;
const isWizardLevel = obj.isWizardLevel;

// Destructured version
const {
  player,
  experience
} = obj;
// Reads as const, player and experience from the object
// This does the same thing as const player = obj.player; & const experience = obj.xpPoints;
// Steps:
// You just select the properties you want from an object.
// Now we have access to:
const player;
const xpPoints;
// Same goes for isWizardLevel
let {
  isWizardLevel
} = obj;


// ---------- EXAMPLE #2 ----------
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
const {
  firstName,
  lastName,
  age,
  eyeColor
} = person;


// ---------- EXAMPLE #3 ----------
// Assign variables from objects 
// OLD WAY:
var numbers = {
  x: 3.6,
  y: 7.4,
  z: 6.5
}
var x = numbers.x; // x = 3.6
var y = numbers.y; // y = 7.4
var z = numbers.z; // z = 6.5

// DESTRUCTURING WAY:
var {
  x,
  y,
  z
} = numbers;
// This means we're going to create the 3 variables x, y, and z from numbers
console.log(x); // x = 3.6
console.log(y); // y = 7.4
console.log(z); // z = 6.5

// DESTRUCTURING WAY #2:
var {
  x: a,
  y: b,
  z: c
} = numbers;
// This means we're going to get the field 'x' from numbers, and copy the value into 'a'
// And 'y' into 'b', and 'z' into 'c'
// So this:
console.log(b); // b = 7.4


// ---------- EXAMPLE #4 ----------
// Assign variables from nested objects 
var nestObj = {
  start: {
    x: 5,
    y: 6
  },
  end: {
    x: 6,
    y: -9
  }
}
var {
  start: {
    x: startX,
    y: startY
  }
} = nestObj;
console.log(startX);


// ---------- EXAMPLE #5 ----------
// Assign variables from arrays 
const [q, r] = [1, 2, 3, 4, 5];
console.log(q, r); // will log: 1 2

// You can add extra commas to get other values in the array
const [q, , , r] = [1, 2, 3, 4, 5];
console.log(q, r); // will log: 1 4


// ---------- EXAMPLE #6 ----------
// Rest Operator to Resassign Array Elements
const [q, r, ...rest] = [1, 2, 3, 4, 5];
console.log(q, r); // will log: 1 2
console.log(rest); // will log: [3, 4, 5]
// What we did here was variables q & r got the first and second values of the array
// Then, because of the rest operator, which is the three ... , the 'rest' variable gets the rest of the values in the form of an array
// So, [3,4,5] go into the 'rest' variable


// ---------- EXAMPLE #6 ----------
// Pass an Object as a Function's Parameters
const profileUpdate = (profileData) => {
  const {
    name,
    age,
    nationality,
    location
  } = profileData;
  // Do something with these variables
}

// But that can be written like this:
const profileUpdate = ({
  name,
  age,
  nationality,
  location
}) => {
  // Do something with these parameters
}
// Here, we are still passing in a profileData object, but right in the parameter we're destructuring that object into the different variables


// ---------- EXAMPLE #7 ----------
// Destructuring Assignment
let a, b;
[a, b] = [100, 200];

// Rest pattern using the spread operator ...
// Assigns all other/remaining values
[a, b, c, ...rest] = [100, 200, 300, 400, 500];
console.log(a);
console.log(b);
console.log(c);
console.log(rest);

// Also with objects
({
  a,
  b,
  ...rest
} = {
  a: 100,
  b: 200,
  c: 300,
  d: 400,
  e: 500
});
console.log(a, b);

({
  a,
  b
} = {
  a: 100,
  b: 200,
  c: 300,
  d: 400,
  e: 500
});
console.log(a, b);
console.log(rest);


// ---------- EXAMPLE #8 ----------
// Array Destructuring - More Practical Way
const people = ['John', 'Beth', 'Mike'];
const [person1, person2, person3] = people;
console.log(person1, person2, person3);

// Parse array returned from a function
function getPeople() {
  return ['John', 'Beth', 'Mike'];
}

let human1, human2, human3;
[human1, human2, human3] = getPeople();
console.log(human1, human2, human3); // Get the same result as above


// ---------- EXAMPLE #9 ----------
// Object Destructuring
const person = {
  name: 'John Doe',
  age: 32,
  city: 'Toronto',
  gender: 'Male',
  sayHello: function () {
    console.log('Hello there from this object! :)')
  }
}

// Old ES5 Way
const name = person.name,
  age = person.age,
  city = person.city,
  gender = person.gender;

// New ES6 Way w/ Destructuring
const {
  name,
  age,
  city,
  gender,
  sayHello
} = person;
console.log(name, age, city);
sayHello();