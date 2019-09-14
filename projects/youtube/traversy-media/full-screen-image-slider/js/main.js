// Select DOM elements
const slides = document.querySelectorAll('.slide'); // Select all slides
const next = document.querySelector('#next'); // Select next button
const prev = document.querySelector('#prev'); // Select previous button

// Option to scroll automatically:
const auto = false; // set to false to deactivate, and true to activate
const intervalTime = 3500;
let slideInterval;

// Next Slide Function
const nextSlide = () => {
  // Grab the current element (div with class of current)
  const current = document.querySelector('.current');

  // Remove current class
  current.classList.remove('current');

  // Check for next slide
  if (current.nextElementSibling) {
    // If true, add current class to sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // If at the end, go back to the beginning and add current to the first div agin
    // Add on to our slides variable, the first index location (first div)
    slides[0].classList.add('current');
  }

  // Remove the current class again with a delay
  setTimeout(() => current.classList.remove('current'));
};

// Previous Slide Function
const prevSlide = () => {
  // Grab the current element (div with class of current)
  const current = document.querySelector('.current');

  // Remove current class
  current.classList.remove('current');

  // Check for previous slide
  if (current.previousElementSibling) {
    // If true, add current class to sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // If at the start, go back to the last slide and add current to the last div agin
    // Add on to our slides variable, the last index location (first div)
    // Can use .length - 1 instead of a hard coded number
    slides[slides.length - 1].classList.add('current');
  }

  // Remove the current class again with a delay
  setTimeout(() => current.classList.remove('current'));
};

// Next slide event listener
next.addEventListener('click', () => {
  nextSlide();

  // Reset interval if auto is true
  if (auto) {
    // Clear interval first - clearInterval is a JavaScript method
    clearInterval(slideInterval);

    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Previous slide event listener
prev.addEventListener('click', () => {
  prevSlide();

  // Reset interval if auto is true
  if (auto) {
    // Clear interval first - clearInterval is a JavaScript method
    clearInterval(slideInterval);

    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto-slide
// Check the value of auto first
if (auto) {
  // Run the next slide at specified interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
