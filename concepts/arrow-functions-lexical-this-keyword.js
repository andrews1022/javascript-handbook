// Maybe the biggest advantage of using arrow functions is that they share the surrounding 'this' keyword
// So, this means that, unlike normal functions, arrow functions don't get their own this keyword.
// They simply use the this keyword of the function they are written in.
// And so we say that they have a 'lexical this variable'.
// Let's see how to use that to our advantage, interacting with the 3 colored boxes

// ES5 version
var boxES5 = {
  color: 'green',
  position: 1,
  clickMe: function () {
    document.querySelector('.green').addEventListener('click', function () {
      var str = 'This is box number ' + this.position + ' and is ' + this.color;
      alert(str);
    });
  },
};

box5.clickMe(); // This is box number undefined and is undefined
// Why is not reading our values?
// That is because only in the method call the this keyword, actually points to that object.
// But in a regular function call, the this keyword will always point to the global object, which in the case of the browser, is the window object.
// And that is exactly what happens here.

// So, the clickMe method is a function attached to an object.
// So it's a method, and so in there, we have access to the color and to position by using the this keyword

// But then, the callback function that we have here, and this event handler is not a method, it's a regular function call
// Therefore, the this keyword here does not point to this box5 object, but instead, it points to the window object
// And, of course, position and color are not defined in the window object
// And therefore, what we have here is undefined for both of these.

// ES6 version
const boxES6_1 = {
  color: 'blue',
  position: 1,
  clickMe: function () {
    document.querySelector('.blue').addEventListener('click', () => {
      const str = `This is box number ${this.position} and is ${this.color}`;
      alert(str);
    });
  },
};

boxES6_1.clickMe();

// Now by using an arrow function, we have a funciton that shares the this keyword with its surrounding
// Best practice is to actually always use arrow functions when you need to preserve the value of the this keyword, such as we did here.

// ES6 version v2
const boxES6_2 = {
  color: 'orange',
  position: 1,
  clickMe: () => {
    document.querySelector('.orange').addEventListener('click', () => {
      const str = `This is box number ${this.position} and is ${this.color}`;
      alert(str);
    });
  },
};

boxES6_2.clickMe();

// In this version, the clickMe method shares the lexical this keyword from it's surroundings, which the global context
// This means that the clickMe method here also no longer has its own this keyword.
// It shares the global this keyword, which, of course, points to the global object window.

// ---------- WITH PROTOTYPES ----------
// Function constructor to create Person objects
function Person(name) {
  this.name = name;
}

// ES5 version
Person.prototype.myFriendsES5 = function (friendsArray) {
  // Simply return an array which says that the name of the person is friends with easy of these elements
  var arr = friendsArray.map(function (el) {
    return this.name + ' is friends with ' + el; // This keyword points to the global object
    // So we get no name in the olg
  });

  console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriendsES5(friends);

// ES6 Version
Person.prototype.myFriendsES6 = function (passedInFriendsArray) {
  const arr = passedInFriendsArray.map((el) => `${this.name} is friends with ${el}`);
  console.log(arr); // Now this points to the instance we create
};

new Person('Mike').myFriendsES6(friends);
