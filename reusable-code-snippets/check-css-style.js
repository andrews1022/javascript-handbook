const nav = document.querySelector('.nav');

// If the property is being inherited or specified by a CSS rule, we need to get its computed style
const navStyles = window.getComputedStyle(nav);

// And then check if it's display is none or block, to show or hide the nav, using .getPropertyValue()
if (navStyles.getPropertyValue('display') === 'none') {
  // If it is, set it to 'block' (open the menu)
  nav.style.display = 'block';
} else {
  // Else, set it to 'none' (close the menu)
  nav.style.display = 'none';
}

// Otherwise, we can simple use .style
nav.style.display = 'block';


// Shorthand for getPropertyValue
console.log(getComputedStyle(nav, null).getPropertyValue('color'));
// getComputedStyle takes in two arguments
// 1) The element you want the styles for
// 2) The matching pseudo element (optional, can have null if not looking for pseudo element)