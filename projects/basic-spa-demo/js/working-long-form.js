// Grab content div element
const contentDiv = document.querySelector('#content');

// Handle initial page load
async function initialContentLoad() {
  try {
    const response = await fetch('pages/index.html');
    const data = await response.text();
    contentDiv.innerHTML = data;
  } catch (error) {
    console.log(`Oops! Here is your error: ${error}`);
  }
}

// Run initialContentLoad function on page load
window.onload = initialContentLoad();

// -------------------------------------------------------------------------------- //

// Determine number of nav links
const navLinks = document.querySelectorAll('.link');

// Load page content based on which link is clicked
async function loadPageContent(event) {
  try {
    // Prevent default link behavior
    event.preventDefault();

    // Set dynamic page load variable
    const page = this.getAttribute('href');

    // Fetch data dynamically and insert into content div
    const response = await fetch(`pages/${page}.html`);
    const data = await response.text();
    contentDiv.innerHTML = data;

    // Catch errors:
  } catch (error) {
    console.log(`Oops! Here is your error: ${error}`);
  }
}

// Loop through and add event listener to each nav link
for (let i = 0; i < navLinks.length; i++) {
  document.querySelectorAll('.link')[i].addEventListener('click', loadPageContent);
}
