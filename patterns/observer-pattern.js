// The observer pattern which allows us to subscribe and unsubscribe to certain events or certain functionality
// It can be used to notify the DOM of certain elements to be updated

// Constructor function
function EventObserver() {
  // Observers is an empty array that will have functions passed/pushed in/on to it
  this.observers = [];
}

// EventObserver prototype - set to an object
EventObserver.prototype = {
  // Subscribe method
  subscribe: function (func) {
    // Push on to observers array
    this.observers.push(func);
    // Notify user
    console.log(`You are now subscribed to ${func.name}!`);
  },
  // Unsubscribe function
  unsubscribe: function (func) {
    // ----- From Brad -----
    // Filter out from the list whatever matches the callback function
    // If there is no match, the callback gets to stay on the list
    // The filter returns a new list and reassigns the list of observers
    // If you're unsubscribing from a certain function, that one will be removed but it'll generate a new list that has the rest of the functions that are subscribed to
    this.observers = this.observers.filter((item) => {
      // Item represents the function being passed in
      // If the item is NOT equal to the function be passed into func, then we return the item
      if (item !== func) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${func.name}!`);
  },
  fire: function () {
    // Loop through the observers
    this.observers.forEach((item) => {
      // Call whatever the function is using .call()
      item.call();
    });
  },
};

// Click Handlers
const getCurrentMilliseconds = () => {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurrentSeconds = () => {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};

// Instantiate new EventObserver
const click = new EventObserver();

// ----- Event listeners -----
// Subscribe event listener for milliseconds
document.querySelector('.sub-ms').addEventListener('click', () => {
  // Take our click object from above and call subscribe method
  click.subscribe(getCurrentMilliseconds);
});

// Unsubscribe event listener for milliseconds
document.querySelector('.unsub-ms').addEventListener('click', () => {
  click.unsubscribe(getCurrentMilliseconds);
});

// Subscribe event listener for seconds
document.querySelector('.sub-s').addEventListener('click', () => {
  // Take our click object from above and call subscribe method
  click.subscribe(getCurrentSeconds);
});

// Unsubscribe event listener for seconds
document.querySelector('.unsub-s').addEventListener('click', () => {
  click.unsubscribe(getCurrentSeconds);
});

// Fire event listener
document.querySelector('.fire').addEventListener('click', () => {
  click.fire();
});

// This is the same code as above, just done with ES6 classes
class EventObserver {
  // Constructor function
  constructor() {
    this.observers = [];
  }

  // ----- Class methods -----
  // Subscribe method
  subscribe(func) {
    this.observers.push(func);
    console.log(`You are now subscribed to ${func.name}!`);
  }

  // Unsubscribe method
  unsubscribe(func) {
    this.observers = this.observers.filter((item) => {
      if (item !== func) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${func.name}!`);
  }

  // Fire method
  fire() {
    this.observers.forEach((item) => {
      item.call();
    });
  }
}

// Click Handlers
const getCurrentMilliseconds = () => {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurrentSeconds = () => {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};

// Instantiate new EventObserver
const click = new EventObserver();

// ----- Event listeners -----
// Subscribe event listener for milliseconds
document.querySelector('.sub-ms').addEventListener('click', () => {
  // Take our click object from above and call subscribe method
  click.subscribe(getCurrentMilliseconds);
});

// Unsubscribe event listener for milliseconds
document.querySelector('.unsub-ms').addEventListener('click', () => {
  click.unsubscribe(getCurrentMilliseconds);
});

// Subscribe event listener for seconds
document.querySelector('.sub-s').addEventListener('click', () => {
  // Take our click object from above and call subscribe method
  click.subscribe(getCurrentSeconds);
});

// Unsubscribe event listener for seconds
document.querySelector('.unsub-s').addEventListener('click', () => {
  click.unsubscribe(getCurrentSeconds);
});

// Fire event listener
document.querySelector('.fire').addEventListener('click', () => {
  click.fire();
});
