// ---------------------- PROMISES ----------------------
// We're going to try and mimic blog posts on a server, getting them, and creating a blog post

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

// Get the posts
function getPosts() {
  setTimeout(() => {
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

      // Conditional statement below reads as 
      // If not an error, then resolve
      // Else, if it is an error, then display message
      if(!error){
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


// -------------- Promise.all --------------
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise ((resolve, reject) => {
  setTimeout(resolve, 1000, 'Goodbye!')
});

// Fetch users from a fake/ready to use API
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Call promise.all takes in an array of promises
// It will take how long however the longest promise is
Promise.all([promise1, promise2, promise3, promise4])
  .then((values) => {
    console.log(values)
  })