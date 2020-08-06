// ------------------------------ PART 5 ------------------------------

// Update the function below from the video to also have async/await for this line:
fetch(url).then((resp) => resp.json());
// So there shouldn't be any .then() calls anymore!

// Data to be fetched:
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
];

// Promise version
const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map((url) => fetch(url).then((resp) => resp.json()))
  );
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
};

// Answer:
const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map(async function (url) {
      const response = await fetch(url);
      return response.json();
    })
  );
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
};
