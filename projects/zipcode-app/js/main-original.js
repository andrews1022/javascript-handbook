// Get location info
function getLocationInfo(event) {
  // Get input value
  const zipValue = document.querySelector('#zip-enter').value;

  // Make request using fetch
  fetch(`https://api.zippopotam.us/us/${zipValue}`)
    // First check if the response is status code 200 (good status)
    .then(response => {
      if (response.status !== 200) {
        // Grab output box and output an alert
        document.querySelector('#output').innerHTML = `
          <article class="message is-danger">
            <div class="message-body">Please enter a valid zipcode.</div>
          </article>
        `;
        // Throw an error if above should happen
        throw Error(response.statusText);
      } else {
        // Map the JSON
        return response.json();
      }
    })
    // Get our data
    .then(data => {
      // Loop through the 'places' array inside the object sent by the API
      let output = '';
      data.places.forEach(place => {
        output += `
        <article class="message is-primary">
          <div class="message-header">
            <p>Location Info</p>
            <button class="delete"></button>
          </div>
        <div class="message-body">
            <ul>
              <li><strong>City: </strong>${place['place name']}</li>
              <li><strong>State: </strong>${place.state}</li>
              <li><strong>Longitude: </strong>${place.longitude}</li>
              <li><strong>Latitude: </strong>${place.latitude}</li>
            </ul>
         </div>
        </article>
        `;
      });

      // Insert into output div
      document.querySelector('#output').innerHTML = output;
    })
    // Catch an error and just log it
    // eslint-disable-next-line no-console
    .catch(error => console.log(error));

  // Prevent default form bevahior
  event.preventDefault();
}

function deleteLocation(event) {
  // Check if item clicked has class name of delete
  if (event.target.className === 'delete') {
    // Remove the message box from the DOM
    document.querySelector('.message').remove();

    // Clear input field
    document.querySelector('.zip').value = '';
  }
}

// Listen for form submit
document.querySelector('#zip-form').addEventListener('submit', getLocationInfo);

// Listen for click of delete button
document.querySelector('body').addEventListener('click', deleteLocation);
