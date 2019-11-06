// Constructor (ES5), needs an uppercase
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary Prototype Method - arrow function doesn't work
Book.prototype.getSummary = function () {
  return `${this.title} was written ${this.author} in ${this.year}`;
}


// Create a magazine constructor, but inherit the properties of 'Book'
function Magazine(title, author, year, month) {
  // Call the book object and take in the instance itself
  Book.call(this, title, author, year);

  this.month = month;
}

// In order to inherit the prototype method of Book
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine('Time', 'Edward Felsenthal', 1923, 'March');

// Set the constructor to Magazine instead of book
Magazine.prototype.constructor = Magazine;

console.log(mag1);
console.log(mag1.getSummary());