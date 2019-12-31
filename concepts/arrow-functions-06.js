// ------------------------------ PART 6 ------------------------------

// Where arrow functions really shine, are anonymous functions like this one
// An anonymous function is a function with no name
document.addEventListener('click', function () {
	console.log('Clicked!');
})

// Converted to an Arrow Function:
document.addEventListener('click', () => {
	console.log('Clicked!');
})

// But the above can be condensed down to this as we only have 1 line in the block:
document.addEventListener('click', () => console.log('Clicked!'));