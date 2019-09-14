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
  let x = 3.14; 
  {
    console.log(x);
    let x = 1.41;
  }
}
newPrinter();

// Q4: What is the difference between transpiling and polyfilling?