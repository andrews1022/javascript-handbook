// HTML for reference:
<button class='btn'>
	<span class='page-num'>Page #</span>
	<svg class='search-icon'>
		<use href='img/icons.svg#icon-triangle'></use>
	</svg>
</button>;

// If you were to add a click event handler to this button, and logged the result, you could get:
// 1) The button itself
// 2) The span element
// 3) The SVG element

// So how can we ensure that no matter we click, we get the button element, and the event fires off each time?
// We can use the .closest() method
// From MDN: "Starting with the Element itself, the closest() method traverses parents (heading toward the document root) of the Element until it finds a node that matches the provided selectorString. Will return itself or the matching ancestor. If no such element exists, it returns null."

document.querySelector('.btn').addEventListener('click', (e) => {
	const btn = e.target.closest('.btn');
	console.log(btn);
});

// If this should not work, then use event delegation and select the parent element
document.querySelector('.parent-element-class').addEventListener('click', (e) => {
	const btn = e.target.closest('.btn');
	console.log(btn);
});
