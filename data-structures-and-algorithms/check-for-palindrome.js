// The goal: Return true if palindrome and false if not
// Example: isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  // Similar to reverse string:
  // The reverse string is set to the passed in string, split, reversed, then joined again 
  const revString = str.split('').reverse().join('');
  // Compare the 2 strings - return true or false
  return revString === str;
}

// Call the function
isPalindrome('hello');      // false
isPalindrome('racecar');    // true
isPalindrome('madam');      // true
isPalindrome('taco cat');   // true