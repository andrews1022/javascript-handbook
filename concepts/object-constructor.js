// Constructor (ES5), needs an uppercase
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = () => `${this.title} was written ${this.author} in ${this.year}`;
}

// Instantiate an object
// This allows us to make as many 'books' as we want, and much easier to do so this way
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('Ulysses', 'James Joyce', 1918);
console.log(book1); // noticed it's prefixed with the object that it is, Book
console.log(book1.title);
console.log(book1.getSummary());

// ---------- EXAMPLE #2 ----------
// Housekeeper object
function HouseKeeper(passedInYearsOfExperience, passedInName, passedInCleaningRepertoire) {
  this.yearsOfExperience = passedInYearsOfExperience;
  this.name = passedInName;
  this.cleaningRepertoire = passedInCleaningRepertoire;
}

// Creating a new housekeeper
var houseKeeper1 = new HouseKeeper(10, 'Jane', ['bedrooms', 'bathrooms', 'lobby']);
