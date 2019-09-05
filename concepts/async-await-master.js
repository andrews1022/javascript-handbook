// ------------------------------ ASYNC / AWAIT ------------------------------
// We're going to try and mimic blog posts on a server, getting them, and creating a blog post

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
  // setTimeout takes in a callback function
  // It also takes in an amount of time to delay
  // You can also use an arrow function, like below
  setTimeout(() => {
    // The purpose is to get the posts and put them on the page
    let output = '';

    // Loop through the posts
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 500);
}

// Create a new post using promises
// Instead of using a callback, we return a promise
function createPost(post) {
  // A promise takes in a callback function
  // It takes in 2 parameters: resolve, reject
  // When you want to resolve a promise successfully, you call 'resolve'
  // You something goes wrong, you call 'reject'
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      // const error = true; // uncomment this to see the .catch below work

      // Conditional
      // Reads as if not an error, then resolve
      // Else, if it is an error, then display message
      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong! :(');
      }
    }, 750)
  })
}

// Using the new .then syntax
// No need to use use callback function
createPost({ title: 'Post Three', body: 'This is post three' })
  .then(getPosts)
  .catch(err => console.log(err)); // set const error to true to see .catch work

// We need to use the keyword async if we want to use await
// Await waits for an asynchronous action to be completed
async function init() {
  await createPost({
    title: 'Post Three',
    body: 'This is post three'
  });
  getPosts();
  // So we're waiting for createPost() to be done before moving on to getPosts();
}
// Call the async function
init();

// ------------------------------ Async/Await w/ Fetch ------------------------------
async function fetchUsers() {
  // We need to put the fetch into a variable, and add await
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log('Your users: ', data);
}

// Call the function to log the 10 users from the API:
fetchUsers();

// ------------------------------ ASYNC/AWAIT ------------------------------
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

// ------------------------------ ASYNC/AWAIT WITH FETCH ------------------------------
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
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json();
  console.log(data);
}

// ------------------------------ ANOTHER EXAMPLE ------------------------------
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
  } catch (error){ // add the error parameter to see what type of error you get
    // If anything fails inside the try {}
    console.log('OOPS!', error) // Misspell one of the urls to see this in action
  }
}

// ------------------------------ EXAMPLE #1 ------------------------------
// Convert the below promise into async/await
fetch('https://swapi.co/api/starships/9/')
  .then(response => response.json())
  .then(console.log)

// Converted:
async function fetchStarship() {
  const response = await fetch('https://swapi.co/api/starships/9/');
  const data = await response.json();
  console.log('Your starships: ', data);
}

// ------------------------------ EXAMPLE #2 ------------------------------
// Update the function below from the video to also have async/await for this line: 
fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!

// Data to be fetched:
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

// Promise version
const getData = async function () {
  const [users, posts, albums] = await Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json())
  ));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}

// Answer:
const getData = async function () {
  const [users, posts, albums] = await Promise.all(urls.map(async function (url) {
    const response = await fetch(url);
    return response.json();
  }));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}

// ------------------------------ EXAMPLE #3 ------------------------------
// Add a try catch block to the #2 solution in order to catch any errors.
// Now change one of the urls so you console.log and error message
const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(urls.map(async function (url) {
      const response = await fetch(url);
      return response.json();
    }));
    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);
  } catch (error) {
    console.log('Oopies! That did not work.', error);
  }
}

// ------------------------------ .FINALLY() ------------------------------
// As the name suggests, it allows us to do something after a promise has 'finally' finished 
// It is placed at the very bottom

// Let's work with this data:
const urls = [
  'https://swapi.co/api/people/1/',
  'https://swapi.co/api/people/2/',
  'https://swapi.co/api/people/3/',
  'https://swapi.co/api/people/4/',
]

Promise.all(urls.map(url => {
  return fetch(url).then(people => people.json())
}))
  .then(array => {
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(error => console.log('Fix it please!', error))
  .finally(data => console.log('extra', data))
// This finally block will be called regardless of whether or not .then works or the promises erros and catches into an error
// So no matter what, after everything is done inside of a promise, .finally() will be called
// And it'll be called whether it resolves or rejects
// And .finally() does something that we tell it to do

// Above, but with an error thrown:
Promise.all(urls.map(url => {
  return fetch(url).then(people => people.json())
}))
  .then(array => {
    throw Error;
    // When this line hit, it skips over everything below it, and hit the .catch() block

    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(error => console.log('Fix it please!', error))
  .finally(data => console.log('extra', data)) // will still appear even though an error was thrown and .catch() block as ran
  
// So .finally() is great for those times that you need to run a piece of code no matter what after a Promise


// ------------------------------ FOR AWAIT OF LOOP ------------------------------
// Code for reference:
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(urls.map(async function (url) {
      const response = await fetch(url);
      return response.json();
    }));
    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);
  } catch (error) {
    console.log('Oopies! That did not work.', error);
  }
}

// 'for await of' allows us to loop through our async/await calls if we have multiple of them just like we are able to using the for of
// So using the for of loop that allowed us to iterate over iterables, we're now able to iterate over the await promises that we're going to have
// Let's create a new function with this in mind:

// First, with the for of loop
const loopThroughUrls = urls => {
  for (url of urls) {
    console.log(url);
  }
}

// Now with 'for await of':
const getData2 = async function () {
  // In here we can have an array of promises
  // Because an array of promises is irritable and able to be looped by the 'for await of' keywords
  const arrayOfPromises = urls.map(url => fetch(url));
  // So here in the first line, all we're doing is creating an array of these fetch promises of each one of these requests (the urls)

  // Next, we can use the 'for await of' loop to loop through these promises
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
}

// Same funcion but without comments for better readability:
const getData2 = async function () {
  const arrayOfPromises = urls.map(url => fetch(url));
  
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
}