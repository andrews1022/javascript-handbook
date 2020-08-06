// HTML for reference:
<ul id='items' class='list-group'>
  <li class='list-group-item'>Item 1</li>
  <li class='list-group-item'>Item 2</li>
  <li class='list-group-item'>Item 3</li>
  <li class='list-group-item'>Item 4</li>
</ul>;

// Select all items using querySelectorAll
const itemsList = document.querySelectorAll('.list-group-item');

// REGULAR FUNCTION SYNTAX
itemsList.forEach(function (item) {
  item.style.backgroundColor = 'SpringGreen';
});

// ARROW FUNCTION SYNTAX
itemsList.forEach((item) => {
  item.style.backgroundColor = 'SpringGreen';
});

// CONDENSED ARROW FUNCTION
itemsList.forEach((item) => (item.style.backgroundColor = 'PaleTurquoise'));
