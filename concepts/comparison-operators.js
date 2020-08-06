const id = 100; // Change to a string to get different results

// EQUAL TO (VALUE ONLY)
if (id == 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// NOT EQUAL TO
if (id != 105) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// EQUAL TO VALUE & TYPE
if (id === 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// NOT EQUAL TO VALUE AND TYPE
if (id !== 105) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// Test if undefined
if (typeof id !== 'undefined') {
  console.log(`The id is ${id}`);
} else {
  console.log('NO ID :(');
}

// Greater than
if (id > 200) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// Less than
if (id < 200) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// Greater than or equal to
if (id >= 200) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// Less than or equal to
if (id <= 200) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}
