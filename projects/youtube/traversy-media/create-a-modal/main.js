// Get elements from the DOM and put into variables
const modal = document.querySelector('#simple-modal');
const openBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close-btn');

// Open the Modal
function openModal() {
  modal.style.display = 'block';
}
// Close the modal
function closeModal() {
  modal.style.display = 'none';
}

// Close if clicked on the background
// Pass in an event parameter
function closeOutside(event) {
  // Check if the target is equal to modal
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

// Event Listeners
openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', closeOutside);
