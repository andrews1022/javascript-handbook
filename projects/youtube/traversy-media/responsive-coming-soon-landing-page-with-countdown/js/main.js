// Grab the div with class of 'countdown'
const countdownBox = document.querySelector('.countdown');

// Set the launch date in miliseconds
const launchDate = new Date('Jan 1, 2020 12:00:00').getTime();

// Update every second
const timeInterval = setInterval(() => {
  // Get today's date and time in miliseconds
  const todayDate = new Date().getTime();

  // Distance from now to launch date in miliseconds
  const timeBetweenDates = launchDate - todayDate;

  // Time calcuations (get days, hours, etc.)
  const days = Math.floor(timeBetweenDates / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeBetweenDates % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeBetweenDates % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeBetweenDates % (1000 * 60)) / 1000);

  // Display the result:
  countdownBox.innerHTML = `
    <div>${days}<span>Days</span></div> 
    <div>${hours}<span>Hours</span></div>
    <div>${minutes}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
  `;

  // Check if time/date has passed
  if (timeBetweenDates < 0) {
    // stop the countdown
    clearInterval(timeInterval);

    // style and output text
    countdownBox.style.color = '#17a2b8';
    countdownBox.innerHTML = 'Launched!';
  }
}, 1000);
