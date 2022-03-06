// Hoisting in practice
function calcAge(year) {
  console.log(2016 - year);
}

calcAge(1990);

// This is how we've doing things for now, but we can actually call our function before we even declare it, and it still works

calcAge(1965);

function calcAge(year) {
  console.log(2016 - year);
}

// This is hoisting, in practice
// In the creation phase of the execution context, which is, in this case, the global execution context, the function declaration calculateAge is stored in the variable object and even before the code is executed.
// And this is why when we then enter the execution phase, the calculate age function is already available for us to use it.
// So we don't have to first declare the function and then use it, but we can also first use it like this and only later in our code declare it.

// Now remember another thing that I said in the last lecture, which was that this only works for function declarations
// But there is also something called Function Expressions
// So let's see how this works out with function expressions

var retirement = function (year) {
  console.log(65 - (2020 - year));
};

retirement(1992);

// But what happens if we do it the other way around?
retirement(1992);

var retirement = function (year) {
  console.log(65 - (2020 - year));
};

retirement(1992);

// We get a TypeError, saying 'retirement is not a function'
// This is because again hoisting with funcitons ONLY works for function declarations

// Variables with hoisting
console.log(age); // undefined
var age = 23;
console.log(age); // 23

// We have undefined, and that's exactly how hoisting works with variables
// Because remember, in the creation phase of the variable object, what happens is that the code is scanned for variable declarations and the variables are then set to undefined

function foo() {
  console.log(age); // logs undefined
  var age = 65;
  console.log(age); // logs 65 from function scope
}
foo();
console.log(age); // Logs from global scope
