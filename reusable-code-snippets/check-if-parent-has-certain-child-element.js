var parent = document.querySelector('.parent');
var child = document.querySelector('.child');

// Check like this:
if (child.parentNode == parent) {
  // Do something if true...
} else {
  // Do something if false...
}

// You can also use .contains() like so:
document.querySelector(parent).contains(child); // Will return true or false
