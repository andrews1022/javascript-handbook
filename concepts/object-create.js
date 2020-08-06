// ---------- EXAMPLE #1 ----------
// Object.create
// Things are a bit different with Object.create
// First, we define an object that will act as the prototype and then create a new object based on the prototype
// Recreate our Person example, first writing the prototype as a simple object
var personProto = {
  calculateAge: function () {
    console.log(2020 - this.yearOfBirth);
  },
};

// Now let's create our john object
// We simply say Object.create, and then we simply pass it the object that we define to be the prototype object, which will be personProto.
var john = Object.create(personProto);
console.log(john);
// While empty now, we can see the calculateAge method in the prototype
// Now we can add data to our john object
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

// console.log(john); // Now this looks more familiar

// But this way isn't ideal, as we had to manually add all the properties
// Let's try it a different for another object, because Object.create accepts a second parameter, which is an object specifying the data that we want to have in the object
var jane = Object.create(personProto, {
  // The formatting/syntax is odd, but there is no way around it
  name: { value: 'Jane' },
  yearOfBirth: { value: 1969 },
  job: { value: 'designer' },
});

console.log(john);
console.log(jane);
// We can see that john and jane both have the same prototype, as both have the calculateAge method, and each have their own type of data

// So, the difference between Object.create and the constructor function is that Object.create builds an empty object that inherits directly from the one we passed into the first argument
// On the other hand, the constructor function, the newly created object, inherits directly from the constructor's prototype property

// Actually, one of the biggest benefits of object.create is that it allows us to implement a really complex inheritance structure in an easier way than function constructors because it allows us to directly specify which object should be a prototype.

// Function constructors and object.create will be the most common ways of creating objects that you will find when you're looking for tutorials on the web.

// The most popular, though, is still the function constructor, and so that's the one that we're going to use mostly in the rest of this course.

// ---------- EXAMPLE #2 ----------
// Object Of Protos
const bookProtos = {
  getSummary: function () {
    return `${this.title} was written ${this.author} in ${this.year}`;
  },

  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  },
};

// Create the object
const book1 = Object.create(bookProtos);

// Add properties
book1.title = 'War and Peace';
book1.author = 'Leo Tolstoy';
book1.year = '1869';

// Another one...
const book2 = Object.create(bookProtos, {
  title: { value: 'Hamlet' },
  author: { value: 'William Shakespeare' },
  year: { value: '1600' },
});

console.log(book1);
console.log(book2);
