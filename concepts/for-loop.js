// For loops are best used when you know the length of what you are looping through

// You pass in 3 parameters:
// 1) the assignment of the iterator/variable
// 2) the condition that needs to be met
// 3) the increment (or decrement)
// And whatever is placed inside the { } will run until true

// ---------- EXAMPLE #1 ----------
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// You can also use template literals
for (let i = 0; i <= 10; i++) {
  console.log(`The index location of this for loop is ${i}`);
}

// ---------- EXAMPLE #2 ----------
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

for (let i = 0; i < companies.length; i++) {
  console.log('for loop', companies[i]);
}

// ---------- EXAMPLE #3 ----------
// Create a list (array) of things to do
var todos = ['clean room', 'brush teeth', 'exercise', 'study javascript', 'eat healthy'];

// Create a for loop to add a ! at the end of each index item
for (let i = 0; i < todos.length; i++) {
  // Add on an exclamation point to each todo:
  todos[i] = `${todos[i]}!`;

  console.log(i);
}
