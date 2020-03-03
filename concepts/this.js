// The 'this' keyword
// Regular function call: the this keyword points at the global object (the window object, in the browser)
// Method call: the this variable points to the object that is calling the method
// The this keyword is not assigned a value until a function where it is defined is called

console.log(this); // logs the window object

function calculateAge(year) {
  console.log(2020 - year);
  console.log(this);
}

calculateAge(1992); // 28, as the this variable is still the window object
// This is still a regular function call, so it still points to the global/window object
// This function is attached to the window object, so that's why it is logged

// Now let's look at using this with an object
var john = {
  name: 'John Doe',
  yearOfBirth: 1990,
  calculateAge() {
    console.log(this);
    console.log(2020 - this.yearOfBirth);

    // Now let's add a function inside this funciton
    function innerFunction() {
      console.log(this); // points to the window obect
    }

    innerFunction();
  }
};
john.calculateAge(); // logs the john object
// Again this makes sense, because the this keyword refers to the object that called the method, which in this case was the john object
// The this keyword inside the innerFunction() logs the window object
// This seems a bit counter intuitive right?
// This is technically a function, although written inside a method, it is still just a regular function, so it points to the window object instead

// Remember that the this variable is only assigned a value as soon as an object calls a method.
// So, we said this was important, so let's now see an example
var mike = {
  name: 'Mike Smith',
  yearOfBirth: 1984
};

// Now let's say we want to calculate Mike's age
// We could simply copy+paste in the same method, but we can do better than that, and keep our code DRY

// We can just something called Method Borrowing. We use it like this:
mike.calculateAge = john.calculateAge;
// We don't use the parenthesis, we treat this as a variable

// So know if we call it
mike.calculateAge(); // Here we get the mike object, along with the calculageAge method, and the result of said method

// And this proves what we said in the beginning, which is that the this variable is only assigned a value when the object calls the method
// So if it wouldn't be like this, then this This Variable here would always be John