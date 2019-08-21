// Covered in Part 1:
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector()
// document.querySelectorAll()

// Source: https://www.youtube.com/watch?v=0ik6X4DJKCc&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=2

// -------------------- EXAMINING THE DOCUMENT OBJECT --------------------
// console.log(document);
// Log all the different properties and methods attached to the document object:
console.dir('The different properties and methods attached to the document object:');
console.dir(document);

// Get current domain name
console.log('Get current domain name:', document.domain);

// Get current URL
console.log('Get current URL:', document.URL);

// Get the title of the page (located in the head section):
console.log('Get the title of the page:', document.title);

// Modify the title:
// document.title = 123;

// Get the DOCTYPE:
console.log('Get the DOCTYPE:', document.doctype);

// Get the head element
console.log('Get the head element:', document.head);

// Get the body element
console.log('Get the body element:', document.body);

// Create an HTML Collection of everything that is in the DOM:
// Compare this collection to the order of the elements in the HTML file
// It's the same!
console.log('Log everything in the DOM:', document.all);
// From here would access each individual element by their index

// Log just h1 element, located at [10]
console.log('Log just h1 element:', document.all[10]);

// Change the text content of the h1 (THIS WAY IS NOT RECOMMENDED)
// document.all[10].textContent = `Hello, I've been changed by JavaScript!`;
// This is not recommened because if you add or remove anything from HTML DOC, the index locations all change

// Get a collection of all the forms on the page
console.log('Get a collection of all the forms on the page:', document.forms);

// Get all the links on the page (this file does not have any)
console.log('Get all the links on the page:', document.links);

// Get all the images on the page (this file does not have any)
console.log('Get all the images on the page:', document.images);


// -------------------- GET ELEMENT BY ID --------------------
console.log(`Log the h1 element by selecting its ID`, document.getElementById('header-title'));

// Assign it to a variable
var headerTitle = document.getElementById('header-title');
console.log('Log the headerTitle variable', headerTitle);

// Change the text of the header:
headerTitle.textContent = 'Hello!';

// Change the innerText
headerTitle.innerText = 'Goodbye!';

// The difference between innerText and textContent is that innerText pays attention any styles applied to the selected element, whereas textContent does not
// But you can use either or pretty interchangeably

// innerHTML
headerTitle.innerHTML = '<h3>Hello</h3>';
console.log(headerTitle);
// This puts the h3 element INSIDE OF THE H1, not replace it
// So, rememeber theses 3 methods: textContent, innerText, & innerHTML


// -------------------- STYLE CHANGES --------------------
// Add a border-bottom styling to the blue box container
var header = document.getElementById('main-header');
header.style.borderBottom = '3px solid black';


// -------------------- GET ELEMENTS BY CLASS NAME --------------------
// Notice it's elements, plural

// Let's get the list items, and they have a class name of list-group-item
var items = document.getElementsByClassName('list-group-item');
console.log('Log all the list items:', items);
// This gives us an HTML Collection, and each list item has its own index

// Access an individual item:
console.log('Log the item a index [1]', items[1]);

// Modify the text content of that individual item
items[1].textContent = 'This list item was changed by JavaScript!';

// Change the style of it as well:
items[1].style.fontWeight = 900;
items[1].style.backgroundColor = 'orangered';

// Change the styles of all of them
items.style.backgroundColor = 'orangered';
// But this doesn't work! That is because it's an HTML collection, and not an array
// So we need to loop through it:
for (var i = 0; i < items.length; i++) {
    // Get the current iteration using [i]
    items[i].style.backgroundColor = '#f3f3f3';
}


// -------------------- QUERY SELECTOR --------------------
// Grab the text input box
const input = document.querySelector('.text-input');

// Change it's style
input.style.border = '4px solid black';

// Grab the submit button:
const submitBtn = document.querySelector(`input[type='submit']`);
submitBtn.value = 'Value Changed!';

// REMEMBER!! querySelector only selects the first element/result if there are more than 1 matches

// We can also use CSS Pseudo classes:
// Let's change the last list item color
const lastListItem = document.querySelector('.list-group-item:last-child');
lastListItem.style.color = 'blue';
lastListItem.style.fontSize = '30px';
lastListItem.style.fontWeight = 900;

// Let's change the 3rd item only:
const thirdListItem = document.querySelector('.list-group-item:nth-child(3)');
thirdListItem.style.color = 'magenta';
thirdListItem.style.fontSize = '40px';
thirdListItem.style.fontWeight = 100;



// -------------------- QUERY SELECTOR All #1 --------------------
// Let's grab all the h2s
const h2 = document.querySelectorAll('h2');
console.log(h2);
h2.forEach(function (heading){
    heading.style.background = 'silver';
    heading.textContent = 'JavaScript Heading!';
})

// -------------------- QUERY SELECTOR All #2 --------------------
const itemsList = document.querySelectorAll('.list-group-item');

// REGULAR FUNCTION SYNTAX
itemsList.forEach(function (item) {
    item.style.backgroundColor = 'springgreen';
})

// ARROW FUNCTION SYNTAX
itemsList.forEach(item => {
    item.style.backgroundColor = 'springgreen';
})

// CONDENSED ARROW FUNCTION
itemsList.forEach(item => item.style.backgroundColor = 'PaleTurquoise');