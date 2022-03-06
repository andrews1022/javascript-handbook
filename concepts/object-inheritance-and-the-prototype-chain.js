// In JavaScript, we have two main types of values, primitive and objects

// Primitive data types are:
// Numbers, Strings, Booleans, undefined, and null

// Everything else is an object
// Arrays, functions, objects, dates, wrappers for numbers, strings, and booleans

// In fact, even simple things like functions, arrays, or dates are all objects in JavaScript
// That's because in JavaScript objects are not just for storing a bunch of data, like we have been doing, but for really complex things under the surface

// Now, let's look at object oriented programming as a whole
// In very simple terms, object oriented programming makes heavy use of objects, properties, and methods
// These objects interact with one another to form complex applications
// We use objects to store data, structure our code, and keep it clean

// There is a special type of object, essentially a blueprint for to create other objects
// In other programming languages, this is typically called a class, but in JavaScript we like to call it a constructor or prototype
// With a constructor, we can create as many instances of an object as we want

// Now, let's take this a step further, and talk about inheritance
// In simple terms, inheritance is when one object is based on another object.
// It's when one object gets access to another object's properties and methods.

// Let's say we have a Person object, that has properties of name, yearOfBirth, job, and a method to calculateAge

// Now say we have an Athlete object
// There are just some particular properties and methods for an athlete, like for example how many times they've participated in the Olympics, or how many medals they have won.
// So when we define the blueprint, the constructor, for an athlete, then why repeat the same stuff that we have in our Person constructor?
// An athlete also has a name, year of birth, and job, right?

// So what we can do is to use INHERITANCE

// We make the Athlete object inherit the properties and methods from the Person object, so then the Athlete not only has access to its own properties and methods but also the ones from the Person object.

// This allows us to write less code and make more logical programs.
// So this is a broad overview of how inheritance works in theory, and in all programming languages that have object-oriented futures.

// So let's now see how JavaScript in particular handles inheritance with our Person and John examples.

// JavaScript is a prototype-based language, which means that inheritance works by using something called prototypes.

// In practice, it means that each and every JavaScript object has a prototype property which makes inheritance possible in JavaScript.

// So again, inheritance is made possible through the prototype property that every object has.

// Now all of this may look a bit confusing at first sight, but don't worry, because we will do everything in code later as well.

// But before doing that, it's super important the we get at least a visual overview of what happens behind the scenes.

// Alright, now, how does inheritance actually work?

// To better understand this, let's go back to our Person example, where the Person object is the constructor and John is one of the instances.

// Now, if we want John to inherit a method or a property from the Person object, we have to add that method or property to the Person's prototype property

// So in this example, we have the calculateAge method in the Person's prototype property, and therefore john inherits the method, and can then call it.

// And any other object created by the Person constructor would inherit this method as well.

// So, again, the prototype property of an object is where we put methods and properties that we want other objects to inherit.

// What is really important to note here is that the Person prototype is not the prototype of the Person object itself, but of all instances that are created through the Person blueprint, like, for example, John.

// So in other words, the Person's prototype property is the prototype of John.

// And that's not even all, because the Person object itself is an instance of an even bigger constructor, which is the Object object.

// Yeah, that sounds a bit crazy, but this is actually how it works.

// Each and every object that we ever create is an instance of the Object constructor, which has a bunch of methods in its prototype property.

// And, as you can guess, the Person object inherits these methods and can call them.
// Plus, the John object also inherits these methods and can also use them.

// And, with that, we have actually explained the prototype chain.

// So, the prototype chain is what makes  all this inheritance possible, and here is how it works.
// When we try to access a certain method, or property on an object, JavaScript will first try to find that method on that exact object.
// But if it cannot find it, it will look in the object's prototype, which is the prototype property of its parent.
// So it moves up in the prototype chain.
// If the method is still not there, this continues until there is no more prototype to look at, which is null.
// Null is the only one that has no prototype, and is therefore the final link in the prototype chain.
// And in this case, undefined is returned.
// This is the reason why, for example, the John object could call the hasOwnProperty method that is stored in the Object Prototype property.

// ----- SUMMARY -----
// Every JavaScript object has a prototype property, which makes inheritance possible in JavaScript.
// The prototype property of an object is where we put methods and properties that we want other objects to inherit.
// The constructor's prototype property is not the prototype of the Constructor itself, but it's the prototype of all instances that are created through it.
// When a certain method, or property, is called, the search starts in the object itself, and if it cannot be found there, the search moves up on to the object's prototype.
// This continues until the method is found, and this is the prototype chain.
