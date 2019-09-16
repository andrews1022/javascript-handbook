// Grab DOM Elements
const searchBox = document.querySelector('#search');
const matchList = document.querySelector('#match-list');

// Search the countries.json file and filter it
const searchCountries = async searchText => {
  // Bring in the data
  const response = await fetch('../data/countries.json');
  const countries = await response.json();

  // Get matches to current text input
  let matches = countries.filter(country => {
    const regex = new RegExp(`^${searchText}`, 'gi');

    // Return array that matches above
    return country.country.match(regex) || country.abbreviation.match(regex);
  });

  // If search Box is empty, display empty array
  if (searchText.length === 0) {
    matches = [];
    matchList.innerHTML = '';
  }

  outputHtml(matches);
};

// Show Results in HTML
const outputHtml = matches => {
  if (matches.length > 0) {
    const html = matches
      .map(
        match => `
      <div class="card mb-3">
        <div class="card-body">
          <h3 class="card-title mr-2">${match.country} <span class="abbr">${match.abbreviation}</span></h3>
          <p class="card-text"><i class="fas fa-phone mr-2 fa-fw js-icon"></i> Calling Code: ${match.calling_code}</p>
          <p class="card-text"><i class="fas fa-city mr-2 fa-fw js-icon"></i> Capital City: ${match.city}</p>
          <p class="card-text"><i class="fas fa-atlas mr-2 fa-fw js-icon"></i> Continent: ${match.continent}</p>
          <p class="card-text"><i class="fas fa-coins mr-2 fa-fw js-icon"></i> Currency Code: ${match.currency_code}</p>
          <p class="card-text"><i class="fas fa-money-bill-wave mr-2 fa-fw js-icon"></i> Currency Name: ${match.currency_name}</p>
          <p class="card-text"><i class="fas fa-wifi mr-2 fa-fw js-icon"></i> Domain: ${match.tld}</p>
          <p class="card-text"><i class="fas fa-user-tie mr-2 fa-fw js-icon"></i> Government: ${match.government}</p>
          <p class="card-text"><i class="fas fa-user-clock mr-2 fa-fw js-icon"></i> Life Expectancy: ${match.expectancy}</p>
          <p class="card-text"><i class="fas fa-map-marked-alt mr-2 fa-fw js-icon"></i> Location: ${match.location}</p>
          <p class="card-text"><i class="fas fa-utensils mr-2 fa-fw js-icon"></i> National Dish: ${match.dish}</p>
          <p class="card-text"><i class="fas fa-users mr-2 fa-fw js-icon"></i> Population: ${match.population}</p>
          <p class="card-text"><i class="fas fa-glass-cheers mr-2 fa-fw js-icon"></i> Year of Independence: ${match.independence}</p>
        </div>
      </div>
    `
      )
      .join('');

    matchList.innerHTML = html;
  }
};

// Event listener
searchBox.addEventListener('input', () => searchCountries(searchBox.value));
