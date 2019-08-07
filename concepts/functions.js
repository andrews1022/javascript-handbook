// There are two types of functions:
// Function Expression
// Function Declaration

// Function Expression:
var a = function name() {} 

// Function Declaration:
function name () {} 


// FUNCTION DECLARATION EXAMPLE
function sayHello() {
    console.log('Hello dere ehh boy!');
} // at this point nothing happens because we have not CALLED the functions

sayHello(); // calling the function


// FUNCTION EXPRESSION EXAMPLE
var sayBye = function () {
    console.log('Bye :(');
}
sayBye();
// Technically, this function has no name
// We've assigned this function to 'sayBye', so we can reference it through 'sayBye', but otherwise we can't really access this function.
// This is also called an 'ANONYMOUS FUNCTION'.


// FUNCTION USING ARGUMENTS
// Arguments allow us to not repeat ourself

// Example 1
function sing(song) {
    console.log(song);
}
sing("Laaa dee daahh");
sing("heeelllooooooo");


// Example 2
function addNums(num1, num2) {
    console.log(num1 + num2);
} 
// Let's call it here:
addNums(5, 4); // We are passing in 5 as num1, and 4 as num2

// What happens if we don't pass parameters?
addNums(); // We get NaN - Not a Number, simply meaning it SHOULD be a number but it is NOT


// FUNCTION WITH DEFAULT VALUES
function addNumsV2(num3 = 1, num4 = 1) {
    console.log(num3 + num4);
}
addNumsV2();

// Typically we don't use functions to console.log something
// We usually want to 'return' something from it
function addNumsV3(num5 = 1, num6 = 1) {
    return num5 + num6;
}
addNumsV3(5, 5); // At this point, nothing happens yet. But you chould just wrap this in a console.log as well


// USING RETURN (copy and paste into console)
function multiply(a, b) {
    if (a > 10 || b > 10) {
        return "That's too hard! :(";
    } else {
        return a * b;
    }

    // While we don't HAVE TO return something from a function, ideally, we should
    // 'return' notes the END of the function. Nothing after it is executed
    // But as you can see above, we can multiple returns inside an if/else statement
}

multiply(5, 10);

// Calling the function inside of a console.log (or alert, prompt, etc.)
console.log(multiply(5, 5));

// Parameters and arguments
// Arguments are 5 & 10: multiply(5, 10);
// Parameters are a & b: function multiply(a, b)