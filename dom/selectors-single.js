// ---------- SINGLE ELEMENT SELECTORS ----------

// getElementById
document.getElementById('my-form'); // we have a form with the ID 'my-form'
console.log(document.getElementById('my-form'));

// You can even assign this to a variable:
const form = document.getElementById('my-form');
console.log(form);

// querySelector
// This one is much newer than getElementById
// For a long time, people used jQuery, which made it easier to select other things than IDs, so things like classes, and even tags themselves
// Let's grab the <section> tag with the class="container"
console.log(document.querySelector('.container'));
// Make sure to use . or # as you would select something in CSS

// Selecting the h1 tag
console.log(document.querySelector('h1'));
// But remember this is a single element selector, so it will only select the first one