// Creating objects using the function constructor
// Our favourite John object
var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
};

// Now let's create our blueprint, our Person function constructor
// Convention is to write with a capital letter for function constructor
// Parameters will be the variables we want to set in our object
var Person = function (name, yearOfBirth, job) {
  this.name = name; // The 'name' after the = is what is passed in. this.name is the property itself
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

// Now let's create a new Person object
var john = new Person('John Smith', 1990, 'teacher');
// This is called instantiation because these objects are instances of the Person object

// Breakdown of how this all works:
// First, the new operator
// When we use the new operator, a brand new empty object is created.
// Next, the constructor function, which in this case is Person, is called with the arguments that we specified
// Normally, as we learned previously, the THIS keyword typically points to the global object, which isn't what we want. Instead, the NEW operator takes care of, well, THIS
// It makes it so that the THIS keyword of the function points to the empty object that was created in the beginning by the NEW operator
// And finally if the constructor function does not return anything, and with our Person object that is the case, then the result is simply the object that was created in the first step.
// And this empty object which was created, now has the properties that we defined.
// So the name, yearOfBirth, and job in this case.
// And then finally all of this is simply assigned to the john variable.

// Now let's add inheritance to the Person object
var Person = function (name, yearOfBirth, job) {
  this.name = name; // The 'name' after the = is what is passed in. this.name is the property itself
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

var john = new Person('John', 1990, 'teacher');

john.calculateAge();
// Everything works just fine!

// So let's now create a couple of more objects here for more people.
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');
// Now each of these objects have the calculateAge method, as it was set in the constructor function

// Now in this case it's just one function with one line of code, so this is no big deal.
// But now imagine that we had 20 functions in each object, and that each of them would like have 100 lines of code.
// That would not be very efficient, because then we would have three copies of the exact same thing, right?
// And that is exactly why we use inheritance in the exact same way that we have learned in the last lecture.
// We learned that we have to add all the methods and properties that we want to be inherited into the constructor's prototype property.
// And it sounds difficult, but it's really not.
// So let's do just that

// All we have to do is Person.prototype
Person.prototype.calculateAge = function () {
  console.log(2020 - this.yearOfBirth);
};
// Effectively none of the objects have the calculateAge method really attached to them
// But still, they are going to be able to use it
// They will have access to it because it's in their prototype

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

// While you can add properties using .prototype, more often you will use .protype for functions
// But let's still do that just to see it in action
Person.prototype.lastName = 'Smith';
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

// Now, for some practice! Create your own objects and prototype methods!
