// We said arrays look something like this:
const array = [1, 2, 10, 16];

// You can actually do filtering and mapping with reduce, so it's a really powerful method.

// Reduce takes something called an accumulator and the number.
// The accumulator can be anything, and is sometimes written as acc for short

// What is an accumulator?
// An accumulator is something where we can store the information that happens in the body of the function.
const reducedArray = array.reduce((accumulator, number) => {
  return accumulator + number;

  // This line below: }, 0)
  // This is a second parameter
  // We can specify what value we want our accumulator to start at
  // As seen below, we use zero.
}, 0);
console.log('reduce', reducedArray);
// We get 29 because 10 + 16 = 26, then plus 1 & 2 = 29
