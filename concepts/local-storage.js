// Local storage
// What's important about using localStorage is that data will persist even after page load, and even after emptying cache/hard reload

// You can save items to localStorage as key value pairs, like an object
localStorage.setItem('id', '809t34c8u');
// Both values MUST be a string
// Here, the key is 'id', and the value is '809t34c8u'

// If you have for example JSON data, you will need to use:
JSON.stringify();

// If you want to retrive an item from localStore, simply use getItem()
localStorage.getItem('id'); // "809t34c8u"

// In the console, you can simply type just...
localStorage
// ...to display everything currently in your localStorage

// Get the number of items in localStorage:
localStorage.length

// If you want to delete an item from localStorage
localStorage.removeItem('id');