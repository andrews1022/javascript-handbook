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
  { name: 'Walmart', category: 'Retail', start: 1981, end: 1989 },
];

// Array of Ages
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// ----------------------------------- FOR LOOP -----------------------------------
for (let i = 0; i < companies.length; i++) {
  console.log('for loop', companies[i]);
}

// ----------------------------------- FOR EACH LOOP -----------------------------------
// Takes in a callback function, which is synchronous
// Can takes in 3 things:
// An iterator, in this case each company
// Can also take in an index, and the entire array itself, but we will just use an iterator
companies.forEach((company) => {
  console.log('forEach', company);
});

// ----------------------------------- FILTER -----------------------------------
// As the name suggests what it does is that filter allows us to filter things out from the array
// Using the ages array above, let's filter out all ages 21 and over

// But first, let's see that using a standard for loop
// First we need an empty array
let canDrink = [];

// Next, our for loop
for (let i = 0; i < ages.length; i++) {
  // If ages, current iteration, is greater than or equal to 21
  if (ages[i] >= 21) {
    // Push on to it/add onto canDrink array
    canDrink.push(ages[i]);
  }
}
// Console log the canDrink array
console.log('for loop canDrink', canDrink);

// Now, lets use filter instead
// First define a variable
// Then it takes in a function
const canDrinkTwo = ages.filter((age) => {
  // Test the age parameter
  if (age >= 21) {
    // All you have to do is return true
    return true;
  }
});
console.log('filter canDrink', canDrinkTwo);

// We can improve this, and put it all onto one line using ES6 Arrow Functions
// Put in the parameter of age, and insert arrow function, and the condition of age is equal to or greater than 21
const canDrinkArrow = ages.filter((age) => age >= 21);
console.log('filter canDrink arrow ES6', canDrinkArrow);

// ---------- Using filter() with the companies array ----------
// EXAMPLE 1 - FILTERING COMPANIES THAT ARE RETAIL
// First, the ES5 way with standard function
const retailCompanies = companies.filter((company) => {
  if (company.category === 'Retail') {
    return true;
  }
});
console.log('retailCompanies ES5', retailCompanies);

// Arrow function way
// And since we only have on parameter, company, we don't need the () around it
// If were also using a parameter of index, then it should like like this:
// const retailCompaniesArrow = companies.filter((company, index) => ...
const retailCompaniesArrow = companies.filter((company) => company.category === 'Retail');
console.log('retailCompanies Arrow Function ES6', retailCompaniesArrow);

// EXAMPLE 2 - FILTERING COMPANIES THAT STARTED IN THE 1980s
// My attempt---WORKS!!
const retailCompaniesEighty = companies.filter(
  (company) => company.start >= 1980 && company.start <= 1989
);
console.log('filter companies starting in the 80s', retailCompaniesEighty);

// EXAMPLE 3 - FILTERING COMPANIES THAT HAVE LASTED 10 OR MORE YEARS
// End date minus the  date is greater than or equal to 10
const lastedTenYears = companies.filter((company) => company.end - company.start >= 10);
console.log('filter companies lasting more than 10yrs', lastedTenYears);

// ----------------------------------- MAP -----------------------------------
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

// ----------------------------------- SORT -----------------------------------
// sort companies based on their start year (earliest - latest)
// Inside the () after function keyword, it will take in two values
// At each iteration, it will take two companies and compare them
// We then return 1 or -1 to move them up and down inside the array
const sortedCompanies = companies.sort(function (comp1, comp2) {
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

// Sort ages from lowest to highest
// const sortedAges = ages.sort();
// console.log('ages sorted by default - looks at first number only', sortedAges);
// To fix this:
// const sortedAgesFixed = ages.sort((a, b) => a - b);
// console.log('ages sorted fixed', sortedAgesFixed);

// Sort ages from highest to lowest
// const sortedAgesFixedReverse = ages.sort((a, b) => b - a);
// console.log('ages sorted fixed reverse order', sortedAgesFixedReverse);

// ----------------------------------- REDUCE -----------------------------------
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

// ----------------------------------- COMBINE METHODS -----------------------------------
// Steps taken here:
// Take all ages, and times them by 2
// Then, filter all ages 40 and over
// Next, sort lowest to highest
// Finally, use reduce to add them all together
const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log('combined array methods', combined);
