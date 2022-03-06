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

// ---------- SORT ----------
// Sort companies based on their start year (earliest - latest)
// Inside the () after function keyword, it will take in two values
// At each iteration, it will take two companies and compare them
// We then return 1 or -1 to move them up and down inside the array
const sortedCompanies = companies.sort((comp1, comp2) => {
	if (comp1.start > comp2.start) {
		return 1;
	} else {
		return -1;
	}
});
console.log('sort companies by start date: old way', sortedCompanies);
// Shorthand form of above using ES6, ternary operator
const sortedCompaniesES6 = companies.sort((comp1, comp2) => (comp1.start > comp2.start ? 1 : -1));
// This reads as is comp1 starting date greater than comp2 starting date?
// Return 1, else return -1
console.log(
	'sort companies by start date: new way with ternary operator and arrow function',
	sortedCompaniesES6
);
// NOTE:
// Using comp1 and comp2 is fine, but typically, we'd just a & b like this:
const sortedCompaniesStandard = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// Array of Ages
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Sort ages from lowest to highest
// This does not work, it will only look at the first number so 5 is out of place
const sortedAges = ages.sort();
console.log('ages sorted by default - looks at first number only', sortedAges);

// To fix this:
const sortedAgesFixed = ages.sort((a, b) => a - b);
console.log('ages sorted fixed', sortedAgesFixed);

// Sort ages from highest to lowest
const sortedAgesFixedReverse = ages.sort((a, b) => b - a);
console.log('ages sorted fixed reverse order', sortedAgesFixedReverse);
