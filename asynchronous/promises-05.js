// First, let's talk about the idea of a promise
// A promise in JavaScript is you commit to something, and that promise has two results
// Either the promise is fullfilled (it is resolved), or the promise fails and it is rejected

// -------------------------- BASIC PROMISE EXAMPLE --------------------------
// Set the variable prom to a new Promise
// This promise object is going to take one parameter, which is a function, which itself gets two parameters of 'resolve' and 'reject'
// Next we need to create the definition of the function inside the { }
let prom = new Promise((resolve, reject) => {
  // Inside here, we need to define what the actual promise is
  let a = 1 + 1;
  if (a == 2) {
    // You can pass in ANYTHING into the resolve method, and the same goes for the reject method
    // And since 1 + 1 of course equals 2, it will always run the resolve method
    resolve('Success');
  } else {
    reject('Failed');
  }
});

// -------------------------- INTERACTING WITH PROMISES --------------------------
// .then is called when our promise resolves successfully
// .catch is going to be called if our promise is rejected/fails
prom
  .then((message) => {
    console.log('This is the .then ' + message);
  })
  .catch((message) => {
    console.log('This is in the .catch ' + message);
  });

// -------------------------- PROMISE.ALL --------------------------
// These promises will always resolve, the 'videos' will always be recorded, and will resolve with a simple message
const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 Recorded');
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded');
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded');
});

// Let's say we want to do something after we've recorded all 3 of these videos
// And we want to run all of these in parallel at the same time so we don't have to worry about waiting for one before we start the next
// We can use Promise.all
// Inside the ( ), we sent it in an array of the different promises that we want to run
// Promise.all will run every single one of these promises
// As soon as it's done, it is then going to call the .then() and .catch() methods depending on if they resolve or fail
Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree,
  // This .then() is going to send an array of all the successful messages
]).then((messages) => {
  console.log(messages);
});

// In the console we get back:
/* 
  (3) ["Video 1 Recorded", "Video 2 Recorded", "Video 3 Recorded"]
  0: "Video 1 Recorded"
  1: "Video 2 Recorded"
  2: "Video 3 Recorded"
  length: 3
  __proto__: Array(0)
*/

// Which is perfect, this means all promises ran and they all returned and as soon as they were done, it call the .then() method

// -------------------------- PROMISE.RACE --------------------------
// .race() is like .all(), except it'll return as soon as the first one is completed
Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then((message) => {
  console.log(message);
});
// So this will return a SINGLE message instead of all the messages from .all
// So in the console we just get 'Video 1 Recorded'
