// ---------- INTRO / NOTES ----------
// The local storage api is actually a part of the browser, and can be seen if you enter...
window.localStorage
// ...into your console
// The localStorage API comes with a bunch of different methods, most commonly include getItem, setItem, and removeItem
// You can set key value pairs, and what you set as a value has to be a STRING

// You can still save arrays and objects, you just need to put that data into a string first using
JSON.stringify()
// Then if you need to take that string and convert it into something else, you use
JSON.parse()
// And the difference between local storage and session storage is that local storage will stay until you manually clear it out in your browser settings, and session storage will leave once your browser is closed/once the session ends.

// ---------- SET LOCAL STORAGE ITEM ----------
localStorage.setItem('name', 'John');
localStorage.setItem('age', 30);
// Go to the Application tab inside Chrome Dev Tools, and select Local Storage
// This key value pair should be listed there

// ---------- SET SESSION STORAGE ITEM ----------
sessionStorage.setItem('name', 'Beth');

// ---------- REMOVE LOCAL STORAGE ITEM ----------
localStorage.removeItem('name');

// ---------- GET LOCAL STORAGE VALUE ----------
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

// ---------- CLEAR LOCAL STORAGE ----------
localStorage.clear();
console.log(name, age);

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  // Get input value
  const task = document.querySelector('#task').value;
  console.log(task);

  // Set item to local storage
  localStorage.setItem('task', task);
  console.log('Task saved');
  // But this replaces the existing localStorage item
  // So we need to create an array of tasks, and convert that array to a string
  // This way we can keep adding to the array/localStorage

  const task = document.querySelector('#task').value;

  let tasks;

  // First, we pull out of local storage whatever's in there or check to see if there's something in there 
  // if there is, pull it out and add to it. If not just, set tasks to an empty array and add to it.
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  console.log('Task Saved');
})

// Outside of the event listener, we can as previously mentioned, use JSON.parse to loop through it as if it were an array
const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach((task) => {
  console.log(task)
});
