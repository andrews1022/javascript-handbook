// Grab UI Elements
const celsius = document.querySelector('#celsius');
const fahrenheit = document.querySelector('#fahrenheit');

// Convert to celsius
function convertToCelsius() {
  celsius.value = ((fahrenheit.value - 32) * (5 / 9)).toFixed(2);
}

// Convert fahrenheit
function convertToFahrenheit() {
  fahrenheit.value = ((celsius.value * 1.8) + 32).toFixed(2);
}

// Event listeners
fahrenheit.addEventListener('input', convertToCelsius);
celsius.addEventListener('input', convertToFahrenheit);