// ------------------------------ PART 2 ------------------------------

// Async/Await is part of ES8 and is built on top of promises.
// Now underneath the hood an async function is a function that returns a promise.
// But the benefit of async/await is that it makes code easier to read.

// A promise
movePlayer(100, 'Left')
  .then(() => movePlayer(400, 'Left'))
  .then(() => movePlayer(10, 'Right'))
  .then(() => movePlayer(350, 'Left'))
// This is asynchronous code
// We know that movePlayer is going to happen, and subsequent movePlayers will happen

// With async/await, it would look something like this
async function playerStart() {
  await movePlayer(100, 'Left'); // pause
  await movePlayer(400, 'Left'); // pause
  await movePlayer(10, 'Right'); // pause
  await movePlayer(350, 'Left'); // pause
}
// So what's going on here?
// The big benefit of async await is that it makes code easier to read
// The goal with async await is to make code look synchronous - code that's asynchronous look synchronous.

// Remember, a promise in JavaScript is like an IOU
// I 'promise' to return something to you in the future
// Something like an AJAX call, resizing an image, getting some information from a database, etc.
// But these are all things that take time.
// Instead of waiting around on them, we want to continue on with our lives and just have it let us know when it's done.
// And we're going to keep working on our own stuff while it's doing that in the background.
// We do it this way because that is how JavaScript works.
// And since JavaScript is single threaded, for our programs to be efficient, we can use asynchronous programming to do these things.

// Again, async/await code are just promises.
// Underneath the hood we call this 'syntactic sugar'
// This is something that still does the same thing but it's just different syntax to make it look prettier.
// With promises, you have to keep chaining .then()s
// Async on the other hand has this async keyword in front of it and some await keywords.

// So let's take a look at this same code block from above in futher detail:
async function playerStart() {
  await movePlayer(100, 'Left'); // pause
  await movePlayer(400, 'Left'); // pause
  await movePlayer(10, 'Right'); // pause
  await movePlayer(350, 'Left'); // pause
}
// We first declare a function as 'async'
// We let JavaScript know - "Hey! This is an async function!", And we declare it with the keyword function and then a function name.
// So in our example, 'async function playerStart()'
// We now can do anything we want inside of this function
// And we have access to a new keyword, 'await', because we used the 'async' keyword to define this function.
// This 'await' key word says - "Hey! Pause this function until I have something for you!"
// So we're AWAITING the response.
// And you can use this 'await' keyword in front of any function that returns a promise
// And once the promise is resolved then the function moves to the next line and it awaits the next move, and awaits the next move, and so on

// Now the cool thing is that we can actully assign variables:
async function playerStart() {
  const firstMove = await movePlayer(100, 'Left');  // pause
  const secondMove = await movePlayer(400, 'Left'); // pause
  const thirdMove = await movePlayer(10, 'Right');  // pause
  const fourthMove = await movePlayer(350, 'Left'); // pause
}
// So here we just have simple synchronous programming
// You're just waiting for each line to happen