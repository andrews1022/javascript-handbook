// -------------------- SYNCHRONOUS --------------------
// Let's address this statement
// JavaScript is a single threaded language that can be nonblocking

// Single threaded means that it has only one call stack.
// Other languages can have multiple call stacks and these are called multithread.

// So then why was JavaScript designed to be single threaded? 
// Well, running code on a single thread can be quite easy, since you don't have to deal with complicated scenarios that arise in a multithreaded environment.
// What kinds of issues? For example, deadlocks
// This concept we've now covered is known as synchronous programming

// Synchronous programming simply means, line one gets executed then line two gets executed and then line three gets executed, and so on

// For example:
console.log('1');
console.log('2');
console.log('3');

// So console.log('2'); doesn't start until console.log('1'); finishes. 
// And console.log('3'); doesn't start until console.log('1'); and console.log('2'); finish.

// Heard of the site Stack Overflow?
// What does stack overflow actually mean?
// It means, simply, when a stack is overflowing
// With stack overflow, the call stack just gets bigger and bigger and bigger until it just doesn't have enough space anymore.

// And creating a stack overflow yourself is rather easy:
function foo() {
	foo()
}
foo();

// What is happening in this function? This is something known as RECURSION
// Recursion means a function that calls itself.
// If we run foo(); in the console, we get this big error message:
VM66: 1 Uncaught RangeError: Maximum call stack size exceeded
at foo( < anonymous >: 1: 13)
at foo( < anonymous >: 2: 2)
at foo( < anonymous >: 2: 2)
at foo( < anonymous >: 2: 2)
at foo( < anonymous >: 2: 2)
at foo( < anonymous >: 2: 2)
at foo( < anonymous >: 2: 2)
at foo( < anonymous >: 2: 2)
at foo( < anonymous >: 2: 2)
at foo( < anonymous >: 2: 2)

Good article to read for understanding Asynchronous vs Synchronous Programming:
https://dev.to/hardy613/asynchronous-vs-synchronous-programming-23ed