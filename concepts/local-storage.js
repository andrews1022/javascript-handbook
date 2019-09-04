  // Local storage

  // Local storage only stores strings
  // Parse the JSON into a string, save it, and then parse it back to JSON
  // To set something in local storage
  localStorage.setItem('test', 'Hello!');
  
  // Get an item:
  console.log(localStorage.getItem('test'));
  
  // Delete from local storage
  localStorage.removeItem('test');
  console.log(localStorage.getItem('test'));