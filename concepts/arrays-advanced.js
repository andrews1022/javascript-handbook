// ----**** RECAP ****----

// We said arrays look something like this:
const array = [1, 2, 10, 16];
// And we said we can do for loops, forEach loops, and more
// But here, we're going to take it up a notch

// Let's remember how forEach loop works agin
// Let's say we want to multiply every single number in the array.
const newArray = array.forEach((num) => {
    num * 2;
})

// We're just randomly multiplying the numbers by two but we're not really storing it anywhere.
const double = [];
const newArray2 = array.forEach((num) => {
    double.push(num * 2);
})
console.log('forEach/double.push', double);

// Covered here: map, filter, reduce
// These 3 are the most important in day to day use of JavaScript


// *** MAP ***
// With map, you always need to return something
// Below, we loop over each element each number and return a new array.
const mappedArray = array.map((num) => {
    return num * 2;
})
console.log('map', mappedArray);
// BREAKDOWN:
// Every time the array loops, let's say the first one is number one.
// We return 1 times 2 that gets put into map array which is now 2.
// And then we go to the next number to 2 x 2.
// Now gets added to the array 10 x 2 gets added to the array and 16 x 2 gets added to the array.
// So that's why we return it.

// NOTES:
// Whenever you want to loop do a simple loop and take some action on something like an array, you want to use map over for each 
// With for each the operation may do nothing.
// Because all forEach cares about is to iterate over a collection of elements like 1, 2, 10, and 16 and apply whateveroperation we tell it to on each element.

// Now map on the other hand has a restriction on the operation.
// It expects the operation to return an element.
// The map iterates through over a collection of elements applying the operation on each element
// Then it finally stores the result of each invocation of the operation into another collection which is map array.
// In other words, map transforms the array; it creates a new array which is mappedArray

// And again, since our arrow function has a single parameter, it can be written in shorthand like this:

// const mappedArray = array.map((num) => {
//    return num * 2;
//})
const mappedArrayShort = array.map(num => num * 2);
console.log('map short', mappedArrayShort);

// *** FILTER ***
// And as the name suggests, we can filter our array based on a condition
// For our demo, let's return all the elements in the array 'array' that are greater than five
const filteredArray = array.filter(num => {
    // As with map, we must return something
    return num > 5;
})
console.log('filter', filteredArray);
// Again, since this is a single return value, we can use shorthand version
const filteredArrayShort = array.filter(num => num > 5);

console.log('filter short', filteredArrayShort);
// If it returns false, ut won't go into the array 
// If it returns true, it will


// *** REDUCE ***
// You can actually do filtering and mapping with reduce, so it's a really powerful method.

// Reduce takes something called an accumulator and the number.
// accumulator can be anything, sometimes written as acc
// What is accumulator?
// Accumulator is something where we can store the information that happens in the body of the function.
const reducedArray = array.reduce((accumulator, num) => {
    return accumulator + num;

    // This line below: }, 0) 
    // Is a second parameter
    // We can specify what we want our accumulator to start with the default value.
    // In our case let's say zero.
}, 0)
console.log('reduce', reducedArray);
// We get 29 because 10 + 16 = 26, then plus 1 & 2 = 29