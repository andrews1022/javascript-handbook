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
	}
	second();
}

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