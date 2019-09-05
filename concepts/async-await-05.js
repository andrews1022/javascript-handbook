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
Promise.all(urls.map(url => {
  return fetch(url).then(people => people.json())
}))
  .then(array => {
    throw Error;
    // When this line hit, it skips over everything below it, and hit the .catch() block

    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(error => console.log('Fix it please!', error))
  .finally(data => console.log('extra', data)) // will still appear even though an error was thrown and .catch() block as ran
  
// So .finally() is great for those times that you need to run a piece of code no matter what after a Promise
