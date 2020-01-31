// Write a program to print out the Fibonacci Sequence of numbers
// The numbers are (0), 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, etc.
// Each number is the sum of the two previous ones

function fibonacciGenerator(num) {
  var fibArray = [];

  for (var i = 0; i < num; i++) {
    if (i <= 1) {
      fibArray.push(i);
    } else {
      fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
  }

  return fibArray;
}

fibonacciGenerator(5);