let val;

// Gives us the entire document object
val = document; 
console.log(val);

// Get HTML collection of all elements on the page
val = document.all;
console.log(val);
val = document.all[0];
console.log(val);
val = document.all[2];
console.log(val);

// Count all the elements in the DOM
val = document.all.length;
console.log(val);

// Access specific elements (head & body)
val = document.head;
console.log(val);
val = document.body;
console.log(val);

// Get the doctype
val = document.doctype;
console.log(val);

// Get the domain
val = document.domain;
console.log(val);

// Get the URL
val = document.URL;
console.log(val);

// Get the character set
val = document.characterSet;
console.log(val);

// Get the content type
val = document.contentType;
console.log(val);

// ---------- SELECTING ELEMENTS WITHOUT SELECTORS ----------
// Selecting FORMS
val = document.forms; // Get all the <form> elements in an HTML Collection
console.log(val);
val = document.forms[0]; // Get first <form> element from the collection
console.log(val);
val = document.forms[0].id; // Get the id
console.log(val);
val = document.forms[0].method; // Get the form method
console.log(val);
val = document.forms[0].action; // Get the form action
console.log(val);

// Selecting LINKS
val = document.links; // Get all the <a> elements in an HTML Collection
console.log(val);
val = document.links[0]; // Get the first <a> from the collection
console.log(val);
val = document.links[0].id; // Get the id
console.log(val);
val = document.links[0].className; // Get the class name(s)
console.log(val);
val = document.links[0].classList; // Get the class name(s) as a DOM Token List
console.log(val);
val = document.links[0].classList[1]; // Access second class name
console.log(val);

// Selecting IMAGES
val = document.images;
console.log(val);

// Selecting SCRIPTS
val = document.scripts;
console.log(val);
val = document.scripts[2].getAttribute('src'); // Get attribute
console.log(val);

// Turn DOM Token List into array (to be able to use array methods like forEach)
let scripts = document.scripts;
let scriptsArray = Array.from(scripts);
scriptsArray.forEach(function(iteratedScript){
  console.log(iteratedScript);
})