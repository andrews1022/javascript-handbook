// ------------------------------ DESTRUCTURING ------------------------------
// Notes from freeCodeCamps Destructuring in ES6 - Beau teaches JavaScript video: https://www.youtube.com/watch?v=-vR3a11Wzt0

// ---------- NOTES ----------
// Destructuring is a JavaScript syntax that makes it possible to extract data from arrays or objects into distinct variables


// ---------- Assign variables from objects ---------- 
// OLD WAY:
var numbers = {
    x: 3.6,
    y: 7.4,
    z: 6.5
}
var x = numbers.x; // x = 3.6
var y = numbers.y; // y = 7.4
var z = numbers.z; // z = 6.5

// DESTRUCTURING WAY:
var {x,y,z} = numbers;
// This means we're going to create the 3 variables x, y, and z from numbers
console.log(x); // x = 3.6
console.log(y); // y = 7.4
console.log(z); // z = 6.5

// DESTRUCTURING WAY #2:
var {x : a, y : b, z : c} = numbers;
// This means we're going to get the field 'x' from numbers, and copy the value into 'a'
// And 'y' into 'b', and 'z' into 'c'
// So this:
console.log(b); // b = 7.4


// ---------- Assign variables from nested objects ----------
// Example:
var nestObj = {
    start: {x: 5, y: 6},
    end: {x: 6, y: -9}
}
var { start : { x: startX, y: startY}} = nestObj;
console.log(startX);


// ---------- Assign variables from arrays ----------
// Example 1
const [q, r] = [1,2,3,4,5];
console.log(q,r); // will log: 1 2

// Example 2
// You can add extra commas to get other values in the array
const [q,,, r] = [1,2,3,4,5];
console.log(q, r); // will log: 1 4


// ---------- Rest Operator to Resassign Array Elements ----------
const [q, r, ...rest] = [1,2,3,4,5];
console.log(q, r); // will log: 1 2
console.log(rest); // will log: [3, 4, 5]
// What we did here was variables q & r got the first and second values of the array
// Then, because of the rest operator, which is the three ... , the 'rest' variable gets the rest of the values in the form of an array
// So, [3,4,5] go into the 'rest' variable


// ---------- Pass an Object as a Function's Parameters ----------
const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
    // Do something with these variables
}

// But that can be written like this:
const profileUpdate = ({ name, age, nationality, location }) => {
    // Do something with these variables
}
// Here, we are still passing in a profileData object, but right in the parameter we're destructuring that object into the different variables
