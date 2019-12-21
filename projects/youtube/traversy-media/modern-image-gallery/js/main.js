// -------------------------- METHOD #1 (no fade in effect) 4--------------------------
// Use destructuring:
// const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')];
// imgs.forEach(img => img.addEventListener('click', (event) => { current.src = event.target.src; }));

// -------------------------- METHOD #2 (no fade in effect) --------------------------
// Grab current image
// const current = document.querySelector('#current');

// Grab all imgs
// const imgs = document.querySelectorAll('.imgs img');

// Loop through and add event listener to each image in the g
// imgs.forEach(img => img.addEventListener('click', (event) => { current.src = event.target.src; }));

// -------------------------- METHOD #3 (COMPLETE) --------------------------
// Grab current image
const current = document.querySelector('#current');

// Grab all imgs
const imgs = document.querySelectorAll('.imgs img');

// Set opacity for selected image
const opacity = 0.5;

// Set first image opacity
imgs[0].style.opacity = opacity;

// Image click function
function imgClick(event) {
  // Reset the opacity of all images
  imgs.forEach(img => (img.style.opacity = 1));

  // Change previewed image
  current.src = event.target.src;

  // Add fade in animation class
  current.classList.add('fade-in');

  // Remove fade in animation class after .5s
  setTimeout(() => current.classList.remove('fade-in'), 350);

  // Change opacity to opacity variable
  event.target.style.opacity = opacity;
}

imgs.forEach(img => img.addEventListener('click', imgClick));
