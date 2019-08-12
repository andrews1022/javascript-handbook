// Formula for Celsius
const celsius = (degreeFahrenheit - 32) * (5 / 9);

// Formula for Fahrenheit
const fahrenheit = (degreeCelsius * (9 / 5)) + 32;

// Make sure to use this to round Celsius value down:
Math.floor(celsius);
// Example:
anElement.textContent = Math.floor(celsius);