// Grab a nav element with class of nav
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
