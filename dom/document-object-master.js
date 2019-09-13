// ------------------------------ PART 1 ------------------------------

// The document is at the top, or root of the tree
// And then it's first children are the head and the body and then each of those have the children title each one UL etc..

// If you enter ‘document’ into the console, it returns an object
// This is not a normal JavaScript object, rather an HTML-like representation of the nodes on the page.

// Instead, run console.dir(document), and you get a more familiar looking JavaScript Object: 
// And if you go to the body dropdown, and then click childNodes, you will be able to see all the child nodes for the page
  
// Don't be intimidated by the very long list!
// This is just important to know so you can see that the DOM is just a glorified JavaScript object and it's made from the HTML on your page.


// ------------------------------ PART 2 ------------------------------

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
document.title = 123;

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
document.all[10].textContent = `Hello, I've been changed by JavaScript!`;
// This is not recommened because if you add or remove anything from HTML DOC, the index locations all change

// Get a collection of all the forms on the page
console.log('Get a collection of all the forms on the page:', document.forms);

// Get all the links on the page (this file does not have any)
console.log('Get all the links on the page:', document.links);

// Get all the images on the page (this file does not have any)
console.log('Get all the images on the page:', document.images);