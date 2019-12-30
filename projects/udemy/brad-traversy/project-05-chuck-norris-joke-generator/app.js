function getJokes(e) {
  // Prevent default behavior
  e.preventDefault();

  // Get input amount
  const number = document.querySelector('input[type="number"]').value;

  // Create new xhr variable, and fetch data from api based on number selected
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    // Check for 200 status
    if (this.status === 200) {
      // Make sure to parse the JSON string into an array of objects which we can then interact with
      const response = JSON.parse(this.responseText);

      // Initalize an output variable
      let output = '';

      // Check if type is success
      if (response.type === 'success') {
        // If successful, loop through append each joke to the DOM
        response.value.forEach(function (joke) {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += '<li>Something went wrong</li>';
      }

      // Take the output and insert into the ul element
      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();
}

document.querySelector('.get-jokes').addEventListener('click', getJokes);