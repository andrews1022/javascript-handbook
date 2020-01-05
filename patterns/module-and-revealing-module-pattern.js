// ES6 introduced actual modules in JavaScript, meaning that we can use separate files to export modules which are just custom pieces of code and import them into a new file.
// However this is still not supported in browsers
// You'll have to use a compiler like Babel along with a module loader like Webpack for that to work, which we'll get to later

// But in ES5 we have something called the module pattern that allows us to break up parts of our code into self-contained modules with private properties and methods or private variables and functions.

// Basic Structure
// We will use a module that is an IIFE (Immediately Invoked Function Expression)
/* 
(function(){
  // Declare private variables and functions

  return {
    // Declare public variables functions
  }
})();
*/

// Standard Module Pattern
const UICtrl = (function () {
  // Anything we declare here is private - cannot be used outside the module
  let greeting = 'Hello World';

  const changeText = function () {
    const element = document.querySelector('h1');
    element.textContent = greeting;
  }

  return {
    // Anything we return here is public - it CAN be used outside the module
    // We can access the anything in the private scope here as well, so that is why we can call the changeText function
    callChangeText: function () {
      changeText();
      console.log(greeting);
    }
  }
})();

UICtrl.callChangeText(); // Changes the text to Hello World and logs it as well
// What we cannot do is call changeText, as that is within the private scope of the module


// Revealing Module Pattern - Example
// The main difference is that instead of returning our own public functions, you basically map an object literal and you map to private functions that you want to reveal
// That's that's why it's called the revealing pattern because you can reveal certain methods from your your module
// Example:
const ItemController = (function () {
  let _data = []; // You can use the underscore to denote private variables as well

  function add(item) {
    _data.push(item);
    console.log('Item Added');
  }

  function get(itemId) {
    return _data.find(item => {
      return item.id === itemId;
    });
  }

  return {
    add: add, // The add function
    get: get // The get function
  }
})();

ItemController.add({ id: 1, name: 'John' });
ItemController.add({ id: 2, name: 'Mark' });

console.log(ItemController.get(1));
console.log(ItemController.get(2));

// So that's one of the main differences between the revealing module and the standard module pattern, is that we're mapping or we're returning an object literal that directly reveals methods that are inside of the module.