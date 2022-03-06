// async mdn page: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// await mdn page: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

// ----- ex #1 -----
// simple example with fetch:
async function fetchUsers() {
  // we need to put the fetch into a variable, and add await
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log('Your users: ', data);
}

// call the function to log the 10 users from the api:
fetchUsers();

// ----- ex #2 -----
// an array of multiple links from jsonplaceholder API
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
];

// using async/await with Promise.all()
// we can use try/catch to catch any possible erros
const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => fetch(url).then((response) => response.json()))
    );
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (error) {
    // add the error parameter to see what type of error you get if anything fails inside the try block
    console.log('OOPS!', error); // misspell one of the urls above to see this work
  }
};
