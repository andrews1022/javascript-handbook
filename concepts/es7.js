// Where ES6 introduced a whole ton of new features, ES7 only introduced two.

// The first, includes()
// The second, exponential operator

// ------------------------------- INCLUDES -------------------------------
// includes() is used for strings
'Heeelloooooooooo'.includes('o');
// Comes back as true

// Includes can also be used on arrays
const pets = ['cat', 'dog', 'fish', 'lizard'];
pets.includes('dog');
// Comes back as true as well
pets.includes('bird');
// Comes back as false, because we of course don't have a bird in our pets array

// ------------------------------- EXPONENTIAL OPERATOR -------------------------------
// Let's create a function that squares something
// This means x to the power of 2;
const squares = (x) => x ** 2;
squares(2); // 4
squares(3); // 9
squares(4); // 16
squares(5); // 25

// If we want to cube something
const cubed = (y) => y ** 3;
cubed(2); // 8
cubed(3); // 27
cubed(4); // 64
cubed(5); // 125
