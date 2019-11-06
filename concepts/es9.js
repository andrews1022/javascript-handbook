// --------------- OBJECT SPREAD OPERATOR ---------------
// Our basic object of animals and their ages:
const animalAges = {
  tiger: 12,
  lion: 5,
  monkey: 2
}

// Destructure it:
const { tiger, ...rest } = animalAges;

// Calling tiger in the console gets: 12
// Calling rest in the console gets: {lion: 5, monkey: 2}

// Same can be done for arrays:
const numbersArray = [1, 2, 3, 4, 5];

function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}
sum(...numbersArray); // gives the answer, which is 15
// Here we are able to spread the array over the parameters


// --------------- .FINALLY() ---------------
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
Promise.all(urls.map((url) => {
  return fetch(url).then((people) => people.json())
}))
  .then((array) => {
    throw Error;
    // When this line hit, it skips over everything below it, and hit the .catch() block

    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch((error) => console.log('Fix it please!', error))
  .finally((data) => console.log('extra', data)) // will still appear even though an error was thrown and .catch() block as ran
  
// So .finally() is great for those times that you need to run a piece of code no matter what after a Promise


// --------------- FOR AWAIT OF ---------------
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
const loopThroughUrls = (urls) => {
  for (url of urls) {
    console.log(url);
  }
}

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
}

// Same funcion but without comments for better readability:
const getData2 = async function () {
  const arrayOfPromises = urls.map((url) => fetch(url));
  
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
}