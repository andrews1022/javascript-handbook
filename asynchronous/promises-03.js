// Promises using jsonplaceholder.typicode.com
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

// How can we grab all the data from each link in the above array?
// Let's use promises!
Promise.all(urls.map((url) => {
  return fetch(url).then((response) => response.json())
})).then((results) => {
  console.log(results[0])
  console.log(results[1])
  console.log(results[2])
}).catch(() => console.log('error occurred'))

// So at their most basic, promises are a bit like event listeners
// Except a promise can only succeed or fail once - it cannot succeed or fail twice.
// This is extremely useful for things that are asynchronous success and failure, such as API calls 
// Because we're less interested in the exact time something became available and more interested in reacting to the outcome.
// So we're reacting to something that happens asynchronously.

// So again let's remember what we started with:
// A promise is an object that may produce a single value sometime in the future
// It is either resolved or rejected with a reason why it was rejected 
// And a promise maybe in one of three possible states it can be fulfilled (resolved), rejected or pending.