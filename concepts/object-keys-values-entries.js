// -------------------------------------- Object --------------------------------------
Object.values
Object.entries
Object.keys

// Here's our object
let obj = {
	username0: 'Santa',
	username1: 'Rudolph',
	username2: 'Mr. Grinch'
}

// .keys example
// After (obj).  we can do things like we could for an array
Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key]);
})

// .values example
Object.values(obj).forEach(value => {
	console.log(value);
})

// .entries example
Object.entries(obj).forEach(value => {
	console.log(value);
})

// Replace username with empty string
Object.entries(obj).map(value => {
	return value[1] + value[0].replace('username', '');
})