const http = new easyHTTP;

// Get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (error, posts) {
//   // Test for the error
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(posts);
//   }
// });

// Get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (error, post) {
//   // Test for the error
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// });


// POST REQUESTS
// Create the data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
}

// Create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (error, post) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// });


// UPDATE POST
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(error, post){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// })


// DELETE
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (error, resp) {
  // Test for the error
  if (error) {
    console.log(error);
  } else {
    console.log(resp);
  }
});
