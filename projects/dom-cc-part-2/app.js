// ------ This part covers traversing the dom ------
// Covered in Part 2:
// parentNode
// parentElement
// nextElementSibling 
// createElement()
// createTextNode()

// ------------------ parentNode ------------------
// Grab the ul with id 'items'
var itemList = document.querySelector('#items');
console.log(itemList.parentNode); // notice we get the surrounding div

// Styling what we selected:
itemList.parentNode.style.backgroundColor = '#f4f4f4';

// What gets logged here?
console.log(itemList.parentNode.parentNode); // div with class of 'container'

// What gets logged here?
console.log(itemList.parentNode.parentNode.parentNode); // we get the body tag


// ------------------ parentElement ------------------
// Essentially does the same thing as parentNode


// ------------------ childNodes ------------------
// Not recommended, but possible: 
console.log('NodeList of list items', itemList.childNodes);

// Recommended way, using 'children'
console.log('HTMLCollection of list items', itemList.children);




// What is the difference between a NodeList and HTMLCollection?
// From https://bit.ly/2L097PU

// The most simplest answer is that both a NodeList and HTMLCollection are collections of DOM nodes. The difference is that while a NodeList can contain any node type, the HTMLCollection is going to only to contain any node Element.
// So what is the difference between a node element and a node type?
// Nodes: in the DOM, everything is a node and every node is an object. The name node is used as a generic term, for everything.
// Element: is one specific type of node. It can be a list item, a div, the body, the window, whatever, but its a specific type.
// Now we can see what the difference between a nodeList is and what a node element is:
// In the end, one is general and one is specific lists of nodes. It's important to know simply because you should know what you are returning and for more advanced JavaScript issues such as speed, in the case of static NodeLists vs Live NodeLists.

// Access 'Item 2'
console.log('Item 2', itemList.children[1]);

// Style it
itemList.children[1].style.backgroundColor = 'yellow';


// ------------------ first & last ElementChild ------------------
console.log('First item in ul', itemList.firstElementChild);

// Modify it:
itemList.firstElementChild.textContent = 'Hello there!';

// Similarily, there is one for the last
console.log('Last item in ul', itemList.lastElementChild);

// Modify it:
itemList.lastElementChild.textContent = 'Hello there here from the bottom!';


// ------------------ siblings ------------------
console.log(itemList.nextSibling); // logs a text node
console.log(itemList.nextElementSibling); // logs the h2 sibling

console.log(itemList.previousSibling); // logs a text node
console.log(itemList.previousElementSibling); // logs the h2 sibling

// Style the next h2 sibling
itemList.nextElementSibling.style.color = 'green';


// ------------------ createElement() ------------------
// Create a div
var newDiv = document.createElement('div');

// Add a class to it
newDiv.className = 'hello-class';

// Add an id to it
newDiv.id = 'hello-id';

// Add an attribute
newDiv.setAttribute('title', 'Hello Div');
// First parameter is the attribute you want, then it's value

// Create a text node to insert into the div
var newDivText = document.createTextNode('Hello Text Node!');

// Append/add to the div
newDiv.appendChild(newDivText);

// Appened this to DOM:
// Add it under the container div
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1); 
// Takes two paramters: first is what we're inserting, and what inserting before, in this case the h1

// Style the new div
newDiv.style.fontSize = '20px';

console.log(newDiv);