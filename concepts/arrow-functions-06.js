// ------------------------------ PART 6 ------------------------------

// An anonymous function, a function with no name
// Where arrow functions really shine, are anonymous functions like this one
document.addEventListener('click', function () {
	console.log('Clicked!');
})

// Convert Function #4 to an Arrow Function:
document.addEventListener('click', () => {
	console.log('Clicked!');
})

// But the above can be condensed down to this:
document.addEventListener('click', () => console.log('Clicked!'));