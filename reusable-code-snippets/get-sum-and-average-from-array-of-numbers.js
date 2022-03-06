// Array of numbers from reference
const numArr1 = [89, 120, 103, 6, 24, 90];
const numArr2 = [116, 94, 123, 78, 102, 10];
const numArr3 = [97, 134, 106, 3, 205, 4];

// Function to get the average score, and able to pass in an array
function getAverageScore(array) {
	let total = 0;

	for (let i = 0; i < array.length; i++) {
		total += array[i];
	}

	const average = total / array.length;
	return average;
}

getAverageScore(numArr1); // 72
getAverageScore(numArr2); // 87.16666666666667
getAverageScore(numArr3); // 91.5

// And you round of decimals using .toFixed([num of decimals to show]) if you wish

// Getting the total is pretty much the same:
function getSumOfScores(array) {
	let total = 0;

	for (let i = 0; i < array.length; i++) {
		total += array[i];
	}

	return total;
}

getSumOfScores(numArr1); // 432
getSumOfScores(numArr2); // 523
getSumOfScores(numArr3); // 549

// Using a higher order array method to get the sum and average:
const sum = numArr1.reduce((a, b) => a + b, 0);
const avg = sum / numArr1.length || 0;

console.log(`The sum is: ${sum}. The average is: ${avg}.`);
