// Let's pretend we're going to fetch data from a data.txt file (in the same directory as this js file) using the XHR object and output it on the screen

function loadData() {
  // Create an XHR object and instantiate it too
  const xhr = new XMLHttpRequest();
  // Another common variable name you might see is 'xmlHttp', but xhr is a lot shorter and easier to type/use

  // XMLHttpRequest like other objects, has properties and methods associated with it. One of them is OPEN
  // Here we specify the type of request, the path/file we want to fetch from, and we add true to make it synchronous
  xhr.open('GET', 'data.txt', true);

  // Checking for the readyState at this point in the process
  console.log('READYSTATE', xhr.readyState);

  // Inside the function, we do whatever we need to do with the data that we receive
  xhr.onload = function () {
    console.log('READYSTATE', xhr.readyState);
    // Check for status of 200 (in HTTP, 200 means everything is OK)
    if (this.status === 200) {
      console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  // Optional - Used for spinners/loaders (display something while something is loading)
  xhr.onprogress = function () {
    console.log('READYSTATE', xhr.readyState);
  };

  // OLD WAY - using onreadystatechange > we need to check for status AND readyState
  xhr.onreadystatechange = function () {
    // Checking for the readyState at this point in the process
    console.log('READYSTATE', xhr.readyState);
    if (this.status === 200 && this.readyState === 4) {
      console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  // Check for an error if something goes wrong
  xhr.onerror = function () {
    console.log('Request error...');
  };

  // Make sure to add to finalize everything
  xhr.send();
}

// Event Listener
document.getElementById('button').addEventListener('click', loadData);

// HTTP STATUSES:
// 200 = OK
// 403 = FOREBIDDEN
// 404 = NOT FOUND

// readyState Values
// 0: Request not initialized
// 1: Server connection established
// 2: Request is received
// 3: Processing the request
// 4: Request is finished and the response is ready
