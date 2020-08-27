// HTML for reference:
<h2 class='heading heading--large'>Search Jobs</h2>;

const heading = document.querySelector('h2');

heading.classList.contains('.heading'); // true
heading.classList.contains('.heading--small'); // false
