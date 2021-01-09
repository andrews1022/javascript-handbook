// John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48, and $268

// To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50-$200, and 10% if the bill is more than $200.

// In the end, John would like to have 2 arrays
// 1) Containing just the 3 tips (one for each bill)
// 2) Containing all 3 final paid amounts (bill + tip)

// Reminder:
// To calculate 20% of a value, simply multiply it by 0.2

// Solution:
const bills = [124, 48, 268];

const tipArray = bills.map((bill) => {
	// *NOTE* (bill) represents each index value inside the bills array
	let tip = 0;

	if (bill <= 49) {
		tip = bill * 0.2;
	} else if (bill >= 50 && bill <= 200) {
		tip = bill * 0.15;
	} else {
		tip = bill * 0.1;
	}

	return tip;
});

const finalArray = tipArray.map((tip, index) => {
	return tip + bills[index];
});
// *NOTE* (tip) represents each index value in the tipArray, and (index) represents each index value in the bills array - this adds them together

console.log('Tips:', tipArray);
console.log('Final amounts paid:', finalArray);
