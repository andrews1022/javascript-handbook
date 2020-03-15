// UI elements
const celsius = document.querySelector('#celsius-input');
const fahrenheit = document.querySelector('#fahrenheit-input');
const kelvin = document.querySelector('#kelvin-input');
const inputs = document.querySelectorAll('.temp-input');

// For each
inputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (input.id === 'celsius-input') {
      fahrenheit.value = ((parseInt(celsius.value, 10) * 1.8) + 32).toFixed(2);
      kelvin.value = ((parseInt(celsius.value, 10)) + 273.15).toFixed(2);
    } else if (input.id === 'fahrenheit-input') {
      celsius.value = ((parseInt(fahrenheit.value, 10) - 32) / 1.8).toFixed(2);
      kelvin.value = (((parseInt(fahrenheit.value, 10) - 32) / 1.8) + 273.15).toFixed(2);
    } else if (input.id === 'kelvin-input') {
      celsius.value = ((parseInt(kelvin.value, 10)) - 273.15).toFixed(2);
      fahrenheit.value = (((parseInt(kelvin.value, 10) - 273.15) * 1.8) + 32).toFixed(2);
    }
  });
});
