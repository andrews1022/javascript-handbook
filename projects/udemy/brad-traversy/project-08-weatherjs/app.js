// Initialize storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Initialize Weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Initialize UI object
const ui = new UI();

// Change location event
document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Change location
  weather.changeLocation(city, state);

  // Set location in Local Storage
  storage.setLocationData(city, state);

  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});

function getWeather() {
  // Treat this as a Promise
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);
