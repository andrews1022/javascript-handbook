// Change text using .innerHTML or .textContent

// HTML for reference:
<h1 id='title'>
	<strong>Hello World!</strong>
</h1>;

// What's the difference?

// When selecting the h1
console.log(document.querySelector('h1').innerHTML); // "<strong>Hello World!</strong>"
console.log(document.querySelector('h1').textContent); // "Hello World!"

// This means with .innerHTML we can actually add / remove html tags/content on the fly
