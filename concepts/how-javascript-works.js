// First, let’s define what a program is:
// It has to allocate memory.
// Otherwise, we wouldn't be able to have variables or even have a file on our computer.

// It also has to parse and execute scripts, which means it reads and runs commands.
// Now, we also know that there's the JavaScript engine that each browser implements.
// The engine reads the JavaScript that we write, and it changes it into machine executable instructions for the browser.
// The engine consists of two parts, a memory heap and a call stack.

// The memory heap is where the memory allocation happens.
// The call stack is where your code is read and executed (it tells you where you are in the program).

// -------------------- Memory Heap --------------------
// For us to allocate memory in the memory heap, it's as simple as doing:
const a = 1;

// Now, when we assign this, the JavaScript engine is going to remember that oh! yeah, 'a' has a value of 1.
// Let’s add on to this and write:
const aa = 1;
const bb = 10;
const cc = 100;

// But there is an issue this, and that’s called memory leak
// Let’s assume our const variables are in the global scope
// With memory, we have a limited amount that we can actually have
// Memory leaks happen when you have unused memory
// Let’s also say we don’t end up using const a = 1;
// It just hangs around, and fills up the memory heap

// -------------------- The Call Stack --------------------
// For example:
console.log('1');
console.log('2');
console.log('3');

// When we run this in the browser, we of course get
// 1
// 2
// 3

// Again, the call stack is what reads and executes our scrips
// So it will read each line and execute each line
// Now let's look at a more complex example to showcase the call stack:
var first = () => {
  var second = () => {
    console.log('4');
  };
  second();
};

// When we run first();
// We get 4

// So what is happening in the call stack here?
// First ran the first() function.
// Then we run the second() function
// Inside the second() function we run the console.log

// Visual:
console.log('4');
two();
one();

// So now the call stack is going to say:
// Ok, there's nothing else inside of this, so I'm going to run console.log('4');
// It will then remove it from the call stack
// So then we're left with this
two();
one();
// Then it will remove the 'two' and then remove the 'one', because it's just been called.
// All done! The call stack is now empty.
// Remember, the call stack is first in last out.

// -------------------- NONBLOCKING --------------------
// Let's address this statement
// JavaScript is a single threaded language that can be nonblocking

// Single threaded means that it has only one call stack.
// Other languages can have multiple call stacks and these are called multithread.

// So then why was Javascript designed to be single threaded?
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
