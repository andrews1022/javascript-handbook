// ---------- MULTIPLE ELEMENT SELECTORS ----------

// Selecting all of the '.item' li elements inside the '.items' ul element
console.log(document.querySelectorAll('.item'));
// This gives us something called a NodeList
// A NodeList is very similar to an array, and in fact, we can run array methods on it
// We can do forEach and stuff like that


// There is also getElementsByClassName
console.log(document.getElementsByClassName('item')); // note we do not need the .  it is a class name so there is no need to add it
// Using this gives us something called an HTMLCollection
// The difference is that an HTMLCollection you can't use array methods. You have to manually convert to an array first if you want to run array methods on it


// There is also getElementsByTagName
console.log(document.getElementsByTagName('li')); //simply put the tag type inside the ()
// Generally best to use querySelectorAll and/or getElementById


// Looping through a group of li elements with the class .item and logging them to the console
<ul class="items">
	<li class="item">Item 1</li>
	<li class="item">Item 2</li>
	<li class="item">Item 3</li>
</ul>

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));