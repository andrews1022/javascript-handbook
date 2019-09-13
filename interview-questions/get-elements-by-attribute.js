// -------------------------- QUESTION --------------------------
// How would you implement getElementsByAttribute?

// HTML for reference:
<body>
  <h1 class="header">The Dom is cool for many reasons</h1>
  <ul>
    <li category="feature">You can see how pages are made</li>
    <li category="feature">You can manipulate it</li>
    <li>You can listen for user interactions</li>
  </ul>
</body>

// The easy way, using querySelector:
function getElementsByAttribute(attribute, value) {
  return document.querySelector(`[${attribute}=${value}]`);
}

// More complex solution (done by Cassidy Williams, as part of her JavaScript and React for Developers: Master the Essentials Udemy course: https://www.udemy.com/course/js-and-react-for-devs/)
function getElementsByAttribute(attribute, value) {
  var all = document.getElementsByTagName('*');
  var found = [];

  for (var i = 0; i < all.length; i++) {
    element = all[i];
    if (all[i].getAttribute(attribute) === value) {
      found.push(all[i]);
    }
  }
  return found;
}

// ---------------- BREAKDOWN ----------------
// We have our function getElementsByAttribute and it takes in the designated attribute and the value.
// The first thing it does is get all the elements in the DOM
// The * allows you to pull in all the elements
// Then initalize an empty array called found, which will ultimately return any found elements
// Then we loop through all of the elements and for each element in there I check if get attribute has this particular attribute here (inside the parameter).
// And if it has that attribute it equals the value and if that's true it pushes it into the found array.
// Otherwise if it doesn't equal that then it just keeps going throughout the loop.

// So if you run:
getElementsByAttribute('class', 'header');
// You should expect to see the h1 returned: [h1.header]

// Similiary, if you run
getElementsByAttribute('category', 'feature');
// You should expect to see the list items: (2) [li, li]