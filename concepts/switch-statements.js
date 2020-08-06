// Switch statements are another type of conditional check
// We test what is placed inside the of ( ) after the switch keyword
// To evaluate it, we use 'cases'
// Then add a break at the end of each case and at the end we add a default
// The default statement is used if none of the cases are matched
// Switches are better when you have A LOT of if / else if checks

// ---------- EXAMPLE #1 ----------
// Here we will test the color variable
const color = 'red';

switch (color) {
  // Add cases
  case 'red':
    console.log('The colour is RED');
    break; // Add break; after each case

  case 'blue':
    console.log('The colour is BLUE');
    break;

  // And at the end we add a default statement
  default:
    console.log('The colour is NOT red or blue');
    break;
}

// ---------- EXAMPLE #2 ----------
// Check for day of the week
let today;

switch (new Date().getDay()) {
  case 0:
    today = 'Sunday';
    break;

  case 1:
    today = 'Monday';
    break;

  case 2:
    today = 'Tuesday';
    break;

  case 3:
    today = 'Wednesday';
    break;

  case 4:
    today = 'Thursday';
    break;

  case 5:
    today = 'Friday';
    break;

  case 6:
    today = 'Saturday';
    break;
}

console.log(`Today is ${today}`);

// ---------- EXAMPLE #3 ----------
// A switch statement inside of a function based on player movement in a game
function moveCommand(direction) {
  let whatHappens;

  switch (direction) {
    case 'forward':
      whatHappens = 'You encountered a monster!';
      break;
    case 'backward':
      whatHappens = 'You arrived home.';
      break;
    case 'right':
      whatHappens = 'You found a river.';
      break;
    case 'left':
      whatHappens = 'You run into a troll!';
      break;
    default:
      whatHappens = 'Please enter a valid direction';
  }
  return whatHappens;
}

// ---------- EXAMPLE #4 ----------
var firstName = 'John';
var job = 'driver';

switch (job) {
  case 'teacher':
  case 'instructor': // You can have multiple cases and execute the same block underneath. So if job is equal to teacher OR instructor, below will be executed
    console.log(`${firstName} teaches kids how to code.`);
    break;

  case 'driver':
    console.log(`${firstName} drivers an Uber in Vancouver.`);
    break;

  case 'designer':
    console.log(`${firstName} designs beautiful websites.`);
    break;

  default:
    console.log(`${firstName} does something`);
}

// ---------- EXAMPLE #5 ----------
var firstName = 'John';
age = 52;

switch (true) {
  case age < 13:
    console.log(`${firstName} is a boy`);
    break;
  case age >= 13 && age <= 19:
    console.log(`${firstName} is a teenager`);
    break;
  case age >= 20 && age <= 30:
    console.log(`${firstName} is a young man`);
    break;
  default:
    console.log(`${firstName} is a man`);
}
