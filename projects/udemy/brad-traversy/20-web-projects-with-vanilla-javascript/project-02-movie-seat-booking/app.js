// UI Variables
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('#count');
const total = document.querySelector('#total');
const movieSelect = document.querySelector('#movie');

// Populate UI with data saved in localStorage
const populateUI = () => {
  // Get selectedSeats from localStorage and convert back to an array
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  // Check if there any seats in localStorage
  if (selectedSeats !== null && selectedSeats.length > 0) {
    // For any that are there, loop through the seats
    seats.forEach((seat, index) => {
      // On each of the index values, add the selected class
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  // Grab index of movie inside select list from local storage
  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  // Set the selected movie based on localStorage value
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
};

populateUI();

// Save selected movie index and price
const setMovieData = (movieIndex, moviePrice) => {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
};

// Update total and count in realtime
const updateSelectedCountAndTotal = () => {
  // Select all selected seats
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  // Store ticket price
  const ticketPrice = +movieSelect.value; // Use + is same as parseInt(), converting to a number

  // Copy selected seats into an array
  // Map through that array
  // Return new array of indexes
  // Return the index of the seats selected
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  // Store it in localStorage
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  // Get the length of selectedSeats
  const selectedSeatsCount = selectedSeats.length;

  // Update count and total
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
};

// Add class to seat when clicked on
// More performant to add event listener to container than to loop through every seat with a forFeach
container.addEventListener('click', (e) => {
  // If the target is an OPEN seat (has a class of seat AND does NOT have the occupied class)
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    // Add the selected class
    e.target.classList.toggle('selected');

    updateSelectedCountAndTotal();
  }
});

// Watch for when user selects a different movie from the <select>
movieSelect.addEventListener('change', (e) => {
  // Store ticket price
  let ticketPrice = +movieSelect.value; // Use + is same as parseInt(), converting to a number

  ticketPrice = +e.target.value;

  // Store index of movie in select list
  setMovieData(e.target.selectedIndex, e.target.value);

  updateSelectedCountAndTotal();
});

// Initial count and total set from local Storage
updateSelectedCountAndTotal();
