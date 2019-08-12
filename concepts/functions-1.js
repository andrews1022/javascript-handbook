// There are two types of functions:
// Function Expression
// Function Declaration

// Function Expression:
var a = function name() {}

// Function Declaration:
function name() {}


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