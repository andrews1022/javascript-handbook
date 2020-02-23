// The DOM method document.querySelectorAll() (and a few others) return a NodeList.
// To operate on the list, e.g. using forEach(), the NodeList must first be converted to an Array.
// With ES6, there are two options you can use to automatically return an array without the need for conversion, both in a single line!

// 1) Spread operator
var h2s = [...document.querySelectorAll('h2')];
console.log(h2s);

// 2) Array.from()
var h2s = Array.from(document.querySelectorAll('h2'));
console.log(h2s);

// The benefit of using Array.from() is that it does not need to transpiled down to ES5, while the spread operator does