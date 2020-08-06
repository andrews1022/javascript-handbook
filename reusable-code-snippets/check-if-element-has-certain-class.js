// HTML for reference:
<h2 class='heading headingMain'>Search Jobs</h2>;

const heading = document.querySelector('h2');

heading.classList.contains('.heading'); // true

// Use ternary operator to check (can show/hide something on the page)
const classCheck = heading.classList.contains('open')
  ? heading.classList.remove('open')
  : heading.classList.add('open');

return classCheck;
