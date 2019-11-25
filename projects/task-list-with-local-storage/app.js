// Define UI Variables
const form = document.querySelector('#task-form'); // form
const taskList = document.querySelector('.collection'); // task list (ul)
const clearBtn = document.querySelector('.clear-tasks'); // clear button
const filter = document.querySelector('#filter'); // filter input
const taskInput = document.querySelector('#task'); // task input

// Get tasks from local storage
function getTasks() {
  let tasks;

  // Check local storage to see if there are any tasks in there
  if (localStorage.getItem('tasks') === null) {
    // If null, set tasks to an empty array
    tasks = [];
  } else {
    // Else, set tasks to whatever is in local storage
    // LocalStorage only saves data as strings, so we need to parse it first
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  // Loop through the tasks that are there
  tasks.forEach(task => {
    // Create <li> element
    const li = document.createElement('li');

    // Add class name
    li.className = 'collection-item';

    // Create text node and append to li
    li.appendChild(document.createTextNode(task));

    // Create a new link element (delete icon)
    const link = document.createElement('a');

    // Add class
    link.className = 'delete-item secondary-content';

    // Add icon html
    link.innerHTML = '<i class="fas fa-times"></i>';

    // Append the link to the li
    li.appendChild(link);

    // Append the li to the ul
    taskList.appendChild(li);
  });
}

// Save to local storage
function storeTaskInLocalStorage(task) {
  let tasks;

  // Check local storage to see if there are any tasks in there
  if (localStorage.getItem('tasks') === null) {
    // If null, set tasks to an empty array
    tasks = [];
  } else {
    // Else, set tasks to whatever is in local storage
    // LocalStorage only saves data as strings, so we need to parse it first
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  // Push on to the tasks variable
  tasks.push(task);

  // Set back to local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add task function
function addTask(event) {
  event.preventDefault();

  // Check if there is a value
  if (taskInput.value === '') {
    alert('Add a task');
  }

  // Create <li> element
  const li = document.createElement('li');

  // Add class name
  li.className = 'collection-item';

  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create a new link element (delete icon)
  const link = document.createElement('a');

  // Add class
  link.className = 'delete-item secondary-content';

  // Add icon html
  link.innerHTML = '<i class="fas fa-times"></i>';

  // Append the link to the li
  li.appendChild(link);

  // Append the li to the ul
  taskList.appendChild(li);

  // Save in localStorage
  storeTaskInLocalStorage(taskInput.value);

  // Clear the input
  taskInput.value = '';
}

// Remove task from local storage
function removeTaskFromLocalStorage(taskItem) {
  let tasks;

  // Check local storage to see if there are any tasks in there
  if (localStorage.getItem('tasks') === null) {
    // If null, set tasks to an empty array
    tasks = [];
  } else {
    // Else, set tasks to whatever is in local storage
    // LocalStorage only saves data as strings, so we need to parse it first
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  // Loop through and remove
  tasks.forEach((task, index) => {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  // Set local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task from page
function removeTask(event) {
  // Check to see if the parent element of the icon click contains class name 'delete-item'
  if (event.target.parentElement.classList.contains('delete-item')) {
    event.target.parentElement.parentElement.remove();

    // Remove from Local Storage
    removeTaskFromLocalStorage(event.target.parentElement.parentElement);
  }
}

// Clear tasks from local storage
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// Clear tasks function
function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // Clear from localStorage
  clearTasksFromLocalStorage();
}

// Filter tasks
function filterTasks(event) {
  // This gives us whatever is being typed in
  // Use toLowerCase for consistent filtering
  const text = event.target.value.toLowerCase();

  // Take all list items
  document.querySelectorAll('.collection-item').forEach(task => {
    const taskFilter = task;

    const item = task.firstChild.textContent;
    // Check if what's being typed matches any li on the page
    // If there is no match that gives a result of -1
    // So first check to see if it does not equal -1
    // Then set display to block. Otherwise, set display to none
    if (item.toLowerCase().indexOf(text) !== -1) {
      taskFilter.style.display = 'block';
    } else {
      taskFilter.style.display = 'none';
    }
  });
}

// loadEventListeners function
function loadEventListeners() {
  // DOM Load Event
  document.addEventListener('DOMContentLoaded', getTasks);

  // Add task event
  form.addEventListener('submit', addTask);

  // Remove task event
  taskList.addEventListener('click', removeTask);

  // Clear all tasks event
  clearBtn.addEventListener('click', clearTasks);

  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// Call the loadEventListeners function
loadEventListeners();
