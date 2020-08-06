// *** COPY & PASTE INTO THE CONSOLE TO GET THE ANSWER! ***

// ---------- What is the output? ----------
const notifications = 1;
console.log(`Your have ${notifications} notification ${notifications !== 1 && 's'}`);

// ---------- What is the output? ----------
const fetcher = (url) =>
  new Promise((response) => {
    setTimeout(() => response(`${url}!`), 200);
  });
const fetchAll = async () => {
  const all = await Promise.all([fetcher('1'), fetcher('2')]);
  console.log(all);
};
fetchAll();

// ---------- What is the output? ----------
let pr = (x) => new Promise((res) => setTimeout(() => res(x), Math.random() * 200));
let arr = [pr(1), pr(2), pr(3)];
const getData = async () => {
  for await (let el of arr) {
    console.log(el);
  }
};
getData();

// ---------- What is the output? ----------
const arr1 = ['a', 'b', 'c'];
const arr2 = ['b', 'c', 'a'];
console.log(arr1.sort() === arr1, arr2.sort() == arr2, arr1.sort() === arr2.sort());

// ---------- What is the output? ----------
const message = Object.values({
  2: '\\',
  15: '/',
  5: '(',
  13: '/',
  1: '(',
  7: ':',
  8: '.',
  14: '/',
  16: ')',
  9: '.',
  11: '.',
  4: '\\',
  12: ')',
  3: '\\',
  10: ':',
  6: '.',
}).reduce((acc, val) => acc + val, '');
console.log(message);

// ---------- What is the output? ----------
const myFunc = (a) => {
  return (b) => {
    return a + b;
  };
};
// For context, above can also be written as:
var myFunc = function myFunc(a) {
  return function (b) {
    return a + b;
  };
};
console.log(myFunc(2)(3));

// ---------- What is the output? ----------
const arr1 = [
  {
    firstName: 'James',
  },
];
const arr2 = [...arr1]; // Can also be written as 'const arr2 = [].concat(arr1);'
arr2[0].firstName = 'Jonah';
console.log(arr1);

// ---------- What is the output? ----------
const map = ['a', 'b', 'c'].map.bind([1, 2, 3]);
map((el) => console.log(el));

// ---------- What is the output? ----------
const arr = [...new Set([3, 1, 2, 3, 4])];
console.log(arr.length, arr[2]);

// ---------- What is the output? ----------
console.log((1, 2, 3));

// ---------- What is the output? ----------
const person = {
  firstname: 'Joe',
  introduce: 'Hi, I’m ' + this.firstname,
};
console.log(person.introduce);

// ---------- What is the output? ----------
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 10);
}

// ---------- What is the output? ----------
const classes = [1, 2, 3, 4].map((el) => (el % 2 === 0 ? 'regular' : 'highlight'));
console.log(classes);

// ---------- What is the output? ----------
const myFunc = (a) => {
  return a instanceof Function ? a() : a;
};
console.log(myFunc(() => 'Batman'));
console.log(myFunc('Superman'));

// ---------- What is the output? ----------
const myObject = {
  greeting: 'Hi',
  person: 'Sam',
};
const greet = ({ greeting, person }) => {
  return `${greeting} ${person}!`;
};
console.log(greet(myObject));

// ---------- What is the output? ----------
const myArray = Object.entries({
  foo: 'bar',
  hello: 'world',
});
console.log(myArray);

// ---------- What is the output? ----------
const myObject = {
  1: 1,
  2: 2,
  3: 3,
};
console.log(Object.keys(myObject) == Object.values(myObject));

// ---------- What is the output? ----------
const myString = '  Hello World  ';
console.log(myString.trimLeft());
console.log(myString.trimRight());
console.log(myString.trim());

// ---------- What is the output? ----------
console.log(typeof NaN);

// ---------- What is the output? ----------
const evenOrOdd = [1, 2, 3, 4, 5].map((el) => (el % 2 === 0 ? 'even' : 'odd'));
console.log(evenOrOdd);

// ---------- What is the output? ----------
const myFunc = (myString) => {
  if (myString.length > 1) {
    return myFunc(myString.slice(1));
  }
  return console.log(myString);
};
myFunc('Hello world');

// ---------- What is the output? ----------
const user = null;
const username = user && user.username;
const greeting = `Hello, ${username || 'guest'}`;
console.log(greeting);

// ---------- What is the output? ----------
const a = {
  firstname: 'Bill',
};
const b = {
  firstname: 'Bill',
};
console.log(a.firstname === b.firstname);

// ---------- What is the output? ----------
var x = 10;
var y = x++;
var z = ++x;
console.log(x, y, z);

// ---------- What is the output? ----------
0 == -0;

// ---------- What is the output? ----------
function xyz() {
  var abc = 'hello Js';

  function abc() {
    return 54;
  }
  return abc;
}
console.log(xyz());

// ---------- What is the output? ----------
var lorem = {
  ipsum: 1,
};
var output = (function () {
  delete lorem.ipsum;
  return lorem.ipsum;
})();
console.log(output);

// ---------- What is the output? ----------
console.log(5 + 4 + '3');

// ---------- What is the output? ----------
(function () {
  var a = 1;
  var b = 2;
  console.log(a + ' ' + b);
})();

(function () {
  var a = 1;
  console.log(a + ' ' + b);
  var b = 2;
})();

(function () {
  let a = 1;
  console.log(a + ' ' + b);
  let b = 2;
})();

// ---------- What is the output? ----------
(function () {
  var x = 10;
  {
    let x = 20;
    console.log(x);
  }
  console.log(x);
})();

(function () {
  var x = 10;
  {
    var x = 20;
    console.log(x);
  }
  console.log(x);
})();

(function () {
  let x = 10;
  {
    let x = 20;
    console.log(x);
  }
  console.log(x);
})();

(function () {
  let x = 10;
  {
    var x = 20;
    console.log(x);
  }
  console.log(x);
})();

// ---------- What is the output? ----------
const whoa = 5;
if (whoa === 5) {
  const whoa = 500;
  console.log(whoa);
}
console.log(whoa);

// ---------- SOURCES ----------
// Big thanks to Nick Scialli, aka @nas5w on Twitter: https://twitter.com/nas5w
// 10 Common Javascript Questions and Answers 2018: https://www.codementor.io/sharadtricks/10-common-javascript-questions-and-answers-2018-o127peqet
