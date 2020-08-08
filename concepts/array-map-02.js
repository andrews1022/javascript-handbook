// We said arrays look something like this:
const array = [1, 2, 10, 16];

// With map, you always need to return something
// Below, we loop over each element, each number, multiply it by 2, and return a new array.
// And again, since our arrow function has a single parameter, it can be written in shorthand like this:
const mappedArray = array.map((num) => {
  return num * 2;
});

// Even further shorthanded
const mappedArrayShort = array.map((num) => num * 2);
console.log('map short', mappedArrayShort);

// ----------------------------------- BREAKDOWN -----------------------------------
// Every time the array loops, let's say the first one is number one.
// We return 1 times 2 that gets put into map array which is now 2.
// And then we go to the next number to 2 x 2.
// Now gets added to the array 10 x 2 gets added to the array and 16 x 2 gets added to the array.
// So that's why we return it.

// -----------------------------------NOTES -----------------------------------
// Whenever you want to loop do a simple loop and take some action on something like an array, you want to use map over for each
// With for each the operation may do nothing.
// Because all forEach cares about is to iterate over a collection of elements like 1, 2, 10, and 16 and apply whateveroperation we tell it to on each element.

// Now map on the other hand has a restriction on the operation.
// It expects the operation to return an element.
// The map iterates through over a collection of elements applying the operation on each element
// Then it finally stores the result of each invocation of the operation into another collection which is map array.
// In other words, map transforms the array; it creates a new array which is mappedArray
