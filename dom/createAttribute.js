// createElement FOR REFERENCE:
// First, we create a <p> tag and store it in the variable 'para':
var para = document.createElement('p');

// Then we can modify para’s content:
para.innerHTML = "This paragraph was made using JavaScript!"

// Then we appended it to the page using .appendChild()
document.body.appendChild(para);

// *** NOTE *** 
// .appendChild() adds a child element to whatever is being selected. 


// ---------- createAttribute ----------
// Let’s say we want to create and add the 'id' attribute to our paragraph above
// First, let’s create it and store it in a variable:
var attr = document.createAttribute('id');

// But right now, this attr variable has no value. So, let’s add one:
attr.value = 'created';

// Now we can set this attribute to the paragraph
para.setAttributeNode(attr);