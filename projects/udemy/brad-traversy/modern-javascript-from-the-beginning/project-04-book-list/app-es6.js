class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  // ----- ADDING BOOK -----
  addBookToList(book) {
    // Select <tbody> element
    const list = document.querySelector('#book-list');

    // Create <tr> element
    const row = document.createElement('tr');

    // Insert table data
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>
    `;

    // Append
    list.appendChild(row);
  }

  // ----- SHOW ALERT MESSAGE -----
  showAlert(msg, className) {
    // Construct the element
    const div = document.createElement('div');

    // Add the class name
    div.className = `alert ${className}`;

    // Add text
    div.appendChild(document.createTextNode(msg));

    // Insert into DOM - get parent container
    const container = document.querySelector('.container');

    // Get form
    const form = document.querySelector('#book-form');

    // Insert alert
    container.insertBefore(div, form);

    // Remove after 3 seconds
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 2000);
  }

  // ----- DELETE BOOK -----
  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  // ----- CLEAR INPUT FIELDS -----
  clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}

// Local Storage Class
class Store {
  static getBooks() {
    let books;

    // Check local storage
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static displayBooks() {
    // Get books from local storage
    const books = Store.getBooks();

    // Loop through the books
    books.forEach(book => {
      // Put into the UI
      const ui = new UI();

      // Add book to UI
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    // Get books from local storage
    const books = Store.getBooks();

    // Push on the book to the array
    books.push(book);

    // Set to local storage
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    // Get books from local storage
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    // Set to local storage
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayBooks);

// Add book event listener
document.querySelector('#book-form').addEventListener('submit', e => {
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // Instantiate book object
  const book = new Book(title, author, isbn);

  // Instantiate UI object
  const ui = new UI();

  // Validate form entry
  if (title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Add to local storage
    Store.addBook(book);

    // Show success msg
    ui.showAlert('Book Added!', 'success');

    // Clear fields
    ui.clearFields();
  }
});

// Remove book event listener
document.querySelector('#book-list').addEventListener('click', e => {
  e.preventDefault();

  // Instantiate UI object
  const ui = new UI();

  // Delete book
  ui.deleteBook(e.target);

  // Remove from local storage
  // Remove by selecting tr element with ISBN#
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show message
  ui.showAlert('Book Removed!', 'success');
});
