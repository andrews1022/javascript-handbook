// ----------------- Intro -----------------
// For objects, 2 possible ways of interaction are:
// Object.property // access a property of the object
// Object.method() // access a function. for objects, they are known as methods instead

// Using methods on a string
const s1 = 'Hello there';
console.log(s1.toUpperCase());
// 'Hello there' is primitive, it's not an object
// But once we call a method on it, such as toUpperCase(), JS behind the scenes adds a wrapper

// You can create strings as objects
const s2 = new String ('Hello there'); 

// Checking the type of these:
console.log('s1 type: ', typeof s1)
console.log('s2 type: ', typeof s2)

// The window object
// It is the parent object of everything
console.log('Window object', window);
// A common one is 
// window.alert(1);
// But since window is the absolute parent element, so anything with window., you don't neeed to.
// So you could just use
// alert(1);

// Another example:
console.log(navigator);
console.log(navigator.geolocation);


// ----------------- Object Literals -----------------
// Let's create a book
const book1 = {
  // Properties, which are just key value pairs
  title: 'Adventures of Huckleberry Finn',
  author: 'Mark Twain',
  year: '1884',

  // You can also have functions (known as methods) inside of an object:
  getSummary: function() {
    return `${this.title} was written ${this.author} in ${this.year}`;
    // 'this' refers to this specific object (book1)
    // and 'this' refers to it's current environment
  }
}
// Access each property:
console.log('Book object: ', book1);
console.log('Book title: ', book1.title);
console.log('Book author: ', book1.author);
console.log('Book year: ', book1.year);
console.log('Call getSummary method:', book1.getSummary());
console.log('See all the values of an object: ', Object.values(book1)); // returns an array
console.log('See all the propeties of an object: ', Object.keys(book1)); // returns an arrayarray

// Create a new book - use constructors (see 02-constructor.js)
