// Array of company objects
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

// Takes in a callback function, which is synchronous
// Can takes in 3 things
// An iterator, in this case each company
// Can also take in an index, and the entire array itself
// But we will just use an iterator

companies.forEach(function (company) {
  console.log('forEach', company);
});
