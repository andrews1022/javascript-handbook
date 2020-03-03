// So we know that functions are a special kind of object, and such as the array objects for example, functions also get a couple of special methods which they inherit from the function constructor object
// So in this lecture we will talk about the powerful call, apply and bind methods
// In a nutshell, these methods allow us to call a function and set the this keyword manually
var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log(`Good ${timeOfDay} ladies and gentlemen! I'm ${this.name}, I'm a ${this.job}, and I'm ${this.age} years old.`);
    } else if (style === 'friendly') {
      console.log(`Hey! What's up? I'm ${this.name}, I'm a ${this.job}, and I'm ${this.age} years old. Have a nice ${timeOfDay}!`);
    }
  }
}

var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer',
  // Now say we want to use the presentation method from the john object
  // We can do so by using the call method
  // The first argument in the call method is to set the this variable
  // Then pass in any other agruments to the parameters you set (SEE BELOW)
}

john.presentation('formal', 'formalmorning');

// ---------- CALL METHOD ----------
// Using call, setting the THIS variable to emily, so we can use john's presentation method for her object as well
john.presentation.call(emily, 'friendly', 'afternoon');
// This is also known as method borrowing

// ---------- APPLY METHOD ----------
// Next is the apply method
// The difference is that the apply method accepts the arguments as an array
// So that's only two arguments, first the this variable, and then an array where all the other arguments go.
// So it would be something like this:
john.presentation.apply(emily, ['friendly', 'afternoon']);


// ---------- BIND METHOD ----------
// The bind method is very similar to the call method; it also allows us to set the this variable explicitly.
// However, the difference here is that bind doesn't immediately call the function, but instead it generates a copy of the function, so that we can store it somewhere.
// And that can actually be extremely useful, to create functions with preset arguments.
// So let's see how

// First, create a variable because as we said, the bind method will return a function, so we have to store it that function somewhere
// We're gonna preset the friendly argument so that we don't have to input it again and again
var johnFriendly = john.presentation.bind(john, 'friendly');
// Note that we do not pass in an argument for the timeOfDay
// We can do so below when we call the johnFriendly function
johnFriendly('morning');
johnFriendly('night');
// What we did here by calling the johnFriendly function is knwon as currying
// Currying is just a technique in which we create a function based on another function, but with some preset parameters, which is exactly what we did here
// We can of course do the same thing for Emily
var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

// Let's look at a more real world example, using code from a previous lecture:
var years = [1990, 1965, 1937, 2008, 1999];

function arrayCalc(arr, fn) {
  var arrRes = [];

  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }

  return arrRes;
}

function calculateAge(el) {
  return 2020 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

// Determine the ages
var ages = arrayCalc(years, calculateAge);

// The problem with our isFullAge function is that it accepts to arguments
// But our arrayCalc function can only use it with one agruments
// The solution is we can bind the isFullAge function with a preset argument of limit for 20, which essentially creates a copy of the isFullAge function that we can use for arrayCalc
// For setting this in this example, it doesn't matter, so we just use the this keyword on it's own
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);