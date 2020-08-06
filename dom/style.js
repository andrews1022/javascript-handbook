// Change a nav element to have a background colour of red
const nav = document.querySelector('.nav');
nav.style.background = 'red';

// Why use this? Why not just CSS?
// We can use JavaScript and use events and functions and make this dynamic
// For example, click on one thing and have the color on something else change, or it's size, etc.
// But be careful of Separation of Concerns!

// However, if the property is being inherited or specified by a CSS rule, we need to get its computed style
const navStyles = window.getComputedStyle(nav);

// And then check if it's display is none or block, to show or hide the nav, using .getPropertyValue()
if (navStyles.getPropertyValue('display') === 'none') {
  // If it is, set it to 'block' (open the menu)
  nav.style.display = 'block';
} else {
  // Else, set it to 'none' (close the menu)
  nav.style.display = 'none';
}
