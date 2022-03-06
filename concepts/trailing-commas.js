// -------------------------------------- TRAILING COMMAS --------------------------------------
const fun = (a, b, c, d) => {
	console.log(a);
};

fun(1, 2, 3, 4);

// The main reason for knowing this is when you start getting really, really big parameter lists, you'll see a lot of people doing things similar to this:
const funTrailing = (a, b, c, d, e) => {
	console.log(a);
};
// Also makes reading any changes in GitHub easier to read
