function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// MAKE AN HTTP GET REQUEST
easyHTTP.prototype.get = function (url, cb) {
  this.http.open('GET', url, true);

  // We need to capture 'this' in the current scope inside a variable to be able to use it inside the onload function and if statement
  // This is for the old ES5 way
  // With ES6, you can simply use an arrow function to solve this problem
  let self = this;

  this.http.onload = function () {
    if (self.http.status === 200) {
      cb(null, self.http.responseText);
    } else {
      cb(`Library error: ${self.http.status}`);
    }
  }

  this.http.send();
}

// MAKE AN HTTP POST REQUEST
// Will take in the url, data which you are sending, and a callback
easyHTTP.prototype.post = function (url, data, cb) {
  this.http.open('POST', url, true);

  // Set content type
  this.http.setRequestHeader('Content-type', 'application/json');

  // See above for why we use the self variable
  let self = this;

  this.http.onload = function () {
    cb(null, self.http.responseText);
  }

  // The data will initially be a regular JavaScript object when we pass it in
  // So we need to run it through JSON.stringify() to send it as a JSON string
  this.http.send(JSON.stringify(data));
}

// MAKE AN HTTP PUT REQUEST
easyHTTP.prototype.put = function (url, data, cb) {
  this.http.open('PUT', url, true);

  // Set content type
  this.http.setRequestHeader('Content-type', 'application/json');

  // See above for why we use the self variable
  let self = this;

  this.http.onload = function () {
    cb(null, self.http.responseText);
  }

  // The data will initially be a regular JavaScript object when we pass it in
  // So we need to run it through JSON.stringify() to send it as a JSON string
  this.http.send(JSON.stringify(data));
}

// MAKE AN HTTP DELETE REQUEST
easyHTTP.prototype.delete = function (url, cb) {
  this.http.open('DELETE', url, true);
  
  let self = this;

  this.http.onload = function () {
    if (self.http.status === 200) {
      cb(null, 'Post Deleted!');
    } else {
      cb(`Library error: ${self.http.status}`);
    }
  }

  this.http.send();
}