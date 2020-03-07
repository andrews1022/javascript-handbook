// What is a promise?
// A promise is an object that may produce a single value some time in the feature
// The values are either a resolved value, or a reason that it's not resolved (rejected)
// A promise can be in 1 of 3 possible states: fullfilled, rejected, or pending

// --------- Creating our own promise ---------
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('Stuff worked!');
  } else {
    reject('Error, it broke!');
  }
});
// Since we made if = true, it's going to run the resolve
// If we made if = false, it's going to run the reject
// And the resolve is going to send "Stuff Worked" into the result and we're going to console.log "Stuff Worked."

// Run the promise
promise.then(result => console.log(result));
// Logged 'Stuff worked!'

// Example #2
promise
  .then((result) => result + '!')
  .then((result2) => {
    console.log(result2);
  })

// What if we have an error?
// We can use .catch()
promise
  .then((result) => result + '!')
  .then((result2) => {
    throw Error
    console.log(result2);
  })
  .catch(() => console.log('Errrooorrr!!'))

// Even if we run it like this:
promise
  .then((result) => {
    throw Error
    result + '!'
  })
  .then((result2) => {
    console.log(result2);
  })
  .catch(() => console.log('Errrooorrr!!'))
// We still get log 'Errrooorrr!!'
// .catch() catches any errors that may happen between the chains of .thens

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'Hiii')
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Pookie')
})

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Is it me you are looking for?')
})

// Can use Promise.all which takes in an array of promises
Promise.all([promise, promise2, promise3, promise4])
  // The values will be returned as an array in the order that they were just written down.
  .then(values => {
    console.log(values);
  })