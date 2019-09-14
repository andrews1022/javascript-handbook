// ------------------------------ PART 5 ------------------------------

// Complete the below questions using this array:
const array = [
	{ username: "john", team: "red", score: 5, items: ["ball", "book", "pen"] },
	{ username: "becky", team: "blue", score: 10, items: ["tape", "backpack", "pen"] },
	{ username: "susy", team: "red", score: 55, items: ["ball", "eraser", "pen"] },
	{ username: "tyson", team: "green", score: 1, items: ["book", "pen"] },
];

// Filter the array to only include users who are on team: red
const redTeamMembers = array.filter(function (user) {
	if (user.team === 'red') {
		return true;
	}
})
console.log('filter array red team members', redTeamMembers);

// Arrow function of above
const redTeamMembersArrow = array.filter(user => {
	if (user.team === 'red') {
		return true;
	}
})
console.log('filter array red team members arrow function', redTeamMembersArrow);

// Arrow function shorthand of above
const redTeamMembersArrowShort = array.filter(user => (user.team === 'red'));
console.log('filter array red team members arrow function shorthand', redTeamMembersArrowShort);