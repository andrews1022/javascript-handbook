// Type conversion means taking the variable and changing the data type
// A real world example could be if you're taking input from a form, and you're putting that into a variable that's going to be a string by default. And then if you want to apply calculations to it you're going to want to parse it you're going to want to change it into a number type.

// Our starting variable
let val;

// ---------- NUMBER TO STRING ----------
// Init a variable called val
val = 5;

// Output
console.log(val);
console.log(typeof val);
console.log(val.length); // Length only works on string, so here we get undefined

// Try again, but using String method
val = String(555);
console.log(val);
console.log(typeof val);
console.log(val.length);

// With an expression
val = String(4 + 4);
console.log(val);
console.log(typeof val);
console.log(val.length);

// ---------- BOOLEAN TO STRING ----------
val = String(true);
console.log(val);
console.log(typeof val);
console.log(val.length);

// ---------- DATE TO STRING ----------
val = String(new Date());
console.log(val);
console.log(typeof val);
console.log(val.length);

// ---------- ARRAY TO STRING ----------
val = String([1, 2, 3, 4, 5]);
console.log(val);
console.log(typeof val);
console.log(val.length);

// ---------- toString() ----------
// We also have the toString() method, which does the same thing as String()
val = (5).toString();
console.log(val);

// ---------- STRING TO NUMBER ----------
val = Number('5');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2)); // Specify number of decimal points (blank = 0)

// ---------- BOOLEAN TO NUMBER ----------
val = Number(true);
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

val = Number(false);
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

// ---------- NULL TO NUMBER ----------
val = Number(null);
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

// ---------- NaN TO NUMBER ----------
val = Number('hello');
console.log(val); // Logs NaN - a value that stands for Not A Number
console.log(typeof val);
console.log(val.toFixed());
// This is what happens when a value tries to get parsed as a number but can't

// ---------- parseInt() ----------
// Similar to toString(), converting to number also as a similar short and sweet method called parseInt()
val = parseInt('100');
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

// If you need to parse a decimal number, then you need to use parseFloat()
// parseInt will only return the base number without decimals
val = parseFloat('100.303');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(3));
