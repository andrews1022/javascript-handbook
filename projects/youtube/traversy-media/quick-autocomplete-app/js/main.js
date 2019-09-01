// Grab DOM elements
const search = document.querySelector('#search');
const matchList = document.querySelector('#match-list');

// Search the states.json and filter it
const searchStates = async searchText => {
  // How to bring in JSON data using fetch() API:
  const response = await fetch('../data/states.json');
  const states = await response.json();

  // Get matches to current text input
  let matches = states.filter(state => {
    const regex = new RegExp(`^${searchText}`, 'gi'); // the ^ represents 'starts with'

    // Return array that matches above
    return state.name.match(regex) || state.abbr.match(regex);
  });

  // If search box is empty, display empty array
  if(searchText.length === 0) {
    matches = [];
    matchList.innerHTML = '';
  }

  outputHtml(matches);
}

// Show results in HTML
const outputHtml = matches => {
  if(matches.length > 0) {
    const html = matches.map(match => `
      <div class="card card-body mb-4">
        <h4>${match.name} (${match.abbr}) <span class="text-primary">${match.capital}</span></h4>
        <small>Lat: ${match.lat} / Long: ${match.long}</small>
      </div>
    `).join(''); // can use .join turn an array of HTML strings into actual strings

    matchList.innerHTML = html;
  }
}

// Every time we type into the text box, we need to fire an event listener
search.addEventListener('input', () => searchStates(search.value));