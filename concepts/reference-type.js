// -------------------- Reference type --------------------
// In the console, we entered:
[] === [];
// We get a result of:
false;

// Another example:
var object1 = {
  value: 10,
};
var object2 = object1;
var object3 = {
  value: 10,
};

// In the console:
(object1 === object2) == true;
(object1 === object3) == false;

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
