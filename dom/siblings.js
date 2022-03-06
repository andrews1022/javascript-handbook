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

let val;

val = listItem.nextSibling; // Returns node
val = listItem.nextElementSibling; // Returns HTML element
val = listItem.previousSibling; // Returns node
val = listItem.previousElementSibling; // Returns HTML element
