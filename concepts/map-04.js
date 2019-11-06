// Complete the below questions using this array:
const array = [
	{ username: "John", team: "red", score: 5, items: ["ball", "book", "pen"] },
	{ username: "Becky", team: "blue", score: 10, items: ["tape", "backpack", "pen"] },
	{ username: "Susy", team: "red", score: 55, items: ["ball", "eraser", "pen"] },
	{ username: "Tyson", team: "green", score: 1, items: ["book", "pen"] },
];

// Create an array using map that has all the usernames with a "? to each of the usernames
let mapArray = array.map(user => {
	let {username} = user;
	return username + "?";
})
console.log('map array names with question mark using arrow function', mapArray);