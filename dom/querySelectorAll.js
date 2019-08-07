// EXAMPLE 1
// Consider this ul:
<ul class="items">
    <li class="item">Item 1</li>
    <li class="item">Item 2</li>
    <li class="item">Item 3</li>
</ul> 

// Select all the li elements above by tag
document.querySelectorAll('li');

// Select all the li elements above by class
document.querySelectorAll('.item');

// NOTE: when using querySelector by tag name, it selects ONLY THE FIRST element of that type
document.querySelector('li');


// EXAMPLE 2
// Consider this ul:
<ul>
    <li>Notebook</li>
    <li>Jello</li>
    <li>Spinach</li>
    <li>Rice</li>
    <li>Birthday Cake</li>
    <li>Candles</li>
</ul>

// Use querySelectorAll to select all the li
document.querySelectorAll('li');

// Use querySelectorAll to select all the li with text Jello
document.querySelectorAll('li'[1]);