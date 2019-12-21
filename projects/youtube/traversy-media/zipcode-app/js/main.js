async function getLocationInfo(event) {
  // Prevent default form bevahior
  event.preventDefault();

  try {
    // Get input value
    const zipValue = document.querySelector('#zip-enter').value;

    // Fetch response and data variables
    const response = await fetch(`https://api.zippopotam.us/us/${zipValue}`);
    const data = await response.json();

    // Check if response status is not equal to 200
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
      // Otherwise we output the data into the DOM as seen here
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
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
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
