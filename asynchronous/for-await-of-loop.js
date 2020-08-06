// --------------- FOR AWAIT OF LOOP ---------------

// Code for reference:
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
];

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(async function (url) {
        const response = await fetch(url);
        return response.json();
      })
    );
    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);
  } catch (error) {
    console.log('Oopies! That did not work.', error);
  }
};

// 'for await of' allows us to loop through our async/await calls if we have multiple of them just like we are able to using the for of
// So using the for of loop that allowed us to iterate over iterables, we're now able to iterate over the await promises that we're going to have
// Let's create a new function with this in mind:

// First, with the for of loop
const loopThroughUrls = (urls) => {
  for (url of urls) {
    console.log(url);
  }
};

// Now with 'for await of':
const getData2 = async function () {
  // In here we can have an array of promises
  // Because an array of promises is irritable and able to be looped by the 'for await of' keywords
  const arrayOfPromises = urls.map((url) => fetch(url));
  // So here in the first line, all we're doing is creating an array of these fetch promises of each one of these requests (the urls)

  // Next, we can use the 'for await of' loop to loop through these promises
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};

// Same funcion but without comments for better readability:
const getData2 = async function () {
  const arrayOfPromises = urls.map((url) => fetch(url));

  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};
