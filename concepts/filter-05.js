// ------------------------------ PART 5 ------------------------------

// Complete the below questions using this array:
const array = [
	{ username: "John", team: "red", score: 5, items: ["ball", "book", "pen"] },
	{ username: "Becky", team: "blue", score: 10, items: ["tape", "backpack", "pen"] },
	{ username: "Susy", team: "red", score: 55, items: ["ball", "eraser", "pen"] },
	{ username: "Tyson", team: "green", score: 1, items: ["book", "pen"] },
];

// Filter the array to only include users who are on team: red
const redTeamMembers = array.filter((user) => {
	if (user.team === 'red') {
		return true;
	}
})
console.log('Filter array with red team members', redTeamMembers);

// Arrow function of above
const redTeamMembersArrow = array.filter((user) => {
	if (user.team === 'red') {
		return true;
	}
})
console.log('Filter array with red team members using arrow function', redTeamMembersArrow);

// Arrow function shorthand of above
const redTeamMembersArrowShort = array.filter((user) => (user.team === 'red'));
console.log('Filter array with red team members using arrow function shorthand', redTeamMembersArrowShort);