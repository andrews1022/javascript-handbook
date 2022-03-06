// A very common use of JavaScript objects is to use them as hash maps, which simply means that we map string keys to arbitrary values, and we did that a lot earlier in the course
// Especially in the basic section, for example, in our more simple John object.
// Back then we had simple keys like name, age or job, and then mapped values to them, like John, 27 and teacher.
// Now this is called a hash map, and up until ES6, we had to use objects for that
// But now in ES6, we have something better, and that's maps
// So a map is a new key-value data structure in ES6, and one of the big differences is that in maps, we can use anything for the keys
// In object we are limited to strings, but in maps we can use any kind of primitive value like numbers, strings or Booleans, and we can even use functions or objects as keys, which is really cool!

// Our example will be Map for quiz, which only holds a single question

// Create map
const question = new Map();

// Add some data to it using .set()
question.set('question', 'What is the offical name of the latest major JavaScript version?'); // We set the key, then set the value (the actual quiz question)
// If this were an object, the 'question' would be the key, and the actually written question would be the value
// So now let's add some answers to this question:
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);

// Add what happens if the answer is true or false
question.set(true, 'Correct answer! :D');
question.set(false, 'Wrong, please try again! :(');

console.log(question);
// Here we can see that the __proto__ is for a type of Map, and that it comes with its own methods as well (like the Object and Array objects do)

// Retreive data using .get()
console.log(question.get('question')); // Use the key
// Get the length (0 based, like an array)
console.log(question.size);

// Delete data
question.delete(4); // Use the key
console.log(question);

// Check if a certain is present
if (question.has(4)) {
  console.log('Answer #4 is here');
} else {
  console.log('Answer #4 is not here');
}

// Delete everything inside the map, use .clear();
question.clear();
console.log(question);

// Maps are iterable, which means we can loop through them
// And we can do so using the forEach() method
// With forEach on maps, we have access to the current element, current key, and the entire map
question.forEach((value, key) => {
  console.log(`This is ${key} and it's set to ${value}`);
});

// We can also use the for of loop
// Now what if we wanted to access not only the key, but also the value?
// In this case we would once again have to use destructuring
// We use question.entries()
// What this does here is to return all entries of our questions map, and we can then use destructuring to store the key and values in two separate values, such as we did before.
// This is also possible for arrays
for (let [key, value] of question.entries()) {
  // console.log(`This is ${key} and it's set to ${value}`);

  // Only print the values of the key is a number
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

// Get user input
const answer = parseInt(prompt('Write the correct answer'));

// Display answer based on user input
// And since we set our keys to be booleans, we just need to display the appropiate response if the answer is correct or not
console.log(question.get(answer === question.get('correct'))); // This will evalulate to true or false, which are the keys we set above

// Summary
// Why are maps better than objects to create hash maps?
// There are a couple of reasons:

// The first reason why they're better is because we can use anything as keys, which opens a lot of possibilities as we just saw with this example.
// Second, because maps are iterable, that makes it very easy to loop through them and to manipulate data with them.
// Third, it's really easy to get the size of a map using the size property, and that can also be very handy.
// Finally, because we can easily add and remove data from a map.
// So all of these are strong arguments in choosing maps over objects, if we wanna build hash maps.
