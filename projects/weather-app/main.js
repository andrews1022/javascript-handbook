let long;
let lat;

const locTimezone = document.querySelector('.location-timezone');
const tempDegree = document.querySelector('.temperature-degree');
const tempDescrip = document.querySelector('.temperature-description');

const tempSect = document.querySelector('.degree-section');
const tempSpan = document.querySelector('.temperature-span');

// First we need to get our lat and long coordinates
window.addEventListener('load', () => {

  // Dynamically load icons
  // Define a function and add the icon and iconID
  function setIcons(icon, iconID) {
    const skycons = new Skycons({
      color: 'white'
    });

    // Replace every - with an _ in the data we retrieve
    // Set the icon to that retrieved data
    const currentIcon = icon.replace(/-/g, '_').toUpperCase();

    // Animate the icon
    skycons.play();

    return skycons.set(iconID, Skycons[currentIcon]);
  }

  // Obtain location of user
  // User must click OK on allow location
  if (navigator.geolocation.getCurrentPosition) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      // Proxy to allow requests from local hosts
      const proxy = 'http://cors-anywhere.herokuapp.com/';

      // Create variable for API key from Dark Sky API
      // Insert lat and long variables using backticks
      // Insert proxy to allow requests on local hosts
      const api = `${proxy}https://api.darksky.net/forecast/b5afce202876a4cca9c5fa7bba2b337e/${lat},${long}`;

      // Fetch/get the data from the api/url above
      // But this does not work without the proxy
      // Dark Sky API does not work on Local Host
      fetch(api)
        // This .then line says 'After you get this info, do something!'
        // The response inside the (), can be named whatever you want. Data, response, etc.
        .then(response => {
          // Convert to JSON
          return response.json();
        })
        .then(data => {
          const {
            temperature,
            summary,
            icon
          } = data.currently;

          // Set DOM Elements from the API
          tempDegree.textContent = temperature;
          tempDescrip.textContent = summary;
          locTimezone.textContent = data.timezone;

          // Formula for Celsius
          const celsius = (temperature - 32) * (5 / 9);

          // Set Icon
          setIcons(icon, document.querySelector('.icon'));

          // Change temperature Farenheit to Celsius and back/forth
          tempSect.addEventListener('click', () => {
            if (tempSpan.textContent === 'F') {

              // Change degree measurement
              tempSpan.textContent = 'C';

              // Change degree amount
              tempDegree.textContent = Math.floor(celsius);
            } else {
              tempSpan.textContent = 'F';
              tempDegree.textContent = temperature;
            }
          });
        });
    });
  }
});