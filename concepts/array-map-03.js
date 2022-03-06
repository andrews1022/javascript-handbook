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

// Map works differently than filter, as it creates a whole new array from a current array

// Let's grab all of the company names and put them into their own array
const mapCompanyArray = companies.map((company) => company.name);
console.log('map array company names only', mapCompanyArray);

// Another example, map a new array of companies and their start to end date
const testMap = companies.map((company) => `${company.name}: (${company.start} - ${company.end})`);
console.log('map array company info', testMap);

// Another example, ages array and square each number
const agesSquared = ages.map((age) => age * age);
console.log('ages array squared', agesSquared);

// Another example, ages array and add 2 to each number
const agesPlusTwo = ages.map((age) => age + 2);
console.log('ages array plus 2', agesPlusTwo);

// Another example, using two maps at once
// First squaring the number, then adding 2
const doubleMap = ages.map((age) => age * age).map((age) => age + 2);
console.log('array with 2 maps', doubleMap);
