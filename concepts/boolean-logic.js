// Boolean logic is a branch of computer science that deals with true and false values, and it's actually something quite important in coding in general

// There are several logical operators that deal with true and false values
// The most important ones are the NOT, AND, and OR operators
// Assume we have variables a & b
// AND: && -> true if a AND b are true
// OR: || -> true if a OR b is true
// NOT: ! -> inverts the true/false value. so if a was true, check if false, vice versa

var firstName = 'John';
var age = 30;

// Using a if / else if / else statement
if (age < 13) {
  console.log(`${firstName} is a boy`);
} else if (age >= 13 && age <= 20) {
  console.log(`${firstName} is a teenager`);
} else if (age >= 21 && age <= 30) {
  console.log(`${firstName} is a young man`);
} else {
  console.log(`${firstName} is a man`);
}

// Example:
var age = 16;
age >= 20; // false
age < 30; // true
!(age < 30); // false

age >= 20 && age < 30; // false
age >= 20 || age < 30; // true
