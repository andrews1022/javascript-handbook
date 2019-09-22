// ------------------------------ PART 2 ------------------------------

// *** HTML FOR REFERENCE *** 
<body>
  <h1 id="header">The Dom is cool for many reasons</h1>
  <ul class="list">
    <li>You can see how pages are made</li>
    <li>You can manipulate it</li>
  </ul>
</body>

// First, we created a p tag and stored it in the variable para:
var para = document.createElement('p');

// Then we can modify the element’s content:
para.innerHTML = "This paragraph was made using JavaScript!"

// Then we appended it to the page using .appendChild()
document.body.appendChild(para);

// *** NOTE ***
// .appendChild() adds a child element to whatever is being selected. 
