// Let's grab all the h2s in a page
const h2 = document.querySelectorAll('h2');

// Log all of them
console.log(h2);

// Change the styles of them
h2.forEach(function (heading) {
	heading.style.background = 'silver';
	heading.textContent = 'JavaScript Heading!';
});
