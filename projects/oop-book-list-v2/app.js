// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// addBookToList prototype
UI.prototype.addBookToList = function (book) {
  const list = document.querySelector('#book-list');

  // Create tr element
  const row = document.createElement('tr');

  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;

  // Append
  list.appendChild(row);
}

// Show Alert
UI.prototype.showAlert = function (msg, className) {
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
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 1500);
}

// Delete book
UI.prototype.deleteBook = function (target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}

// Clear fields
UI.prototype.clearFields = function () {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#isbn').value = '';
}


// Add book event listener
document.querySelector('#book-form').addEventListener('submit', function (e) {
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

    // Show success msg
    ui.showAlert('Book Added!', 'success');

    // Clear fields
    ui.clearFields();
  }
});

// Remove book event listener
document.querySelector('#book-list').addEventListener('click', function (e) {
  e.preventDefault();

  // Instantiate UI object
  const ui = new UI();

  // Delete book
  ui.deleteBook(e.target);

  // Show message
  ui.showAlert('Book Removed!', 'success');
});