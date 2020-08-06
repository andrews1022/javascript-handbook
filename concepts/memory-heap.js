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
