// Set drum sound variables
const tom1 = new Audio('sounds/tom-1.mp3');
const tom2 = new Audio('sounds/tom-2.mp3');
const tom3 = new Audio('sounds/tom-3.mp3');
const tom4 = new Audio('sounds/tom-4.mp3');
const snare = new Audio('sounds/snare.mp3');
const crash = new Audio('sounds/crash.mp3');
const kick = new Audio('sounds/kick-bass.mp3');

// Determine number of drum buttons
const numberOfDrumButtons = document.querySelectorAll('.drum').length;

function makeSound(key) {
  // Switch statement for drum sounds - play the sound according to case/inner html of button clicked
  switch (key) {
    case 'w':
      tom1.play();
      break;

    case 'a':
      tom2.play();
      break;

    case 's':
      tom3.play();
      break;

    case 'd':
      tom4.play();
      break;

    case 'j':
      snare.play();
      break;

    case 'k':
      crash.play();
      break;

    case 'l':
      kick.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector(`.${currentKey}`);
  activeButton.classList.add('pressed');

  setTimeout(() => {
    activeButton.classList.remove('pressed');
  }, 100);
}

// Event listener for keyboard input
document.addEventListener('keydown', function keyListen(event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

// Loop through each button with a class name of 'drum' and add an event listener when clicked
for (let i = 0; i < numberOfDrumButtons; i++) {
  // eslint-disable-next-line prettier/prettier
  document.querySelectorAll('.drum')[i].addEventListener('click', function drumLoop() {
      // Define letiable for innerHTML of each button
      const buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML);

      buttonAnimation(buttonInnerHTML);
    });
}
