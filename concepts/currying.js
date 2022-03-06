//  ----------------------------------- CURRYING -----------------------------------

// 'Currying' is the process of converting a function that takes multiple arguments into a function that takes them one at a time.
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
// Think of these arrows as functions.

// So if we run
curriedMultiply(3);

// In the console, we get
(b) => a * b;

// Which means we essentially get:
const curriedMultiply = (3) => (b) => 3 * b;

// So by running this, is saying that 'a' is '3'.
// And now we'll know that when we multiply 'a' is '3'
// But because this has a function inside of a function, curriedMultiply(3); just returns this part: (b) => 3 * b; so it returns a function
// So to make this work, we need to run something like:
curriedMultiply(3)(4);
// Which gives us 12

// ---------- BREAKDOWN ----------
// We created a variable curriedMultiply that accepts a parameter, a function that accepts 'a'.
// In this case it's '3' and once you call that function
// And once you call that function, once you run it, it returns another function, that accepts 'b' and that function multiplies 'a' and 'b'.
// So what we're doing here is saying 'curriedMultiplier' 'a' is 3 'b' is 4. And then multiply 'a' times 'b'.

// Now why do we even need to do this?
// Because now it's more extensible, we can do something like
const multiplyByFive = curriedMultiply(5);

// So in the console, if we run
multiplyByFive(5); // we get 25
multiplyByFive(10); // we get 50, and so on
