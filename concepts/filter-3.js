// Our Array of Objects
const companies = [
    {name: "RBC", category: "Finance", start: 1981, end: 2004},
    {name: "Winners", category: "Retail", start: 1992, end: 2008},
    {name: "Ford", category: "Auto", start: 1999, end: 2007},
    {name: "Urban Barn", category: "Retail", start: 1989, end: 2010},
    {name: "Microsoft", category: "Technology", start: 2009, end: 2014},
    {name: "H&R Block", category: "Finance", start: 1987, end: 2010},
    {name: "BMW", category: "Auto", start: 1986, end: 1996},
    {name: "Apple", category: "Technology", start: 2011, end: 2016},
    {name: "Walmart", category: "Retail", start: 1981, end: 1989}
];

// Array of Ages
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

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
const canDrinkTwo = ages.filter(function (age) {
    // Test the age parameter
    if (age >= 21) {
        // All you have to do is return true
        return true;
    }
});
console.log('filter canDrink', canDrinkTwo);

// We can improve this, and put it all onto one line using ES6 Arrow Functions
// Put in the parameter of age, and insert arrow function, and the condition of age is equal to or greater than 21
const canDrinkArrow = ages.filter(age => age >= 21);
console.log('filter canDrink arrow ES6', canDrinkArrow);


// ---------- Using filter() with the companies array ----------
// EXAMPLE 1 - FILTERING COMPANIES THAT ARE RETAIL
// First, the ES5 way with standard function
const retailCompanies = companies.filter(function (company) {
    if (company.category === 'Retail') {
        return true;
    }
});
console.log('retailCompanies ES5', retailCompanies);

// Arrow function way
// And since we only have on parameter, company, we don't need the () around it
// If were also using a parameter of index, then it should like like this:
// const retailCompaniesArrow = companies.filter((company, index) => ...
const retailCompaniesArrow = companies.filter(company => (company.category === 'Retail'));
console.log('retailCompanies Arrow Function ES6', retailCompaniesArrow);

// EXAMPLE 2 - FILTERING COMPANIES THAT STARTED IN THE 1980s
// My attempt---WORKS!! 
const retailCompaniesEighty = companies.filter(company => (company.start >= 1980 && company.start <= 1989));
console.log('filter companies starting in the 80s', retailCompaniesEighty);

// EXAMPLE 3 - FILTERING COMPANIES THAT HAVE LASTED 10 OR MORE YEARS
// End date minus the  date is greater than or equal to 10
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
console.log('filter companies lasting more than 10yrs', lastedTenYears);