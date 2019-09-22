// -------------------- My solution --------------------
// Grab button element
var themeButton = document.querySelector('#theme');

// Add event listener
themeButton.addEventListener('click', () => {
  // Grab all elements in the page
  var allElements = document.getElementsByTagName('*');

  // Loop through
  for (element of allElements) {
    element.classList.toggle('theme2');
  }
});

// -------------------- Cassidy's solution --------------------
// Grab elements
var themeButton = document.querySelector('#theme');

// Add event listener
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('theme2');
});

// BREAKDOWN:
// In the CSS file, everything is child of theme2
// So since the parent has to have theme2 in order for all of these elements to change, we just have to add theme2 the body tag.


// -------------------- Student in Q&A Solution --------------------
var body = document.getElementsByTagName('body')[0];
var button = document.getElementById('theme');

button.addEventListener('click', function () {
  body.classList.toggle('theme2');
});