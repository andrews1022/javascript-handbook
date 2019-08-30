// ---------------------- CALLBACKS ----------------------
// We're going to try and mimic blog posts on a server, getting them, and creating a blog post

const posts = [{
    title: 'Post One',
    body: 'This is post one'
  },
  {
    title: 'Post Two',
    body: 'This is post two'
  }
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

// Create a new post
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 750)
}

// Passing in getPosts as the call function
// everything appears at once
createPost({ title: 'Post Three', body: 'This is post 3'}, getPosts);