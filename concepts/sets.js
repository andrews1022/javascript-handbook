// Sets, introduced with ES6, are basically unique values
// It's a list of a set of unique values of any type whether it's primitive or reference
// They're always unique, so you can't have the same one twice
// Simply put in summary - sets store unique values of any time

const set1 = new Set();

// Add some values to set1 - use add method
set1.add(100);
set1.add('A String');
set1.add({ name: 'John' });
set1.add(true);
set1.add(100); // Doesn't get added - won't get added again
console.log(set1);

// Get size/count of the set
console.log(set1.size);

// Check for values
console.log(set1.has(100)); // true
console.log(set1.has(50 + 50)); // Use an expression - still true
console.log(set1.has({ name: 'John' })); // false - because it is a reference type - each name: john references a different point in memory

// Delete from the set
set1.delete(100);
console.log(set1);

// Iterate through sets
// For...of loop
for (let item of set1) {
	// Can also use set1.entries, set1.keys, & set1.values
	console.log(item);
}

// forEach loop
set1.forEach((value) => {
	console.log(value);
});

// Convert Sets to Arrays
const setArray = Array.from(set1);
console.log(setArray);

// Different way of writing a set:
const set2 = new Set([1, true, 'my string']);
console.log(set2);
