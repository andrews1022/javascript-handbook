// ------------ FINAL PROJECT FOR THIS SERIES ------------
// Create a to do list item app based on what we've learned throughout this course

// ------- Features I added myself -------
// Check if input is blank - display an alert if it is
// Clear input field once submitted

// Select the items
var form = document.querySelector('#addForm');
var itemList = document.querySelector('#items');
var filter = document.querySelector('#filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete list item event
itemList.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);

// Add items to the list
function addItem(event) {
  // Prevent default form behavior
  event.preventDefault();

  // Get input value
  var newItem = document.querySelector('#item').value;

  // Conditional if field is blank
  if (newItem === '') {
    // If blank display alert
    alert('Please enter in an item')
  } else {
    // Else go ahead with adding element

    // Create new li element
    var li = document.createElement('li');

    // Add class to li
    li.className = 'list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create the delete button element
    var deleteButton = document.createElement('button');

    // Add classes to delete button
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteButton.appendChild(document.createTextNode('X'));

    // Append the button to the li
    li.appendChild(deleteButton);

    // Append the li to the list
    itemList.appendChild(li);

    // Clear field
    document.querySelector('#item').value = '';
  }
}

// Remove items to the list
function removeItem(event) {
  // Make sure this only works if the x button is clicked
  if (event.target.classList.contains('delete')) {
    // confirmation
    if (confirm('Are you sure?')) {
      // Select the li parent element 
      var li = event.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter items
function filterItems(event) {
  // Convert the filter text thats being typed in to lowercase (so everything is consistent)
  var text = event.target.value.toLowerCase();
  // console.log(text);

  // Grab all li's inside the itemList
  var items = itemList.getElementsByTagName('li');

  // Turn the HTMLCollection into an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;

    // Compare if what we type in the filter box matches any of the items
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}