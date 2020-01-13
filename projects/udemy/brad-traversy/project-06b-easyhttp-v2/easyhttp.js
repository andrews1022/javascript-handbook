/**
* Easy HTTP Library
* A library for making HTTP requests
*
* @version 2.0.0
* @author Andrew Shearer
* @license MIT
*
**/

class EasyHTTP {
  // Make an HTTP GET request
  get(url){
    return new Promise((res, rej) => {
      fetch(url)
      .then(resp => resp.json())
      .then(data => res(data))
      .catch(err => rej(err));
    });
  }

  // Make an HTTP POST request
  post(url, data){
    return new Promise((res, rej) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(resp => resp.json())
      .then(data => res(data))
      .catch(err => rej(err));
    });
  }

  // Make an HTTP PUT request
  put(url, data){
    return new Promise((res, rej) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(resp => resp.json())
      .then(data => res(data))
      .catch(err => rej(err));
    });
  }

  // Make an HTTP DELETE request
  delete(url){
    return new Promise((res, rej) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(resp => resp.json())
      .then(() => res('Resource Deleted'))
      .catch(err => rej(err));
    });
  }
}