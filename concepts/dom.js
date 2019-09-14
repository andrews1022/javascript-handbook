// What exactly is the DOM?
// The official definition is that it’s a programming API for documents.
// It’s the bridge between your HTML and JavaScript

// When you have an HTML page, each HTML tag is turned into a JavaScript object by the browser
// Each of the objects is stored inside the DOM
// You can think about it as the document being a tree and each node in the tree is created from those HTML tags.

// The document is at the top, or root of the tree
// And then it's first children are the head and the body and then each of those have the children title each one UL etc..

// If you enter ‘document’ into the console, it returns an object
// This is not a normal JavaScript object, rather an HTML-like representation of the nodes on the page.
// Instead, run console.dir(document), and you get a more familiar looking JavaScript Object
//	And if you go to the body dropdown, and then click childNodes, you will be able to see all the child nodes for the page