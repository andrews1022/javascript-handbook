// First, we create a <p> tag and store it in the variable 'para':
var para = document.createElement('p');

// Then we can modify para’s content:
para.innerHTML = "This paragraph was made using JavaScript!"

// Then we appended it to the page using .appendChild()
document.body.appendChild(para);

// *** NOTE *** 
// .appendChild() adds a child element to whatever is being selected. 