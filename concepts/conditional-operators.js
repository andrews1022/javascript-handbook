// Conditional Characters
// OR = || > one condition must be true
// AND = && > both conditions must be true
// NOT = != > condition is not true

// ---------- EXAMPLE #1 ----------
const b = 6;
const c = 11;
if (b > 5 && c > 10) {
  console.log('b is more than 5 or y is more than 10');
}

// ---------- EXAMPLE #2 ----------
const name = 'Steve';
const age = 30;

// AND, && - BOTH MUST BE TRUE
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR, || - ONE MUST BE TRUE
if (age < 16 || age > 65) {
  console.log(`${name} cannot run in the race`);
} else {
  console.log(`${name} is registered for the race!`);
}
