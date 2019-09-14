// ------------------------------ PART 2 ------------------------------

// We said arrays look something like this:
const array = [1, 2, 10, 16];

// And as the name suggests, we can filter our array based on a condition
// For our demo, let's return all the elements in the array 'array' that are greater than five
const filteredArray = array.filter(num => {
	// As with map, we must return something
	return num > 5;
})
console.log('filter', filteredArray);
// Again, since this is a single return value, we can use shorthand version
const filteredArrayShort = array.filter(num => num > 5);

console.log('filter short', filteredArrayShort);
// If it returns false, ut won't go into the array 
// If it returns true, it will