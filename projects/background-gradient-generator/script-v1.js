let css = document.querySelector('h3');
let colorOne = document.querySelector('.color1');
let colorTwo = document.querySelector('.color2');
let body = document.querySelector('.gradient');

// For HTML inputs, there is a great event listener called, input

// addEventListener for first colour picker
colorOne.addEventListener('input', function () {
	body.style.background = 'linear-gradient(to right, ' + colorOne.value + ', ' + colorTwo.value + ')';
})

// addEventListener for second colour picker
colorTwo.addEventListener('input', function () {
	body.style.background = 'linear-gradient(to right, ' + colorOne.value + ', ' + colorTwo.value + ')';
})