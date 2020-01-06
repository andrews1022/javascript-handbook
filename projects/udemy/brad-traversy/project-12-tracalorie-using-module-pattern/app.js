// Project using the module patter
// Remember, what we create inside the function is private
// What we return is public

// -------------------- Storage Controller --------------------
const StorageCtrl = (function() {
  // Public methods
  return {
    // Store items in local storage
    storeItem: function(passedInItem) {
      // Set local variable
      let items;

      // Check to see if there is an item already in local storage
      // But first we have to convert to a JSON string
      if (localStorage.getItem('items') === null) {
        items = [];

        // Push on the new item
        items.push(passedInItem);

        // Set local storage
        localStorage.setItem('items', JSON.stringify(items));
      } else {
        // If there is something in local storage, do this
        // Get what is already in local storage
        items = JSON.parse(localStorage.getItem('items'));

        // Push the new item
        items.push(passedInItem);

        // Re set local storage
        localStorage.setItem('items', JSON.stringify(items));
      }
    },

    // Get items from local storage
    getItemsFromStorage: function() {
      let items;

      // First check if there any items
      if (localStorage.getItem('items') === null) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem('items'));
      }

      return items;
    },

    // Update item storage
    updateItemStorage: function(updatedItem) {
      // Pull the items out of local storage and wrap it in JSON parse
      const items = JSON.parse(localStorage.getItem('items'));

      // Loop through the items
      items.forEach(function(item, index) {
        // If the updated item id is equal to the current iteration's id
        if (updatedItem.id === item.id) {
          // If true, splice it out
          items.splice(index, 1, updatedItem); // Pass in the index where its add, delete 1 from the index, and replace it with updatedItem
        }
      });

      // Re set local storage
      localStorage.setItem('items', JSON.stringify(items));
    },

    // Delete items from storage
    deleteItemFromStorage: function(id) {
      // Pull the items out of local storage and wrap it in JSON parse
      let items = JSON.parse(localStorage.getItem('items'));

      // Loop through the items
      items.forEach(function(item, index) {
        // If the updated item id is equal to the current iteration's id
        if (id === item.id) {
          // If true, splice it out
          items.splice(index, 1); // Pass in the index where its add, delete 1 from the index
        }
      });

      // Re set local storage
      localStorage.setItem('items', JSON.stringify(items));
    },

    // Clear all items from local storage
    clearItemsFromStorage: function() {
      localStorage.removeItem('items');
    }
  };
})();

// -------------------- Item Controller --------------------
const ItemCtrl = (function() {
  // Item Constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data Structure / State
  const data = {
    // Items array for meals/food items that are inputted to be stored in
    // items: [
    //   // Temporary hard coded data for now
    //   // {id: 0, name:'Steak Dinner', calories: 1200},
    //   // {id: 1, name:'Cookie', calories: 400},
    //   // {id: 2, name:'Eggs', calories: 325},
    // ],

    // Grab items from local storage and isplay them
    items: StorageCtrl.getItemsFromStorage(),

    currentItem: null, // The current item will be the item when click on edit, it will be the item currently being edited and will also be displayed in the form to edit the data
    totalCalories: 0 // Total Calories counter
  };

  // Public method
  // With this, we can run ItemCtrl.logData(); and it will work (will return the)
  return {
    getItems: function() {
      return data.items;
    },
    addItem: function(name, calories) {
      let ID;

      // Create ID
      if (data.items.length > 0) {
        // Auto increment the ID#
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        // If not, make the id = 0
        ID = 0;
      }

      // Calories change to int
      calories = parseInt(calories);

      // Create new item
      newItem = new Item(ID, name, calories);

      // Push the item to the items array
      data.items.push(newItem);

      return newItem;
    },

    getItemById: function(id) {
      let found = null;

      // Loop through the items and match the id
      data.items.forEach(function(item) {
        if (item.id === id) {
          found = item;
        }
      });

      return found;
    },

    // Update item in items array
    updateItem: function(name, calories) {
      // Turn calories into a number - run through parse int
      calories = parseInt(calories);

      let found = null;

      data.items.forEach(function(item) {
        if (item.id === data.currentItem.id) {
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    },

    deleteItem: function(id) {
      // Get the ids
      ids = data.items.map(function(item) {
        return item.id;
      });

      // Get the index
      const index = ids.indexOf(id);

      // Splice out of array
      data.items.splice(index, 1);
    },

    // Clear items out of the data structure
    clearAllItems: function() {
      data.items = [];
    },

    setCurrentItem: function(item) {
      data.currentItem = item;
    },

    getCurrentItem: function() {
      return data.currentItem;
    },

    getTotalCalories: function() {
      // To get the total amount of calories, we have to loop through each item, and add up the calories

      // Starting total
      let total = 0;

      // Loop through items and add up calories
      data.items.forEach(function(item) {
        total += item.calories;
      });

      // Set total calories in data structure
      data.totalCalories = total;

      return data.totalCalories;
    },

    logData: function() {
      return data;
    }
  };
})();

// -------------------- UI Controller --------------------
const UICtrl = (function() {
  // Have dynamic selectors incase html should be changed
  // Just update selectors here
  const UISelectors = {
    itemList: '#item-list',
    listItems: '#item-list li',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    clearBtn: '.clear-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'
  };

  // Public method
  return {
    populateItemList: function(items) {
      // We need to loop through the items, and make each one into a list item, and then insert it into the ul
      let html = '';

      items.forEach(function(item) {
        html += `
        <li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories}</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>
        `;
      });

      // Insert list items into ul
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function() {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      };
    },

    addListItem: function(item) {
      // Show the list
      document.querySelector(UISelectors.itemList).style.display = 'block';

      // Create a list item element
      const li = document.createElement('li');

      // Add class
      li.className = 'collection-item';

      // Add id
      li.id = `item-${item.id}`;

      // Add HTML
      li.innerHTML = `
        <strong>${item.name}: </strong> <em>${item.calories}</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      `;

      // Insert into DOM
      document
        .querySelector(UISelectors.itemList)
        .insertAdjacentElement('beforeend', li);
    },

    updateListItem: function(item) {
      let listItems = document.querySelectorAll(UISelectors.listItems);

      // Above gives us a nodelist, so we need to convert to an array first
      listItems = Array.from(listItems);

      // Now we can loop through
      listItems.forEach(function(listItem) {
        const itemID = listItem.getAttribute('id');

        // Verify the item we are editing is correct/the same
        if (itemID === `item-${item.id}`) {
          document.querySelector(`#${itemID}`).innerHTML = `
            <strong>${item.name}: </strong> <em>${item.calories}</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
            </a>
          `;
        }
      });
    },

    // Delete list item from ul
    deleteListItem: function(id) {
      const itemID = `#item-${id}`;
      const item = document.querySelector(itemID);
      item.remove();
    },

    // Clear input fields
    clearInputFields: function() {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },

    addItemToForm: function() {
      document.querySelector(
        UISelectors.itemNameInput
      ).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(
        UISelectors.itemCaloriesInput
      ).value = ItemCtrl.getCurrentItem().calories;

      UICtrl.showEditState();
    },

    removeItems: function() {
      // Grab all list items
      let listItems = document.querySelectorAll(UISelectors.listItems);

      // Turn NodeList into an array
      listItems = Array.from(listItems);

      // Loop through each item and remove it
      listItems.forEach(function(item) {
        item.remove();
      });
    },

    hideList: function() {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },

    showTotalCalories: function(totalCalories) {
      document.querySelector(
        UISelectors.totalCalories
      ).textContent = totalCalories;
    },
    clearEditState: function() {
      // Make sure the inputs are clear - call our method we already made
      UICtrl.clearInputFields();

      // Hide the unwanted btns
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    showEditState: function() {
      // Show the edit btns
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },
    getSelectors: function() {
      return UISelectors;
    }
  };
})();

// -------------------- App Controller --------------------
const App = (function(ItemCtrl, UICtrl, StorageCtrl) {
  // The main app controller will return one function/method
  // It will be the init function
  // This will be the initalizer for the app/anything we need to run right away when the application loads

  // Load event listeners
  const loadEventListeners = function() {
    // Get UI selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener('click', itemAddSubmit);

    // Disable submit on enter while in edit state
    document.addEventListener('keypress', function(e) {
      // Check for which key was hit with keycode (keycode for enter key is 13)
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();

        return false;

        // This essentially disables the enter key while editing the meal - forces the user to click the btns
      }
    });

    // Edit icon click event
    document
      .querySelector(UISelectors.itemList)
      .addEventListener('click', itemEditClick);

    // Update item event
    document
      .querySelector(UISelectors.updateBtn)
      .addEventListener('click', itemUpdateSubmit);

    // Delete item event
    document
      .querySelector(UISelectors.deleteBtn)
      .addEventListener('click', itemDeleteSubmit);

    // Back btn event (cancel editing)
    document
      .querySelector(UISelectors.backBtn)
      .addEventListener('click', UICtrl.clearEditState);

    // Clear all items event
    document
      .querySelector(UISelectors.clearBtn)
      .addEventListener('click', clearAllItemsClick);
  };

  // Add item submit
  const itemAddSubmit = function(e) {
    // Prevent default behavior
    e.preventDefault();

    // Get form input from UI Controller
    const input = UICtrl.getItemInput();

    // Check for name and calorie input
    if (input.name !== '' && input.calories !== '') {
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);

      // Add item to UI list
      UICtrl.addListItem(newItem);

      // Get the total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      // Show total calories to the UI
      UICtrl.showTotalCalories(totalCalories);

      // Store in local storage
      StorageCtrl.storeItem(newItem);

      // Clear input fields
      UICtrl.clearInputFields();
    }
  };

  // Item delete submit
  const itemDeleteSubmit = function(e) {
    e.preventDefault();

    // Get id from the current item
    const currentItem = ItemCtrl.getCurrentItem();

    // Delete from data structure
    ItemCtrl.deleteItem(currentItem.id);

    // Delete from UI
    UICtrl.deleteListItem(currentItem.id);

    // Get the total calories
    const totalCalories = ItemCtrl.getTotalCalories();

    // Show total calories to the UI
    UICtrl.showTotalCalories(totalCalories);

    // Delete from local storage
    StorageCtrl.deleteItemFromStorage(currentItem.id);

    UICtrl.clearEditState();
  };

  // Clear all items
  const clearAllItemsClick = function() {
    // Delete all items from data structure
    ItemCtrl.clearAllItems();

    // Get the total calories
    const totalCalories = ItemCtrl.getTotalCalories();

    // Show total calories to the UI
    UICtrl.showTotalCalories(totalCalories);

    // Remove items from the UI
    UICtrl.removeItems();

    // Remove from local storage
    StorageCtrl.clearItemsFromStorage();

    // Hide the UL
    UICtrl.hideList();
  };

  // Item update + submit
  const itemUpdateSubmit = function(e) {
    e.preventDefault();

    // Get item input
    const input = UICtrl.getItemInput();

    // Update item - set it to the item controller
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

    // Update UI
    UICtrl.updateListItem(updatedItem);

    // Get the total calories
    const totalCalories = ItemCtrl.getTotalCalories();

    // Show total calories to the UI
    UICtrl.showTotalCalories(totalCalories);

    // Update local storage
    StorageCtrl.updateItemStorage(updatedItem); // Calling updatedItem just above

    UICtrl.clearEditState();
  };

  // Edit item click handler
  const itemEditClick = function(e) {
    e.preventDefault();

    // Since the item is not in the DOM initially, we need to use event delegation to target it
    if (e.target.classList.contains('edit-item')) {
      // Get the list item id#
      const listId = e.target.parentNode.parentNode.id; // This gives us the full id, but we just want the number at the end

      // Break into an array - split it at the dash
      // So 1 array is item- and the other array is the number itself
      const listIdArray = listId.split('-');
      // The number is now in the [1] spot in the array

      // Get the id number
      const id = parseInt(listIdArray[1]);

      // Get the entire item
      const itemToEdit = ItemCtrl.getItemById(id);

      // Set current item
      ItemCtrl.setCurrentItem(itemToEdit);

      // Add item to form
      UICtrl.addItemToForm();
    }
  };

  // Public method
  return {
    init: function() {
      // Clear edit state / set initial state
      UICtrl.clearEditState();

      // Call the getItems function when app initializes
      // Put the result of this into a variable initItems
      const initItems = ItemCtrl.getItems();

      // Check if any items are in the ul
      if (initItems.length === 0) {
        UICtrl.hideList();
      } else {
        // Populate with list otherwise
        UICtrl.populateItemList(initItems);
      }

      // Get the total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      // Show total calories to the UI
      UICtrl.showTotalCalories(totalCalories);

      // Load event listeners
      loadEventListeners();
    }
  };
})(ItemCtrl, UICtrl, StorageCtrl);

// Initialize app
App.init();
