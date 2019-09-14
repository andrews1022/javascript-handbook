// HTML FOR REFERENCE:
<body>
  <h1 id="header">The Dom is cool for many reasons</h1>
  <ul class="list">
    <li>You can see how pages are made</li>
    <li>You can manipulate it</li>
  </ul>
</body>

// Grabbing the ul element with class name of list:
document.getElementsByClassName('list');

// And notice it’s Elements - plural
// So, we should expect an array

// But since this is the only element with this class name on the page, we can use the index of 0 to grab it specifically
document.getElementsByClassName('list')[0];