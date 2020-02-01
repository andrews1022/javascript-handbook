// Here we have an array of fee objects
const fees = [
	{ verticalNum: 1, horizontalNum: 1, fee: 35500 },
	{ verticalNum: 1, horizontalNum: 2, fee: 66000 },
	{ verticalNum: 1, horizontalNum: 3, fee: 87000 },
	{ verticalNum: 2, horizontalNum: 1, fee: 66000 },
	{ verticalNum: 2, horizontalNum: 2, fee: 122000 },
	{ verticalNum: 2, horizontalNum: 3, fee: 161000 },
	{ verticalNum: 3, horizontalNum: 1, fee: 87000 },
	{ verticalNum: 3, horizontalNum: 2, fee: 161000 },
	{ verticalNum: 3, horizontalNum: 3, fee: 212000 },
	{ verticalNum: 4, horizontalNum: 1, fee: 97000 },
	{ verticalNum: 4, horizontalNum: 2, fee: 180000 },
	{ verticalNum: 4, horizontalNum: 3, fee: 238000 },
	{ verticalNum: 5, horizontalNum: 1, fee: 103000 },
	{ verticalNum: 5, horizontalNum: 2, fee: 190000 },
	{ verticalNum: 5, horizontalNum: 3, fee: 251000 }
];

// Also on the page are check boxes for businesses, and regions
// The number of business boxes checked correspond to the vertical number, and the regions for the hortizonal number

// To find the correct object/pair, we will use filter
const filteredPair = srFees.filter(pair => {
	return (
		pair.verticalNum == checkedBusinessBoxes &&
		pair.horizontalNum == checkekRegionBoxes
	);
});
