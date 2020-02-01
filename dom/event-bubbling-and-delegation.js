// HTML for reference
<div class="container">
  <div class="row">
    <div class="col s12">
      <div id="main" class="card">
        <div class="card-content">
          <span class="card-title">Task List</span>
          <div class="row">
            <form id="task-form">
              <div class="input-field col s12">
                <input type="text" name="task" id="task" />
                <label for="task">New Task</label>
              </div>
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <input type="submit" value="Add Task" class="btn" />
            </form>
          </div>
        </div>
        <div class="card-action">
          <h5 id="task-title">Tasks</h5>
          <ul class="collection">
            <li class="collection-item">
              List Item
              <a href="#" class="delete-item secondary-content">
                <i class="fa fa-remove"></i>
              </a>
            </li>
            <li class="collection-item">
              List Item
              <a href="#" class="delete-item secondary-content">
                <i class="fa fa-remove"></i>
              </a>
            </li>
            <li class="collection-item">
              List Item
              <a href="#" class="delete-item secondary-content">
                <i class="fa fa-remove"></i>
              </a>
            </li>
            <li class="collection-item">
              List Item
              <a href="#" class="delete-item secondary-content">
                <i class="fa fa-remove"></i>
              </a>
            </li>
            <li class="collection-item">
              List Item
              <a href="#" class="delete-item secondary-content">
                <i class="fa fa-remove"></i>
              </a>
            </li>
          </ul>
          <a class="clear-tasks btn black" href="#">Clear Tasks</a>
        </div>
      </div>
    </div>
  </div>
</div>

// Event bubbling is the bubbling up of events through the DOM.
// So when an event happens on a particular element in the DOM and actually will bubble up through its parent

// Event delegation is almost the opposite of event bubbling.
// It's where we put the listener on one of the parent elements and then we use logic inside of the event handler to target the element that we actually want that click for, or whatever type of event it is.

// EVENT BUBBLING EXAMPLE
document.querySelector('.card-title').addEventListener('click', () => {
  console.log('card-title');
});

document.querySelector('.card-content').addEventListener('click', () => {
  console.log('card-content');
});

document.querySelector('.card').addEventListener('click', () => {
  console.log('card');
});

document.querySelector('.col').addEventListener('click', () => {
  console.log('col');
});

// All 4 of these event listeners fire off even if we click just the card title
// They fire off due to event bubbling (bubble up the DOM)


// EVENT DELEGATION EXAMPLE (on the parent then going down the DOM)
const delItem = document.querySelector('.delete-item');

function deleteItem() {
  console.log('delete item');
}

delItem.addEventListener('click', deleteItem);
// The problem here is that that this event only fires on the first delete-item button

// Another situation where you need to use event delegation is if you dynamically insert something into the DOM through JavaScript
// For example if we insert a new list item that was not there when the page loaded, then you need to use event delegation

// So we can even go as far as adding an event listener to the body and go from there
document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  // At this point, this works when we click the X button
  // But, it's grabbing the <i> tag, and not the <a> tag
  // And with className, we need to match ALL class names
  // So if we added a class to this element later on, this would not work
  if (e.target.parentElement.className === 'delete-item secondary-content') {
    console.log('delete item');
  }

  // Better way using classList - check to see if the element contains at least this one class name
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('DELETED'); // Remember this targets the <a> tag, as it is the parent of the <i> tag

    // Actually remove the whole <li> elememt
    // Since we are targeting the <i> element, we need to go 2 up to get the <li>
    // So we use .parentElement twice
    e.target.parentElement.parentElement.remove();
  }
}