// ------------ INTRO ------------
// We will build this in an object oriented way using ES6 classes 
// Book class, UI class, and Store class (saving books to local storage in the browser)


// ------------ GAMEPLAN ------------
// Book Class: Represent a Book
// UI Class: Handle UI Tasks
// Store Class: Handles Storage (Local Storage)
// Event: Display Books (Show the book in the list)
// Event: Add a book
// Event: Remove a book


// ------------------------------------ THE CODE ------------------------------------

// ------------ BOOK CLASS: REPRESENT A BOOK ------------ 
class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

// ---------- UI CLASS: HANDLE UI TASKS ----------
class UI {
	// This class will have a few methods:
	// Display book
	// Add book to list
	// Remove book from list
	// Show alert
	static displayBooks() {

		// Set books to our store method of getBooks
		const books = Store.getBooks();

		// Loop through all the books in this array
		// Call the method addBookToList in the UI Class
		books.forEach((book) => UI.addBookToList(book));
	}

	static addBookToList(book) {

		// The goal here is to create the row to go inside the table body

		// Grab the book-list id
		const list = document.querySelector('#book-list');

		// Create a table row element
		const row = document.createElement('tr');

		// Add some HTML to that row
		// Use backticks so when can use variables
		row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

		// Append the row to the list
		list.appendChild(row);
	}

	static deleteBook(el) {
		// Make sure that what we click contains the class 'delete'
		if (el.classList.contains('delete')) {
			// We need to remove the parent of the parent, because the parent element is the td, then the whole row
			el.parentElement.parentElement.remove();
		}
	}

	static showAlert(message, className) {
		// Create a div from scratch here and insert it into the UI
		const div = document.createElement('div');

		// Assign a class name
		div.className = `alert alert-${className}`;

		// Append it
		div.appendChild(document.createTextNode(message));

		const container = document.querySelector('.container');
		const form = document.querySelector('#book-form');

		// Reads as insert the div before the form
		container.insertBefore(div, form);

		// Vanish in 1.5 seconds
		setTimeout(() => document.querySelector('.alert').remove(), 1500);
	}

	// Clear the fields after submitting a book
	static clearFields() {
		document.querySelector('#title').value = '';
		document.querySelector('#author').value = '';
		document.querySelector('#isbn').value = '';
	}
}


// ---------- STORAGE CLASS: HANDLES STORAGE ----------
// Keyword static allows to not instantiate an object/class
// Local storage essentially stores different key values
// You can only use local storage for strings
// So we have to 'stringify' it and then parse it
class Store {
	// Get books
	static getBooks() {
		let books;

		// Check if there is no book item in local storage
		if (localStorage.getItem('books') === null) {
			// If so, assign to empty array since there is no books
			books = [];
		} else {
			// Parse through JSON so we can use it as a regular JavaScript array of objects
			books = JSON.parse(localStorage.getItem('books'));
		}
		return books;
	}

	// Add books
	static addBook(book) {
		// Get the books from local storage
		const books = Store.getBooks();

		// Push on to it
		books.push(book);

		// Reset it to local storage
		localStorage.setItem('books', JSON.stringify(books));
	}

	// Remove books
	static removeBook(isbn) {
		// Remove by ISBN#
		const books = Store.getBooks();

		// Loop through them
		books.forEach((book, index) => {
			// Check to see if the current book being looped through if the ISBN# matches the one that's passed in through removeBook()
			if (book.isbn === isbn) {
				// If so, slice it out of the array
				books.splice(index, 1);
			}
		})

		// Reset local storage
		localStorage.setItem('books', JSON.stringify(books));
	}
}


// ---------- EVENT: DISPLAY BOOKS ----------
// Display books in local storage
document.addEventListener('DOMContentLoaded', UI.displayBooks);


// ---------- EVENT: ADD BOOKS ----------
// Grab the form by ID
document.querySelector('#book-form').addEventListener('submit', (event) => {

	// Prevent default behavior of form submit button
	event.preventDefault();

	// Get form values
	const title = document.querySelector('#title').value;
	const author = document.querySelector('#author').value;
	const isbn = document.querySelector('#isbn').value;

	// Validate - if user leaves fields blank, or if user types in something that is not a number in ISBN# box, or if length of the isbn# does not equal 13
	if (title === '' || author === '' || isbn === '' || isNaN(isbn) || isbn.toString().length != 13) {
		// Fill in the message, and add class name
		UI.showAlert('Please fill in all fields correctly!', 'danger');
	} else {
		// Instantiate a book from the book class
		// Use the values passed in the values through the form
		const book = new Book(title, author, isbn);

		// Add book to UI list
		// Calls the addBookToList() function from the UI class and addes it to the list
		// But is disappears on reload! :(
		// We will fix this later
		UI.addBookToList(book);

		// Add book to store
		Store.addBook(book);

		// Show success message
		UI.showAlert('Book added!', 'success');

		// Clear form input fields
		UI.clearFields();
	}
})


// ---------- EVENT: REMOVE BOOKS ----------
// Since we have multiple delete buttons/links, we can't just target it for the event to add the click event because it will target only the first one and delete just the first one
// So, we need to use something called 'event propagation'
// This is where select something above it, such as the book list, and then target whatever is clicked inside of it
document.querySelector('#book-list').addEventListener('click', (event) => {
	// console.log(event.target);

	// Remove the book from the UI
	UI.deleteBook(event.target);

	// Remove the book from Local Storage
	Store.removeBook(event.target.parentElement.previousElementSibling.textContent);

	// Display message removed from list
	UI.showAlert('Book removed!', 'warning');
})