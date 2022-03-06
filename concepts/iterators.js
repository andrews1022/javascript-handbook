// Iterators are kind of like advanced loops in that they can be paused/resumed

// ---------- Iterator Example ----------
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < names.length ? { value: names[nextIndex++], done: false } : { done: true };
    }
  };
}

// Create an array of names
const namesArray = ['Jack', 'Jill', 'John'];

// Initalize iterator and pass in the names array
const names = nameIterator(namesArray);

// Iterate through it
console.log(names.next().value); // done = false
console.log(names.next().value); // done = false
console.log(names.next().value); // done = false
console.log(names.next()); // done = true
