// ---------- EXAMPLE #1 ----------
// AJAX and the Fetch API are used to make HTTP requests to files, APIs, and services whether your own or some external REST API or something like that.
// AJAX and the XML HTTP request object are older technologies but are very reliable, and Fetch is a newer standard and we're going to be working with both.

// But first, let's look at synchronous code:
posts = loadPostsSync();
// ...wait until the posts are fetched
// ...do something with the posts
doTheNextThing(); // This has to wait until the posts load

// This could be really slow (bad bandwidth, slow network, etc.)
// This also BLOCKS the doTheNextThing function - which is known as CODE BLOCKING
// This slows things down big time

// Now let's look at the same code but written asynchronously
loadPostsAsync(function() {
  // ...wait until the posts are fetched
  // ...do something with the posts
});
doTheNextThing(); // Now this doesn't have to wait until the posts load
// In this case instead of just pulling the post out of a synchronous function we're passing in a callback function which is just one method for handling a synchronous code.
// This callback will run and fetch the pose and allow us to do something with the post. But the do the next thing function does not have to wait until the posts are fetched and loaded.
// The program is not blocked, and will keep going, so it turn it is much faster

// Most async code you work with will be part of an API or library:
/*
- XMLHttpRequest
- Fetch
- AJAX
- Axios
- Other HTTP libraries
- Node.js (filesystem) module
*/

// There are a few ways to work with Async code:
/*
- Callbacks
- Promises
- Async/Await
*/


// ---------- EXAMPLE #2 ----------
// Basic synchronous example - all the instructions are executed one after the other, line by line, just in the order they are written
const second = () => {
  console.log('Second');
}

const first = () => {
  console.log('First');
  second();
  console.log('Third');
}
first();


// Asynchronous code example - use setTimeout to simulate asynchronous code
const asyncSecond = () => {
  setTimeout(() => {
    console.log('Second'); // Notice the delay where this appears
  }, 2000);
}

const asyncFirst = () => {
  console.log('First');
  second();
  console.log('Third');
}
asyncFirst();