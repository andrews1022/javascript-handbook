/* eslint-disable no-console */
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');

// Show message based on input value (if not valid)
function showMessage(message, className) {
  // Create the div to hold the message
  const div = document.createElement('div');

  // Add the classes we want to this div
  div.className = `alert ${className}`;

  // Add the text to the messae
  div.appendChild(document.createTextNode(message));

  // Get parent container (search-container)
  const searchContainer = document.querySelector('#search-container');
  // Get search
  const search = document.querySelector('#search');

  // Insert the message
  searchContainer.insertBefore(div, search);

  // Have message go away after 2 seconds
  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 2000);
}

// Search Reddit
function redditSearch(searchTerm, searchLimit, sortBy) {
  // eslint-disable-next-line prettier/prettier
  return fetch(`http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`)
    .then(response => response.json())
    .then(data => data.data.children.map(childData => childData.data))
    .catch(error => console.log(error));
}

// Truncate text (cut off at certain point)
function truncateText(text, limit) {
  // Ensure where it is cut off is at the end of the word
  const shortened = text.indexOf(' ', limit);

  if (shortened === -1) return text;
  return text.substring(0, shortened);
}

// Event listener to the form
searchForm.addEventListener('submit', event => {
  // Get search term/input
  const searchTerm = searchInput.value;

  // Get sort by value
  const sortBy = document.querySelector('input[name="sortby"]:checked').value;

  // Get results limit value
  const searchLimit = document.querySelector('#limit').value;

  // Check input making sure it isn't empty
  if (searchTerm === '') {
    // Show a message
    showMessage('Please add a search term', 'alert-danger');
  }

  // Clear input
  searchInput.value = '';

  // Search reddit
  redditSearch(searchTerm, searchLimit, sortBy).then(results => {
    // Output results into the UI
    let output = '<div class="card-columns">';

    // Loop through post results
    results.forEach(post => {
      // Check for preview image
      const image = post.preview
        ? post.preview.images[0].source.url
        : 'https://d.newsweek.com/en/full/1144653/reddit.png?w=1600&h=1600&q=88&f=ddac04ba445948d88075694066c3224d';

      output += `
        <div class="card">
          <img src="${image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${truncateText(post.selftext, 100)}</p>
            <a href="${post.url}" target="_blank" class="btn btn-primary">Go There</a>
            <hr>
            <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span> 
            <span class="badge badge-dark">Score: ${post.score}</span>
          </div>
        </div>
      `;
    });
    output += '<div>';

    // Grab results div
    document.querySelector('#results').innerHTML = output;
  });

  event.preventDefault();
});
