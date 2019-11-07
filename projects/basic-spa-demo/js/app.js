// Grab elements
const contentDiv = document.querySelector('#content');
const navLinks = document.querySelectorAll('.link');

// Load content function
const loadContent = async function () {
  try {
    // Handle initial page load
    const response = await fetch('pages/index.html');
    const data = await response.text();
    contentDiv.innerHTML = data;

    // Loop through and add event listener to each nav link
    for (let i = 0; i < navLinks.length; i++) {
      document.querySelectorAll('.link')[i].addEventListener('click', async function (event) {
        // Prevent default link behavior
        event.preventDefault();

        // Get href value
        const page = this.getAttribute('href');

        // Fetch data dynamically and insert content into div based on which link is clicked
        const response = await fetch(`pages/${page}.html`);
        const data = await response.text();
        contentDiv.innerHTML = data;
      });
    }
  } catch (error) {
    console.log(`Oops! This is your error: ${error}`);
  }
}

// Run function on window load
window.onload = loadContent();