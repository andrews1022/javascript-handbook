// Suppose that we have a group of children and we know that only one of them is a full age.
// So let's now find out who and how old that person is.
// ES5 way
var ages = [12, 17, 8, 21, 14, 11];
// The ES5 way, we would first have to create a boolean array to determine whether each element of the array is younger or older than 18.
// And we could then use the index off to determine the element that we want.
// Let's use the map method for this
var fullAge = ages.map(function(current) {
  return current >= 18;
});
console.log(fullAge);
// Find the position of the true
console.log(fullAge.indexOf(true)); // index location 3
// See how old that person is
console.log(ages[fullAge.indexOf(true)]); // age of 21

// ES6 Way
// Let's now start by using the find index method
// This method we can pass a callback function into it and it's then gonna return us the index of the array where the callback function returns true
// Similar to map, findIndex gives us access to the current element, the current index, and the entire array
console.log(ages.findIndex((current) => current >= 18)); // Also returns index #3
console.log(ages.find((current) => current >= 18)); // Find the age over 18