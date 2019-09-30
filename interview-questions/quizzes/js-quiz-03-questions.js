// Q1: What is the difference between const and let?

// Q2: What is the output of this function?
function keyPrinter() {
  const key = 'white';
  if (true) {
    const key = 'black';
  }
  console.log(key);
}
keyPrinter();

// Q3: What is the output of this function?
function newPrinter() {
  let x = 3.14; {
    console.log(x);
    let x = 1.41;
  }
}
newPrinter();

// Q4: What is the difference between transpiling and polyfilling?

// Q5: What will each of these function calls return, given function add?
function add(a = 5, b = 10) {
  return a + b;
}
// Call A: add(12,8)
// Call B: add(undefined, 5)
// Call C: add()
// Call D: add(4)

// Q6: What does this code do?
let a = 15;
let b = 5;
[a, b] = [b, a];

// Q7: What is the output of these lines of code?
var a = `foo ${b}`;
var b = `bar ${a}`;
console.log(a);

// Q8: What is the output of these lines of code?
var a = `foo ${b}`;
var b = `bar ${a}`;
console.log(b);

// Q9: This is a tough one, but you can do it. What is the output of this function?
(function() {
  return [
    (() => this.x).bind({ x: 'hello' })(),
    (() => this.x)()
  ]
}).call({ x: 'world' });