// ---------- EXAMPLE #1 ----------
// HTML for reference:
<body>
  <h1 id="header">The Dom is cool for many reasons</h1>
  <ul class="list">
    <li>You can see how pages are made</li>
    <li>You can manipulate it</li>
  </ul>
</body>

// First, we create a <p> tag and store it in a variable called 'para':
var para = document.createElement('p');

// Then we can modify the element’s content:
para.innerHTML = "This paragraph was made using JavaScript!"

// We can appended it to the page using .appendChild()
document.body.appendChild(para);

// *** NOTE ***
// .appendChild() adds a child element to whatever is being selected. 


// ---------- EXAMPLE #2 ----------
// Create the element and place it in a variable, then inside the () place which element you want to create
const li = document.createElement('li');

// Add a class to li
li.className = 'collection-item';

// Add an id
li.id = 'new-item';

// Add an attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');

// Add a class to link
link.className = 'delete-item secondary-content';

// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append the link into the li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul').appendChild(li);

console.log(li);