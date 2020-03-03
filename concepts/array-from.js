// Select all elements with a class of 'box'
const boxes = document.querySelectorAll('.box');
// This returns a nodeList, which we should convert to an array

// ES5:
var boxesArrES5 = Array.prototype.slice.call(boxes);

// Change each box to blue
boxesArrES5.forEach(function(el) {
  el.style.backgroundColor = 'lightblue';
});

// ES6 Way
const boxesArrES6 = Array.from(boxes);
boxesArrES6.forEach((box) => {
  box.style.backgroundColor = 'lightblue';
});

// We can even do this in one line:
Array.from(boxes).forEach(box => box.style.backgroundColor = 'red');


// NOTE: NodeLists do have access to the forEach method, but you should still convert to an array