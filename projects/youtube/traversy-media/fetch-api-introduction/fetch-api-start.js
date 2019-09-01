// Add event listeners 
document.querySelector('#getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('addPost').addEventListener('submit', addPost);

// ------------- Function for blue Get Text button -------------
function getText() {
  // What we wanna do is fetch a text file asynchronously
  // Call the fetch function
  // Fetch returns a promise 
  // It's essentially a placeholder for the response we're going to get

  // fetch('sample.txt')
  //   .then(function(response){
  //     return response.text(); // if logged, just gives the promise not the actual text
  //   })
  //     .then(function(data){
  //       console.log(data); // this will log the text from the file
  //     })

  // Arrow function version of above code block:
  fetch('sample.txt')
    .then((response) => response.text())
    .then((data) => {
      document.querySelector('#output').innerHTML = data;
    })
    .catch((error) => console.log(error)) // you can add a catch() to watch for errors
}


// ------------- Function for green Get JSON button -------------
function getUsers() {
  fetch('users.json') // get the file
    .then((response) => response.json()) // take the response and set it to json
    .then((data) => { // get out data and set an arrow func to a code block
      // Put this output to the browser
      let output = '<h2>Users</h2>';

      // Loop through
      data.forEach(function (user) {
        // For each iteration, add on to our output variable
        output += `
          <ul class="list-group mb-3">
            <li class="list-group-item">ID: ${user.id}</li>
            <li class="list-group-item">Name: ${user.name}</li>
            <li class="list-group-item">Email: ${user.email}</li>
          </ul>
          `;
      })
      document.querySelector('#output').innerHTML = output;
    })
}


// ------------- Function for yellow Get API Data button -------------
function getPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts') // get the url from the api
    .then((response) => response.json()) // take the response and set it to json
    .then((data) => { // get out data and set an arrow func to a code block
      // Put this output to the browser
      let output = '<h2>Posts</h2>';

      // Loop through
      data.forEach(function (post) {
        // For each iteration, add on to our output variable
        output += `
          <div class="card card-body mb-3">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </div>
        `;
      })
      document.querySelector('#output').innerHTML = output;
    })
}


// ------------- Function for submitting form -------------
function addPost(event) {
  // Prevent the form from submitting to a file
  event.preventDefault();

  // We want the values of the title and body fields
  let title = document.querySelector('#title').value;
  let body = document.querySelector('#body').value;

  // Call fetch
  // This will take in a second paramter which will be an object
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      // body is where we apply the data
      body: JSON.stringify({
        title: title,
        body: body
      })
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
}