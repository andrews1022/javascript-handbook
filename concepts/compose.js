// ----**** COMPOSE **** ----
// 'Compose' is the act of putting two functions together to form a third function where the output of one function is the input of the other
// Example:
const compose = (f, g) => (a) => f(g(a));
// Let's say 'f' and 'g' parameters, 'f' and 'g' return a function that takes parameter 'a' that returns a function
// It looks like 'f' is a function because while we have the brackets even highlights in blue for you and 'g' is also a function.

// Basic function, adding 1 to a number
const sum = (num) => num + 1;
sum(2); // We get 3

// Compose
compose(sum, sum)(5);

// All together (copy and paste into console)
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);

// We get 7

// BREAKDOWN
// If both 'f' and 'g' are 'sum', and 'a' is 5, we look at what the function returns: f(g(a));
// And because again we have two brackets (sum, sum)(5) which returns us another function (a) => f(g(a));, 
// And within it we give the 'a', 5.
const compose = (f, g) => (a) => f(g(5));
// And then let's run the inner function 'g' g(5). In this case it's sum.
const compose = (f, g) => (a) => f(sum(5));
// So if you remember sum is just saying give me 5, and then 5 + 1:
const compose = (f, g) => (a) => f(6);
// And then finally the 'f' function runs which is again 'sum'.
// And this says 'sum' is giving me six.
// So six plus one is seven.
const compose = (f, g) => (a) => f(7);
// So, this whole thing returns seven.