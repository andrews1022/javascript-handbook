// ---------- SIDE EFFECTS ----------
var a = 1;

function b() {
  a = 2;
}

// We have a variable one, 'a' equals one and then I have a function that changes 'a',
// Well that's a side effect.
// That's something that the function's doing to affect the outside world.
// Remember we want to think of functions as its own universe and if it starts affecting the outside world, it's not the end of the world, but it is good practice to avoid the side effects
// And by avoiding the side effects, we have something called FUNCTIONAL PURITY (see functional-purity.js)
