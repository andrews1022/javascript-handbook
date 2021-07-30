const input = document.querySelector('#myInput');

// Use this regex - will check for any amount of whitespace in the input value
if (input.value.match(/^\s*$/)) {
	console.log('There is whitespce! :(');
} else {
	console.log('There is not whitespace! :D');
}

// Should also be able to just use:
if (input.value.match(' ')) {
	console.log('There is whitespce! :(');
} else {
	console.log('There is not whitespace! :D');
}
