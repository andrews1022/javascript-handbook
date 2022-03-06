// A try block lets us write some bit of code and test for errors
// A catch block lets us handle those errors, if there are any
// We can also throw our own errors.

// Custom error checking variable for below
const user = { email: 'jdoe@gmail.com' };

try {
  // Uncomment each error one at a time to see the results

  // ---------- Global/Core Errors ----------
  // Produce a ReferenceError
  myFunction();

  // Produce a TypeError
  null.myFunction();

  // Produce a SyntaxError
  eval('Hello World');

  // Produce a URIError
  decodeURIComponent('%');

  // ---------- Our Own Custom Error ----------
  if (!user.name) {
    // Use the 'throw' keyword
    // throw 'User has no name';

    // Throw as a specific type of error
    throw new SyntaxError('User has no name');
  }
} catch (err) {
  console.log(err); // Get the full error message
  console.log(err.message); // Get just the error message text
  console.log(err.name); // Get just the error type/name
  console.log(err instanceof ReferenceError); // Check for specific types of errors - returns true or false
  console.log(err instanceof TypeError); // Check for specific types of errors - returns true or false

  // There is also a finally block
  // The finally block runs no matter what the outcome of either the try or catch blocks are
} finally {
  console.log('Finally runs regardless of results!');
}

// What's really nice about try/catch is that we can handle errors without stopping the entire script
console.log('The program continues');
// Without try/catch, we get a nasty red error message, and no console.log message
