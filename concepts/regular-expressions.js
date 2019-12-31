// A regular expression is basically used to describe a pattern of characters
// They're commonly used for validation as well as pulling things out of a body of text, or a body of characters
// For example, e-mail addresses, phone numbers, social security numbers - things that have certain patterns in their formatting

// In Part 1 here, we'll take a look at the different functions in JavaScript that are used to evaluate these regular expressions

let re; // Regular Expression Variable
re = /hello/; // Set a regular expression literal. Place your expression inbetween //
// This itself is actually a regular expression
// Each one of these characters is a literl character - it's going to be taken at face value - an actualy H, E, etc.

// console.log(re); // Logs /hello/
// console.log(re.source); // Log the actual expression inside the //

// ----- exec() function -----
// Will return the result in an array if there is a match, or null if there is not
let result = re.exec('hello world');
console.log(result);
// This result will give us 3 things:
// 1) The expression
// 2) The index where the match begins (counts each character)
// 3) The actual string we're matching

// So let's make it fail:
result = re.exec('hi world');
console.log(result);
// As mentioned, if there is no match, we get null

// As long as there is a match somewhere, it will pass:
result = re.exec('asdasdhelloasdasd world');
console.log(result);
// There are different metacharacters we can use to specify if we want to look for just the word with nothing else attached to it, which we'll get into in Part 2

// Other options:
console.log(result[0]); // First value in the array
console.log(result.index); // Get the index value where the match starts
console.log(result.input); // Get the search string


// ----- test() function -----
// Returns true or false if there is a match
result = re.test('Hello');
console.log(result); // Returns false - because of uppercase H
// If we change our regular expression above from /hello/ to /hello/i, we would get true
// The 'i' flag (flags always go after the literal) makes it case insensitive
re = /hello/i;
result = re.test('Hello');
console.log(result); // Returns true

// Global flag:
// re = /hello/g; // Global search flag - will look at the entire paragraph for all instances of hello (as an example)


// ----- match() function -----
// Will return result array or null (similar to exec() function)
const myString = 'Hello There';
result = myString.match(re);
console.log(result); // Still matches as re is currently case insensitive


// ----- search() function -----
// Will returns the index of the first match, and if not found, it returns a -1
const myFavString = 'Andrew Hello There';
result = myFavString.search(re);
console.log(result);

// ----- replace() function -----
// Will return a new string with some or all matches of a pattern
// Simple terms - find a match to your regular expression and replace it with what you want
// Here we replace 'Hello There' with 'Hi There'
const string = 'Hello There';
const newString = string.replace(re, 'Hi');
console.log(newString);









// Initalize regular expression
let re;


// ---------- Literal characters ----------
re = /hello/;
re = /hello/i;


// ---------- Metacharacter Symbols ----------
// *** Set str variable below to Hello ***
re = /^h/i; // Carrot symbol: ^ - Means must start with
re = /d$/i; // Dollar symbol: $ - Means must end with
re = / world$/i; // Can check to see if it ends with a word as well, not just a single character - and even check for spaces
re = /^hello$/i; // - Must start AND end with (Use both ^ and $)
re = /h.llo/i; // Period symbol: . - Matches any ONE character
re = /h*llo/i; // Asterik symbol: * - Matches any ONE character 0 or more times - complete wild card - can match even nothing at all
re = /gre?a?y/i; // Question marl smybol: ? - Optional character - put the symbol AFTER The character which you wish to define as optional (as grey can be spelt both grey and gray)
re = /gre?a?y\?/i; // Escaping characters symbol: \ - Matching for things that would otherwise cause errors (here we check for useage of ? mark)


// ---------- Brackets [] - Character sets ----------
// *** Set str variable below to Gray/Grey ***
re = /gr[ae]y/i; // The character MUST be one of the characters inside the [] (better solution than using ?)
re = /[GF]ray/i; // Another example - can be used at the front
re = /[^GF]ray/i; // Use the ^ symbol in addition to [] - means it will match anything EXCEPT a G or F
re = /[A-Z]ray/; // Match for ANY UPPERCASE letter - must be uppercase as this does not use the i flag for case insensitivity
re = /[a-z]ray/; // Match for ANY LOWERCASE letter
re = /[A-Za-z]ray/; // Match for any letter regardless of casing
re = /[0-9][0-9]ray/; // You can include multiple sets


// ---------- Bracers {} - Quantifiers ----------
// *** Set str variable below to Hello ***
re = /Hel{2}o/i; // Must occur exactly {number} of times at specified location (place character before the { })
re = /Hel{2,4}o/i; // Set a range of times the character should occur
re = /Hel{2,}o/i; // Leave a trailing comma means most occur AT LEAST {number} of times


// ---------- Parentheses () - Grouping ----------
// *** Set str variable below to 3x3x3x ***
re = /([0-9]x){3}/; // We want a number between 0-9, followed by x, and we want that 3 times (3x3x3x)
re = /^([0-9]x){3}$/; // Ensure that nothing comes after the third 3x


// ---------- Shorthand Character Classes ----------
re = /\w/; // Word character: \w - is alphanumeric (can be any letter or any number, or an underscore _ )
re = /\w+/; // Plus symbol: + - this means it will look at ONE or MORE of all word characters
re = /\W/; // NON Word character: \W - is NOT alphanumeric (can be anything BUT a letter, number, or underscore _ )
re = /\d/; // \d - Match any digit
re = /\d+/; // \d+ - Match any digit 0 or more times
re = /\D/; // Match any NON digit
re = /\s/; // Match whitespace character
re = /\S/; // Match NON whitespace character
re = /Hell/i; // Word boundary: without \b
re = /Hell\b/i; // Word boundary: with \b - Look for just Hell, nothing else inside of it - see how index is higher here 


// ---------- Assertions ----------
// Assertions are kind of like conditionals
re = /x(?=y)/; // Means it's going to match 'x' ONLY if it's FOLLOWED by 'y' (xy)
re = /x(?!y)/; // Match 'x' ONLY if it's NOT FOLLOWED by 'y' (xy)


// String to match - Change as per tests above
const str = '';

// Log the results
const result = re.exec(str);
console.log('Exec result:', result);

// Testing function
function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);