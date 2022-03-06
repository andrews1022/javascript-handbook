let val;

// Get today's date, simply put 'new Date()'
const today = new Date();

val = today;
console.log(val);
console.log(typeof val);

// Change to different date
let birthday = new Date('9-10-1981 11:25:00');
console.log(birthday);

// Different date format
birthday = new Date('September 10, 1981');
console.log(birthday);

// Different date format
birthday = new Date('9/10/1981');
console.log(birthday);
