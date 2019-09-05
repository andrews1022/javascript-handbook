// --------------- OBJECT SPREAD OPERATOR ---------------
// Our basic object of animals and their ages:
const animalAges = {
  tiger: 12,
  lion: 5,
  monkey: 2
}

// Destructure it:
const {
  tiger,
  ...rest
} = animalAges;

// Calling tiger in the console gets: 12
// Calling rest in the console gets: {lion: 5, monkey: 2}

// Same can be done for arrays:
const numbersArray = [1, 2, 3, 4, 5];

function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}
sum(...numbersArray); // gives the answer, which is 15
// Here we are able to spread the array over the parameters