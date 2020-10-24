// What is a promise?
// A promise is an object that keeps track about whether a certain event has happened already or not
// The promise then determines what happens next after the asynchronous event has happened
// A promise implements the concept of a future value that we're expecting

// A promise can have different states:
// Before the event has happened, the promise is PENDING
// After the event has happened, the promise is called SETTLED or RESOLVED
// If the promise was successful, then it is FULLFILLED
// If there was an error, the promise is then REJECTED

// In more practical terms, we can 'produce' and 'consume' promises.
// When we produce a promise, we create a new promise and send a result using that promise
// Then, when we consume it, we can use call back functions for fulfillment and for rejection of our promise.

// Recreate getting recipes from a server
// We pass in a callback function, called an executer function
// This callback function takes in two parameters: resolve and reject
// That's because this executor function here is used to inform the promise whether the event it is handling was successful or not
// And if it was successful we're gonna call the resolve function and if not we call the reject function
const getIDs = new Promise((resolve, reject) => {
	setTimeout(() => {
		// Calling the resolve function - to mark it as fullfilled
		// The resolve function takes in a parameter, which is the result of the promise
		// This is how we return our result from the promise if it was successful
		// So we return our array of recipe IDS
		resolve([523, 883, 432, 974]);
		// We won't run the reject function here, as this simply a setTime function, so there is no way it can fail
		// But if you're calling data from a server where all kinds of erros can occur, use it then
	}, 1500);
});

const getRecipe = (recipeID) => {
	return new Promise((resolve, reject) => {
		setTimeout(
			(id) => {
				const recipe = { title: 'Fresh tomato pasta', publisher: 'Andrew' };
				resolve(`Recipe ID: ${id}. Reciple title: ${recipe.title}`);
			},
			1500,
			recipeID
		);
	});
};

const getRelated = (publisher) => {
	return new Promise((resolve, reject) => {
		setTimeout(
			(publisher) => {
				const recipe = { title: 'Italian pizza', publisher: 'Andrew' };
				resolve(`${publisher}: ${recipe.title}`);
			},
			1500,
			publisher
		);
	});
};

// Now it is actually time that we consume this promise, and in order to do that we can use two methods
// All of the promise objects and inherit these methods, which are the 'then' and the 'catch' methods

// The 'then' method allows us to add an event handler for the case that the promise is fulfilled, which means that there is a result
// So now all we have to do here is to pass in a call back function which will handle what we do in case the promise was successful
// This callback also takes in a paramete
// This parameter here will be the result of the successful promise
// In this case, it will be the entire array above
// We can also chain on additional 'thens'
getIDs
	.then((ids) => {
		console.log(ids);
		return getRecipe(ids[2]);
	})
	.then((recipe) => {
		console.log(recipe);
		return getRelated('Jonas');
	})
	.then((recipe) => {
		console.log(recipe);
	})
	.catch((error) => {
		console.log(`Error: ${error}`);
	});
