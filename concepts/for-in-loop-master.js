// ------------------------------ PART 1 ------------------------------

// The for in loop works with OBJECTS

// The for in loop allows us to loop over and see a object's properties.
const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes: 25
}

for (item in detailedBasket) {
	console.log('for in loop on an object:', item);
}
// What do here is enumerating
// Properties in an object in JavaScript are what's known as enumerables
// And an object in JavaScript is enumerable if it allows us to see the properties

// *** NOTE ***
// Consider this array:
const basket = ['apples, oranges, grapes'];

// If we were to use a for of loop on an object
for (item of detailedBasket) {
	console.log(item);
}
// We get an error saying: Uncaught TypeError: detailedBasket is not iterable
// We cannot use an iterable loop on an enumerable object

// But if we run (a for in loop on an array)
for (item in basket) {
	console.log(item);
}
// This works, and we get the index locations
// This also works because underneath the hood you can think of JavaScript arrays like objects.

// You can think of our basket array like this:
basket = {
	0: 'apples',
	1: 'oranges',
	2: 'grapes'
}


// ------------------------------ PART 2 ------------------------------

// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
	glasses: 1,
	books: 2,
	floss: 100
}

// The function:
function checkBasket(basket, lookingFor) {
	for (item in basket) {
		if (item === lookingFor) {
			return `${lookingFor} is in your basket.`
		}
	}
	return `That items is not in your basket.`
}