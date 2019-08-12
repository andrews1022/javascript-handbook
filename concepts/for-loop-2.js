// Our Array of Objects
const companies= [
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

for (let i = 0; i < companies.length; i++) {
    console.log('for loop', companies[i]);
}