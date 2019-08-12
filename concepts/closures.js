// ----**** CLOSURES **** ----

function first() {
    var greet = 'Hi';

    function second() {
        alert(greet);
    }
    return second();
}

var newFunc = first();
newFunc();

// First, convert it to 2018 Standards
const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second();
}

const newFunc = first();
newFunc();

// Remember scope, an important property of function is that the variables created inside of them, including their parameters, are local to the function.
// So that means that every time you run the first() function, the block of code gets executed and the 'greet' variable gets created every time.
// Now this is actually good for us because we make sure that if our program, every time we run 'first' remembered 'greet', well they'll have conflicts because it's a constant and we constantly reassigned the same thing to a variable that already exists.
// So this way within a function, we make sure that every time we run it, it's a clean slate.
// You can name the variables however you like because there's nothing else that will collide with it.
// You can think of it as this, a function that runs, the function executed.
// Now it's never going to execute again.
// Kind of like the first() function we just executed it here. 
const newFunc = first();
newFunc();
// And the result we put into newFunc
// A note about closures, is that the child scope always has access to the parent's scope.
// So inside the web browser, the web browser says, ah! this second function needs 'greet', so I'm going to remember it.

// Again, 'closures' is just saying a function ran, the function executed, and it's never going to execute again.
// But it's going to remember that there are references to those variables.
// So the child scope always has access to the parent scope.
// Think of it this way, children always have access to their parent's scope.
// But parents scope they don't have access to their children scope.