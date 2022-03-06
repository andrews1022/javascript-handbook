// HTML for reference
<ul class='collection'>
  <li class='collection-item'>List Item</li>
  <li class='collection-item'>List Item</li>
  <li class='collection-item'>List Item</li>
  <li class='collection-item'>List Item</li>
  <li class='collection-item'>List Item</li>
</ul>;

let val;

// Grab ul element
const list = document.querySelector('ul.collection');

// Get child nodes of ul element
val = list.childNodes;

// Gives us a NodeList
// Also counts line breaks in the HTML document
// These are shown as 'text' in the NodeList

// Node Numbers:
// 1 = Element
// 2 = Attribute (deprecated)
// 3 = Text node
// 8 = Comment
// 9 = Document itself
// 10 = DOCTYPE
