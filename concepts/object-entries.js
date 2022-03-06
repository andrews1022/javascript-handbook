// Here's our object
let obj = {
	username0: 'Santa',
	username1: 'Rudolph',
	username2: 'Mr. Grinch'
};

// Using .entries() example
Object.entries(obj).forEach((value) => {
	console.log(value);
});

// Replace username with empty string
Object.entries(obj).map((value) => {
	return value[1] + value[0].replace('username', '');
});
