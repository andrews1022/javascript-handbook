// The window is the global object in client side JavaScript
// The window object has a lot to it, things that developers use all the time such as:
// Local Storage, Fetch API, Navigator Object which includes Geolocation, and even methods such as alert and prompt

// ---------- ALERTS ----------
alert('Hello World');

// ---------- PROMPT ----------
const input = prompt('What is your name?');
alert(`Hello ${input}! Have a great day!`);

// ---------- CONFIRM ----------
if (confirm('Are you sure you want to delete this?')) {
  console.log('YES');
} else {
  console.log('NO');
}

// This val variable will be mutated over the course of the file
let val;

// Outer height and and width (overall window size)
val = window.outerHeight;
console.log(val);
val = window.outerWidth;
console.log(val);

// Inner height and and width (content visible on the screen)
val = window.innerHeight;
console.log(val);
val = window.innerWidth;
console.log(val);

// ---------- SCROLL POINTS ----------
// This is used to figure out where you are in terms of scrolling - will need to add content to the page)
// Great for adding in animations for content to appear on screen as you are sliding
val = window.scrollY;
console.log(val);
val = window.scrollX;
console.log(val);

// ---------- LOCATION OBJECT ----------
val = window.location;
console.log(val);
// The location object allows to get many useful things such as the href (url), host address, path, port, etc.
val = window.location.hostname;
console.log(val);
val = window.location.port;
console.log(val);
val = window.location.href;
console.log(val);
val = window.location.search; // Show the query string
console.log(val);

// ---------- REDIRECT ----------
// Manually set href location
window.location.href = 'http://google.ca';

// ---------- REFRESH ----------
// Refresh the page (if needed, otherwise not very useful)
window.location.reload();

// ---------- HISTORY OBJECT ----------
// Get browsing history
window.history.go(-1); // Place a number here

// Check out history length
val = window.history.length;
console.log(val);

// ---------- NAVIGATOR OBJECT ----------
val = window.navigator; // Navigator object
console.log(val);

val = window.navigator.appName; // Will always log Netscape unless using IE
console.log(val);

val = window.navigator.appCodeName;
console.log(val);

val = window.navigator.userAgent;
console.log(val);

val = window.navigator.platform; // Get operating system
console.log(val);

val = window.navigator.vendor;
console.log(val);

val = window.navigator.language; // Get language of the browser
console.log(val);
