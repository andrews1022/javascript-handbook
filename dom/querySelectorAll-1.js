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