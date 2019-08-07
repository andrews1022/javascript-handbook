// APPLY THE STYLINGS OF A CLASS CALLED coolTitle

// Consider this heading:
<h1>Shopping List</h1>

// PART 1
// Use querySelector to select the heading
// Cache it in a variable called h1
let h1 = document.querySelector('h1');


// PART 2
// Add class naming using classList
h1.classList.add('coolTitle');

// Remove class naming using classList
h1.classList.remove('coolTitle');

// Toggle class naming using classList
h1.classList.toggle('coolTitle');