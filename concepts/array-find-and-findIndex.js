// suppose that we have a group of children and we know that only one of them is a full age.
// so let's now find out who and how old that person is.

// es5 way
let ages = [12, 17, 8, 21, 14, 11];

// the es5 way, we would first have to create a boolean array to determine whether each element of the array is younger or older than 18
// and we could then use the indexof to determine the element that we want
// let's use the map method for this
let fullAge = ages.map((current) => current >= 18);
console.log(fullAge);

// find the position of the true
console.log(fullAge.indexOf(true)); // index location 3

// see how old that person is
console.log(ages[fullAge.indexOf(true)]); // age of 21

// es6 way
// let's now start by using the find index method
// this method we can pass a callback function into it and it's then gonna return us the index of the array where the callback function returns true
// similar to map, findindex gives us access to the current element, the current index, and the entire array
console.log(ages.find((current) => current >= 18)); // Find the age over 18
console.log(ages.findIndex((current) => current >= 18)); // Also returns index #3
