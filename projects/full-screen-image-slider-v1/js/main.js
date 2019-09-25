const sliderImages = document.querySelectorAll('.slide');
const leftArrowBtn = document.querySelector('#arrow-left');
const rightArrowBtn = document.querySelector('#arrow-right');
let current = 0;

// Clear/reset all images
function imgReset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

// Initialize the slider
function startSlide() {
  imgReset();
  sliderImages[0].style.display = 'block';
}

// Slide left (previous)
function slideLeft() {
  imgReset();
  sliderImages[current - 1].style.display = 'block';
  current -= 1;
}

// Slide right (next)
function slideRight() {
  imgReset();
  sliderImages[current + 1].style.display = 'block';
  current += 1;
}

// Event listener for left arrow click
function prevImg() {
  // Check to see if it's at 0 (first image)
  if (current === 0) {
    // Set current equal to total number of slides
    current = sliderImages.length;
  }
  slideLeft();
}

// Next Image function
function nextImg() {
  // Check to see if it's at last image
  if (current === sliderImages.length - 1) {
    // Go back to the first image
    current = -1;
  }
  slideRight();
}

// Event listeners
leftArrowBtn.addEventListener('click', prevImg);
rightArrowBtn.addEventListener('click', nextImg);

startSlide();
