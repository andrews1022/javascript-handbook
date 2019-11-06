// ------------------------------ PART 2 ------------------------------

// Before we dive into promises, let's take a look at callbacks

// Example:
element.addEventListener('click', submitForm);
// We have an element that we're adding an event listener to.
// And when a user clicks we're going to have the callback, submitForm.
//  That iss once the user clicks we're going to answer with submitForm.

// Example #2 - moving a player in a game:
movePlayer(100, 'Left', function () {
	movePlayer(400, 'Left', function () {
		movePlayer(10, 'Right', function () {
			movePlayer(330, 'Left', function () {				
			})
		})
	})
})
// Well, if we wanted to move player 100 to the left we'd run that.
// Once that is done, we want it to run a callback function which is to move player 400 to the left again 
// And then another callback function right after that is done to move player 10 to the right
// And then ANOTHER callback option to move player 330 to the left.
// And we have something called the 'pyramid of doom'.


// Realistic example - some kind of app using Twitter
grabTweets('https://twitter.com/BillGates', (error, billTweets) => {
	if (error) {
		throw Error;
	}
	displayTweets(billTweets)
	grabTweets('https://twitter.com/elonmusk', (error, elonTweets) => {
		if (error) {
			throw Error;
		}
		displayTweets(elonTweets)
		grabTweets('https://twitter.com/joerogan', (error, joeTweets) => {
			if (error) {
				throw Error;
			}
			displayTweets(joeTweets)
		})
	})
})
// Here, we grabTweets function, and the first parameter has the URL
// And then the callback function after you grab the tweets which has an 'error' And the tweets (billTweets).
// And if there's an error we throw an error. So that just creates an error in javascript.
// Otherwise we're going to display the tweets.
// But then if Bill's tweets were successful, then we also want to grab the tweets again.
// Let's do Elon Musk this time and again if error
// We're going to throw error.
// Otherwise we're going to display his tweets.
// And if that's successful then we're also going to grab Vitalik Buterin's tweets.
// And again if error, throw error otherwise display tweets