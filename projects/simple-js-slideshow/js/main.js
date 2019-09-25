let i = 0; // Starting point
const images = []; // Our images array
const time = 2500; // Time spent on each slide

// Image List
images[0] = 'http://lorempixel.com/400/200/animals';
images[1] = 'http://lorempixel.com/400/200/sports';
images[2] = 'http://lorempixel.com/400/200/food';
images[3] = 'http://lorempixel.com/400/200/people';

// Change the images
function changeImg() {
  document.slide.src = images[i];

  // Check if last index
  if (i < images.length - 1) {
    // If true, increment
    i += 1;
  } else {
    i = 0;
  }

  // Run function every x seconds
  // eslint-disable-next-line no-implied-eval
  setTimeout('changeImg()', time);
}

// Run function when page loads
window.onload = changeImg;
