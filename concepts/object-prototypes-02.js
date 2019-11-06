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

// getAge - see how long the book has been out
Book.prototype.getAge = function () {
	const years = new Date().getFullYear() - this.year;
	return `${this.title} is ${years} years old`;
}

// Revise - change the year
Book.prototype.revise = function (newYear) {
	this.year = newYear;
	this.revise = true;
}


// Instantiate an object
// This allows us to make as many 'books' as we want, and much easier to do so this way
const book1 = new Book('The Catcher in the Rye', 'J.D. Salinger', 1951);
console.log(book1); // noticed it's prefixed with the object that it is, Book
console.log(book1.title);
console.log(book1.getSummary());
console.log(book1.getAge());

// Using revised - manipulating the data
book1.revise('1999');
console.log(book1.getAge());
console.log(book1.getSummary());