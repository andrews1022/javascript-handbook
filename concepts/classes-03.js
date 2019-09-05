// Class (ES6), needs an uppercase
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  // getSummary Prototype Method - arrow function doesn't work
  getSummary() {
    return `${this.title} was written ${this.author} in ${this.year}`;
  }

  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }

  revise(newYear) {
    this.year = newYear;
    this.revise = true;
  }

  // You can see that we have all the above methods in the __proto__ for this class

  // ALSO NOTE: You can have static methods which don't require instantiating the object
  // Example
  static topBookStore() {
    return 'Chapters';
  }
}

// Instantiate Object
const book1 = new Book('Heroes', 'Andrew Shearer', 2013);
console.log(book1);
console.log(book1.getSummary());

// static needs to be run on the class itself
console.log(Book.topBookStore());