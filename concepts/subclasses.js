// Class (ES6), needs an uppercase
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written ${this.author} in ${this.year}`;
  }
}

// Let's say we want a subclass called Magazine which will have everything Book has, but also a month property
// Magazine Subclass
class Magazine extends Book {
  constructor(title, author, year, month) {
    // In order to call the parent constructor, we need to use a function called super()
    super(title, author, year);
    this.month = month;
  }
}

// Instantiate the Magazine subclass
const mag1 = new Magazine('Times', 'Andrew Shearer', 2019, 'July');
console.log(mag1);

// Use the getSummary() method on magazine
console.log(mag1.getSummary());