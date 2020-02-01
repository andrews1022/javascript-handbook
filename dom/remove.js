// HTML for reference:
<ul class="list">
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
  <li class="item">Item 3</li>
</ul>

const ul = document.querySelector('.list');

// Remove the ul from the document
ul.remove();

// Remove Just Item 3
ul.lastElementChild.remove();