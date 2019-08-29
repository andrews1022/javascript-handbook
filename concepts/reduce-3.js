// Complete the below questions using this array:
const array = [
	{ username: "john", team: "red", score: 5, items: ["ball", "book", "pen"] },
	{ username: "becky", team: "blue", score: 10, items: ["tape", "backpack", "pen"] },
	{ username: "susy", team: "red", score: 55, items: ["ball", "eraser", "pen"] },
	{ username: "tyson", team: "green", score: 1, items: ["book", "pen"] },
];

// Find out the total score of all users using 
// array / score
const totalUserScore = array.reduce(function (total, user) {
	return total + user.score;
}, 0);
console.log('sum of all users scores', totalUserScore);

// Arrow function of above
const totalUserScoreArrow = array.reduce((total, user) => {
	return total + user.score;
}, 0);
console.log('sum of all users scores using arrow function', totalUserScoreArrow);

// Arrow function shorthand of above
const totalUserScoreArrowShort = array.reduce((total, user) => total + user.score, 0);
console.log('sum of all users scores using arrow function shorthand', totalUserScoreArrowShort);