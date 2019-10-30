// The goal: Return a string with the first letter of every word capitalized
// Example: capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLetters(str) {

  // ---------- METHOD 1 ----------
  // Use a regular for loop
  // Turn the string into an array
  // Here we need a space inside split to split each word, not each character
  const strArray = str.toLowerCase().split(' ');
  for (let i = 0; i < strArray.length; i++) {
    // Grab the first letter using substring (0, 1)
    // Then uppercase it
    // Add the rest starting at current string array index and substring(1)
    strArray[i] = strArray[i].substring(0, 1).toUpperCase() + strArray[i].substring(1);
  }
  return strArray.join(' ');

  // ---------- METHOD 2 ----------
  // Use .map()
  return str
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(' ');

  // ---------- METHOD 2 (CLEANED UP - USING ES6) ----------  
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(' ');

  // ---------- METHOD 3 ----------
  // Use regular expressions
  // We place regular expressions inside //
  // Then use a word boundry using \b
  // Then a range of lowercase a-z
  // Then put a g for global - if not it will only capitalize the first word
  // THen an i for case insensitive
  return str.replace(/\b[a-z]/gi, function (character) {
    return character.toUpperCase();
  });
}

// Call the function
capitalizeLetters('i love javascript');
capitalizeLetters('You HaVE a NiCe cAR');