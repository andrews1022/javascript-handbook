// The goal: Return the character that is most common in a string
// Example: maxCharacter('javascript') == 'a'

function maxCharacter(str) {
  // Use an object as map
  const characterMap = {}; // set to an empty object literal
  let maxNumber = 0; // will be the number itself
  let maxChar = ''; // actual number that has the most occurences

  // Loop through the string as an array
  str.split('').forEach((character) => {
    // Look each key value pair and count how many are inside
    // So j:1, a:2, etc.
    if (characterMap[character]) {
      // If it exists, add one to it
      characterMap[character]++;
    } else {
      // Otherwise, if it hasn't been found, set it to one
      characterMap[character] = 1;
    }
  });

  // Show the highest value - use for in loop (used to loop through objects)
  for (let character in characterMap) {
    if (characterMap[character] > maxNumber) {
      maxNumber = characterMap[character];
      maxChar = character;
    }
  }

  return maxChar;
}

// Call the function
maxCharacter('javascript');
