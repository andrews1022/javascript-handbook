// This page covers three very important topics about objects
// Reference type
// Context
// Instantiation
// Feel free to check out topic in their own individual file for easier reading


// -------------------- Reference type --------------------
// In the console, we entered:
[] === [];
// We get a result of:
false

// Another example:
var object1 = {
    value: 10
};
var object2 = object1;
var object3 = {
    value: 10
};

// In the console:
object1 === object2 == true;
object1 === object3 == false;

object1.value = 15;
object2.value; // = 15
object3.value; // = 10

// Objects are what's called the 'reference types' in Javascript.
// Up untill this point, all the other JavaScript types that you've learned including 'numbers', 'null', 'undefined', 'booleans', 'strings' even 'symbols' - they're all defined by the programming language and it says these are primitive types.
// A 'reference type', which is a non primitive type, are not defined by the programming languages.

// So what we said above was I want 'object1' create a new object and put 'value 10' into this box.
// 'object2' says, I want you to just REFERENCE 'object1', saying 'Hey! I want whatever's inside that box.' 
// When 'object3' gets created, it's a NEW OBJECT because we have the new brackets.
// So what we're saying essentially is this:
// var object1 = Box1
// var object2 = object1
// var object3 = Box3

// So this also apples to our array from earlier:
[] === [];
// Arrays are really just objects, so comparing them will result in false as they are each separate new objects


// -------------------- Context --------------------
// Context vs Scope (lots of confusion between the two)
// Reminder of scope
function b() {
    let a = 4;
}
// Doing console.log(a); will not work, because the variable only lives inside the universe of the function b()

// How is context is different?
// Context tells you where we are, WITHIN the object
// If in the console you enter:
console.log(this);
// We get a printout of the Window Object
// So, what 'this' means, is what is the object environment that we're in right now?
// For the above example, the environment we're currently in is the window object
// The best way to think of it is ask yourself "What is to left of the dot?"
// This is important to Instantiation

// Another example
function a() {
    console.log(this);
}
// We still get window, we're still in the window environment

// Let's use it like this:
const object4 = {
    a: function () {
        console.log(this);
    }
}
// So in the console we run:
object4.a();

// We get {a: ƒ}
// So now, 'this' refers to object4, which is the current environment


// -------------------- Instantiation --------------------
// 'Instantiation' is when you make a copy of an object and reuse the code.

// First use of class
// You must capitalize your class name
// Let's say we want to make players for a big multiplayer game
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi! I am ${this.name}, and I am a ${this.type}.`)
    }
}
// When you create a a 'Player', 'class' it says every time we're making a copy of a 'Player' the first thing that gets run is the 'constructor' function
// The 'constructor' function is gonna create these properties on the 'Player' object.
// So 'name' and 'type'.
// Furthermore, now we're saying, this 'Player' class, any player that we create will always be able to introduce himself and they'll also have 'this' 'name' and 'this.type'.

// So now, let's create a player that is a wizard
// This line below reads as we want 'wizard' to extend whatever 'Player' has.
class Wizard extends Player {
    constructor(name, type) {
        // Any time we extend something we need to also call the 'constructor' function of the 'Player' class.
        // We have to do something called 'super' with the properties that we want to pass to the 'constructor'.
        // In this case, 'name' and 'type',
        super(name, type);
        // Again, whenever you 'extend' a class, you want to use super so that you essentially have access to these (what's inside of the constructor function from the extended class)
    }
    play(){
        console.log(`WEEEEEE! I'm a ${this.type}!`);
    }
}

// Now let's see this in action
const wizard1 = new Wizard('Shelly', 'Healer');
wizard1.play();
wizard1.introduce();

const wizard2 = new Wizard('Sean', 'Dark Magician');
wizard2.play();
wizard2.introduce();