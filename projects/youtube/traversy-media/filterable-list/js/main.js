// Get input element
const filterInput = document.querySelector('#filterInput');

function filterNames() {
  // Get value of input
  // eslint-disable-next-line prettier/prettier
  const filterValue = document.querySelector('#filterInput').value.toUpperCase();

  // Get names ul
  const ul = document.querySelector('#names');

  // Get lis from ul
  const li = ul.querySelectorAll('li.collection-item');

  // Loop through collection-item li's
  for (let i = 0; i < li.length; i++) {
    const a = li[i].getElementsByTagName('a')[0];

    // If matched
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}

// Add event listener
filterInput.addEventListener('keyup', filterNames);
