// Consider this ul:
/* 
    <ul class="items">
        <li class="item">Item 1</li>
        <li class="item">Item 2</li>
        <li class="item">Item 3</li>
    </ul>
*/

// Edit content on item 2 (a bit tricker, since it is not the first or last)
ul.children[1].innerText = 'Andrew';