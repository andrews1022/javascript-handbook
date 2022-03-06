// ------------------------------ PART 3 ------------------------------
// HTML for reference:
<body>
	<h1 id='header'>The Dom is cool for many reasons</h1>
	<ul class='list'>
		<li>You can see how pages are made</li>
		<li>You can manipulate it</li>
	</ul>
</body>;

// You can use CSS selectors to grab your elements:
document.querySelector('#header');
// NOTE ABOUT querySelector: if you are selecting by class and there are multiple elements with the same class name, it will grab just the first one it finds
// In this case, use querySelectorAll

// Another example using .children to grab the child elements of whatever you are selecting:
document.querySelector('.list').children;

// From here, you can grab the first one, and see what content it has:
document.querySelector('.list').children[0].innerHTML;

//And you can modify this, like so:
document.querySelector('.list').children[0].innerHTML = 'This HTML content has been modified!';
