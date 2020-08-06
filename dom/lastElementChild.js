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

// Gives us the first HTML element
const last = list.lastElementChild;
console.log(last);
