// Our Array of Objects
const companies = [
	{ name: 'RBC', category: 'Finance', start: 1981, end: 2004 },
	{ name: 'Winners', category: 'Retail', start: 1992, end: 2008 },
	{ name: 'Ford', category: 'Auto', start: 1999, end: 2007 },
	{ name: 'Urban Barn', category: 'Retail', start: 1989, end: 2010 },
	{ name: 'Microsoft', category: 'Technology', start: 2009, end: 2014 },
	{ name: 'H&R Block', category: 'Finance', start: 1987, end: 2010 },
	{ name: 'BMW', category: 'Auto', start: 1986, end: 1996 },
	{ name: 'Apple', category: 'Technology', start: 2011, end: 2016 },
	{ name: 'Walmart', category: 'Retail', start: 1981, end: 1989 }
];

// Array of Ages
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Reduce can get really complicated, but we will keep it simple here

// Let's take all the ages in the ages array, and add them all together
// First using a for loop
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
	ageSum += ages[i];
}
console.log('ages array sum', ageSum);

// Now lets use reduce to do the same thing
const ageSumReduce = ages.reduce(function (total, age) {
	return total + age;
}, 0);
console.log('ages array sum using reduce', ageSumReduce);

// To shorten this up
const ageSumReduceShort = ages.reduce((total, age) => total + age, 0);
console.log('ages array sum using reduce shorthand', ageSumReduceShort);

// Get total years for all companies
const totalYears = companies.reduce(function (total, company) {
	return total + (company.end - company.start);
}, 0);
console.log('companies array total number of years', totalYears);

const totalYearsShort = companies.reduce(
	(total, company) => total + (company.end - company.start),
	0
);
console.log('companies array total number of years shorthand', totalYearsShort);
