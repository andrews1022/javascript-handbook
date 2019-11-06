// Let's say we have a basket, that has our grocery list
const basket = ['apples, oranges, grapes'];

// The for of loop:
for (item of basket) {
  console.log('for of loop:', item);
}

// What we're doing here is ITERATING over this array
// Iterating simply means we're able to go one by one through an item, in this case our basket array
// You can iterate over arrays and strings, so they are considered iterable

// Iterating over a string:
for (item of 'basket') {
  console.log('for of loop iterating over a string:', item);
}