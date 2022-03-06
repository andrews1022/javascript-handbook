// With synchronous tasks, if we have one function that takes up a lot of time, it's going to hold up the line.
// But remember we said JavaScript is non-blocking, so ideally we don't wait around for things that take time.
// Well, asynchronous to the rescue.

// So instead of this:
console.log('1');
console.log('2');
console.log('3');

// We can do something like this (copy and paste into console):
console.log('1');
setTimeout(function () {
  console.log('2');
}, 2000);
console.log('3');

// setTimeout', is a function that comes within our browsers, and it allows us to create a timeout.
// And we can just give it the first parameter is the function that we want to run.
// And then the second parameter is how many seconds we want to wait. In this case, 2000 milliseconds (2 seconds).
