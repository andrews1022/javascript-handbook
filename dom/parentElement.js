// HTML for reference
<ul class='collection'>
  <li class='collection-item'>List Item</li>
  <li class='collection-item'>List Item</li>
  <li class='collection-item'>List Item</li>
  <li class='collection-item'>List Item</li>
  <li class='collection-item'>List Item</li>
</ul>;

// Grab ul element
const list = document.querySelector('ul.collection');

// Get parent element
const parent = listItem.parentElement;

// Get parent of parent
const parentOfParent = listItem.parentElement.parentElement;

console.log(list);
console.log(parent);
console.log(parentOfParent);
