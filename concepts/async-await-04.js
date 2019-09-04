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