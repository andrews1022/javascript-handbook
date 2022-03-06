// UL and lis for reference:
<ul id='items' class='list-group'>
	<li class='list-group-item'>Item 1</li>
	<li class='list-group-item'>Item 2</li>
	<li class='list-group-item'>Item 3</li>
	<li class='list-group-item'>Item 4</li>
</ul>;

// Grab the ul with id 'items'
var itemList = document.querySelector('#items');

// Not recommended, but possible:
console.log('NodeList of list items', itemList.childNodes);

// Recommended way, using 'children'
console.log('HTMLCollection of list items: ', itemList.children);

// Access 'Item 2'
console.log('Item 2', itemList.children[1]);

// Style it
itemList.children[1].style.backgroundColor = 'yellow';

// What is the difference between a NodeList and HTMLCollection?
// From https://bit.ly/2L097PU

// The most simplest answer is that both a NodeList and HTMLCollection are collections of DOM nodes. The difference is that while a NodeList can contain any node type, the HTMLCollection is going to only to contain any node Element.
// So what is the difference between a node element and a node type?
// Nodes: in the DOM, everything is a node and every node is an object. The name node is used as a generic term, for everything.
// Element: is one specific type of node. It can be a list item, a div, the body, the window, whatever, but its a specific type.
// Now we can see what the difference between a nodeList is and what a node element is:
// In the end, one is general and one is specific lists of nodes. It's important to know simply because you should know what you are returning and for more advanced JavaScript issues such as speed, in the case of static NodeLists vs Live NodeLists.
