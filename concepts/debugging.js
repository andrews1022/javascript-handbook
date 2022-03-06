// Debugging is the act of looking over code, understanding what it's doing and figuring out why it's not acting as expected

// Here's our example
// var flattened = [[0, 1], [2, 3], [4, 5]].reduce((accumulator, array)) => accumulator.concat(array), []);

// Let's brake this down:
// We are assigning the variable flattened to an array
// There are 2 nested arrays inside of the array
// This function wants to something called flattened
// .reduce: a is the accumulator
// .reduce: b is the array itself (NOT THE NESTED ARRAYS)
// Next we see that we want the accumulator to start off with an empty array
// From here we can open up the function:
var flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
].reduce((accumulator, array) => {
  // You can start debugging by using console.log
  console.log('array', array);
  console.log('accumulator', accumulator);

  return accumulator.concat(array);
}, []);

console.log(flattened);

// You can also use the 'debugger' keyword
// This tells the browser to freeze and opens up the debugging window inside Dev Tools
// You can use the Step Over button to run through your code one line, or step, at a time
