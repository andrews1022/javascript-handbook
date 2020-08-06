// Grab content div element
const contentDiv = document.querySelector('#content');

// Handle initial page load
// function loadInitialPage() {
//   fetch('pages/index.html')
//     .then(function (response) {
//       return response.text();
//     })
//     .then(function (result) {
//       contentDiv.innerHTML = result;
//     });
// }

// Run function on page load
// window.onload = loadInitialPage();

// Handle initial page load
async function initialContentLoad() {
  try {
    const response = await fetch('pages/index.html');
    const data = await response.text();
    contentDiv.innerHTML = data;
  } catch (error) {
    console.log(`Oops! Here is your error: ${error}`);

    // Show error on the screen
    contentDiv.innerHTML = `
      <h2>Oops! Something went wrong there!</h2>
      <p>${error}</p>
    `;
  }
}

// Run initialContentLoad function on page load
window.onload = initialContentLoad();

// -------------------------------------------------------------------------------- //

// Determine number of nav links
const navLinks = document.querySelectorAll('.link');

// Loop through and add event listener to each nav link
// for (let i = 0; i < navLinks.length; i++) {
//   document.querySelectorAll('.link')[i].addEventListener('click', function (event) {
//     // Prevent default link behavior
//     event.preventDefault();

//     let page = this.getAttribute('href');

//     fetch(`pages/${page}.html`)
//       .then(function (response) {
//         return response.text();
//       })
//       .then(function (json) {
//         contentDiv.innerHTML = json;
//       });
//   });
// }

async function loadPageContent() {
  try {
    // Prevent default link behavior
    event.preventDefault();

    // Set dynamic page load variable
    let page = this.getAttribute('href');

    // fetch data dynamically and insert into content div
    const response = await fetch(`pages/${page}.html`);
    const data = await response.text();
    contentDiv.innerHTML = data;

    // Catch errors:
  } catch (error) {
    console.log(`Oops! Here is your error: ${error}`);

    // Show error on the screen
    contentDiv.innerHTML = `
      <h2>Oops! Something went wrong there!</h2>
      <p>${error}</p>
    `;
  }

  // fetch(`pages/${page}.html`)
  //   .then(function (response) {
  //     return response.text();
  //   })
  //   .then(function (json) {
  //     contentDiv.innerHTML = json;
  //   });
}

// Loop through and add event listener to each nav link
for (let i = 0; i < navLinks.length; i++) {
  document.querySelectorAll('.link')[i].addEventListener('click', loadPageContent);
}
