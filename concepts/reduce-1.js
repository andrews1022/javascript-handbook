// We said arrays look something like this:
const array = [1, 2, 10, 16];

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