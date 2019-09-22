// ------------------------------ PART 3 ------------------------------

// ---------- ASYNC/AWAIT WITH FETCH ----------
// Again, the fetch function, that's a promise
// If you type fetch() into the console, you get:
/*
Promise {<rejected>: TypeError: Failed to execute 'fetch' on 'Window': 1 argument required, but only 0 present.
    at <…}
*/

// So let's fetch from jsonplaceholder.com
// Getting the users with fetch() the old way with promises
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) // run the response through json
  .then(console.log()); // log the data we get

// How can we turn this into async/await?
async function fetchUsers() {
  // So this function will pause until we get a response from fetch()
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
}

// ----- ANOTHER EXAMPLE -----
// An array of multiple links from jsonplaceholder API
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

// Using promises:
Promise.all(urls.map(url =>
  fetch(url).then(response => response.json())
)).then(array => {
  console.log('users', array[0])
  console.log('posts', array[1])
  console.log('albums', array[2])
}).catch('Oops!')

// Let's convert the above promise into an async function:
const getData = async function () {
  const [users, posts, albums] = await Promise.all(urls.map(url =>
    fetch(url).then(response => response.json())
  ))
  console.log('users', users)
  console.log('posts', posts)
  console.log('albums', albums)
}

// But how can we 'catch' erros?
// We use try {}
// And it also uses a catch{}, with an error parameter
const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(urls.map(url =>
      fetch(url).then(response => response.json())
    ))
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
  } catch (error) { // add the error parameter to see what type of error you get
    // If anything fails inside the try {}
    console.log('OOPS!', error) // Misspell one of the urls to see this in action
  }
}