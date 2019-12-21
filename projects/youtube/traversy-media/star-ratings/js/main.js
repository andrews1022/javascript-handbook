// Grab form elements
const productSelect = document.querySelector('#product-select');
const ratingControl = document.querySelector('#rating-control');

// Initialize product
let product;

// Initial ratings
const ratings = {
  sony: 4.7,
  samsung: 3.4,
  vizio: 2.3,
  panasonic: 3.6,
  phillips: 4.5
};

// Total stars
const starsTotal = 5;

// Product select change
productSelect.addEventListener('change', event => {
  // Get the product and set it to product variable from above
  product = event.target.value;

  // Enable rating control
  ratingControl.disabled = false;

  // Set rating displayed in box to rating of product selected
  ratingControl.value = ratings[product];
});

// Loop through the object and get ratings
function getRatings() {
  // Loop using a 'for in' loop
  for (const rating in ratings) {
    // Get percentage value
    // Take the object name (ratings) and pass in the index to get the number value
    const starPercentage = (ratings[rating] / starsTotal) * 100;

    // Round to nearest 10
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    // Set width of stars-inner to percentage
    document.querySelector(
      `.${rating} .stars-inner`
    ).style.width = starPercentageRounded;

    // Add number rating
    document.querySelector(`.${rating} .number-rating`).innerHTML =
      ratings[rating];
  }
}

// Rating Control Changes
// Using blur to trigger (once leaving the input)
ratingControl.addEventListener('blur', event => {
  const rating = event.target.value;

  // Make sure the rating is no more than 5
  if (rating > 5) {
    // eslint-disable-next-line no-alert
    alert('Please rate 1 - 5');
    return;
  }

  // Change rating
  ratings[product] = rating;

  // Call getRatings function
  getRatings();
});

// run getRatings function when DOM loads
document.addEventListener('DOMContentLoaded', getRatings);
