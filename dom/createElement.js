// ---------- EXAMPLE #1 ----------
// HTML for reference:
<body>
  <h1 id='header'>The Dom is cool for many reasons</h1>
  <ul class='list'>
    <li>You can see how pages are made</li>
    <li>You can manipulate it</li>
  </ul>
</body>;

// First, we create a <p> tag and store it in a variable called 'para':
var para = document.createElement('p');

// Then we can modify the element’s content:
para.innerHTML = 'This paragraph was made using JavaScript!';

// We can appended it to the page using .appendChild()
document.body.appendChild(para);

// *** NOTE ***
// .appendChild() adds a child element to whatever is being selected.

// ---------- EXAMPLE #2 ----------
// Create the element and place it in a variable, then inside the () place which element you want to create
const li = document.createElement('li');
li.className = 'collection-item'; // Add a class to li
li.id = 'new-item'; // Add an id
li.setAttribute('title', 'New Item'); // Add an attribute
li.appendChild(document.createTextNode('Hello World')); // Create text node and append

const link = document.createElement('a'); // Create new link element
link.className = 'delete-item secondary-content'; // Add a class to link
link.innerHTML = '<i class="fa fa-remove"></i>'; // Add icon html
li.appendChild(link); // Append the link into the li
document.querySelector('ul').appendChild(li); // Append li as child to ul

console.log(li);
