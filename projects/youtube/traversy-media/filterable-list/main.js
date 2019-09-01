// Get input element
let filterInput = document.querySelector('#filterInput');

// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
  // Get value of input
  let filterValue = document.querySelector('#filterInput').value.toUpperCase();

  // Get names ul
  let ul = document.querySelector('#names');

  // Get lis from ul
  let li = ul.querySelectorAll('li.collection-item');

  // Loop through collection-item li's
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName('a')[0];

    // If matched
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}