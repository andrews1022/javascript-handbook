// MDN page: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// The filter() method creates a new array with all elements that pass the test implemented by the provided function
// With .filter(), we have access to the current element, current index, and the entire array itself inside of the callback function

// ---------- EXAMPLE #1 ----------
// To-do list array of objects
const toDoLoop = [
  { id: 1, text: 'Take out the trash', isCompleted: true },
  { id: 2, text: 'Meeting wit the boss', isCompleted: true },
  { id: 3, text: 'Dentist appointment', isCompleted: false },
];

// Filter out each to-do where isCompleted === true
const toDoCompleted = toDoLoop
  .filter((toDoItem) => {
    return toDoItem.isCompleted === true;
  })
  .map(function (toDoThing) {
    return toDoThing.text;
  });

console.log(toDoCompleted); // we print an array with two values

// ---------- EXAMPLE #2 ----------
// Basic number array
const numArr = [1, 2, 10, 16];

// Filter our all elements greater than 5
const filteredArray = numArr.filter((num) => {
  return num > 5;
});

console.log('filter', filteredArray);

// Since this is a single return value, we write it like this:
const filteredArrayShort = numArr.filter((num) => num > 5);

console.log('filter short', filteredArrayShort);
// If it returns false, it won't go into the array
// If it returns true, it will

// ---------- EXAMPLE #3 ----------
// Array of Ages
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

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

// Now, lets use .filter() instead
// First define a variable, then it takes in a function
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

// ---------- EXAMPLE #4 ----------
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

// Filtering out companies that are retail
const retailCompanies = companies.filter((company) => {
  if (company.category === 'Retail') {
    return true;
  }
});
console.log('retailCompanies ES5', retailCompanies);

// Arrow function way - single line
const retailCompaniesArrow = companies.filter((company) => company.category === 'Retail');
console.log('retailCompanies Arrow Function ES6', retailCompaniesArrow);

// Filter companies that started in the 1980s
const retailCompaniesEighty = companies.filter(
  (company) => company.start >= 1980 && company.start <= 1989
);
console.log('filter companies starting in the 80s', retailCompaniesEighty);

// Filter companies that have lasted 10 or more years (end date - start date >= 10)
const lastedTenYears = companies.filter((company) => company.end - company.start >= 10);
console.log('filter companies lasting more than 10yrs', lastedTenYears);

// ---------- EXAMPLE #5 ----------
// Array of team member objects
const teamArray = [
  { username: 'John', team: 'red', score: 5, items: ['ball', 'book', 'pen'] },
  { username: 'Becky', team: 'blue', score: 10, items: ['tape', 'backpack', 'pen'] },
  { username: 'Susy', team: 'red', score: 55, items: ['ball', 'eraser', 'pen'] },
  { username: 'Tyson', team: 'green', score: 1, items: ['book', 'pen'] },
];

// Filter the array to only include users who are on team: red
const redTeamMembers = teamArray.filter((user) => {
  if (user.team === 'red') {
    return true;
  }
});
console.log('Filter array with red team members', redTeamMembers);

// Arrow function shorthand of above
const redTeamMembersArrowShort = teamArray.filter((user) => user.team === 'red');
console.log(
  'Filter array with red team members using arrow function shorthand',
  redTeamMembersArrowShort
);

// ---------- EXAMPLE #6 ----------
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
  { verticalNum: 5, horizontalNum: 3, fee: 251000 },
];

// Also on the page are check boxes for businesses, and regions
// The number of business boxes checked correspond to the vertical number, and the regions for the hortizonal number

// To find the correct object/pair, we will use filter
const filteredPair = srFees.filter(
  (pair) => pair.verticalNum == checkedBusinessBoxes && pair.horizontalNum == checkekRegionBoxes
);
