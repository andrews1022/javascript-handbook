// ------------------------------ PART 1 ------------------------------
// We're going to try and mimic blog posts on a server, getting them, and creating a blog post

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

function getPosts() {
  // setTimeout takes in a callback function
  // It also takes in an amount of time to delay
  // You can also use an arrow function, like below
  setTimeout(() => {
    // The purpose is to get the posts and put them on the page
    let output = '';

    // Loop through the posts
    posts.forEach((post) => (output += `<li>${post.title}</li>`));
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
    }, 750);
  });
}

// Using the new .then syntax
// No need to use use callback function
createPost({ title: 'Post Three', body: 'This is post three' })
  .then(getPosts)
  .catch((err) => console.log(err)); // set const error to true to see .catch work

// We need to use the keyword async if we want to use await
// Await waits for an asynchronous action to be completed
async function init() {
  await createPost({ title: 'Post Three', body: 'This is post three' });
  getPosts();
  // So we're waiting for createPost() to be done before moving on to getPosts();
}
// Call the async function
init();

// --------------- Async/Await w/ Fetch ---------------
async function fetchUsers() {
  // We need to put the fetch into a variable, and add await
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log('Your users: ', data);
}

// Call the function to log the 10 users from the API:
fetchUsers();
