class TypeWriter {
  // The constructor is a method that runs when the object is instantiated from the class
  constructor(textElement, words, waitTime = 1500) {
    this.textElement = textElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(waitTime, 10);
    this.type();
    this.isDeleting = false;
  }

  // Type Method
  type() {
    // Get the current index of the word
    const currentIndex = this.wordIndex % this.words.length;

    // Get the full text of current word
    const fullText = this.words[currentIndex];

    // Check if deleting text
    if (this.isDeleting) {
      // Remove a character
      this.txt = fullText.substring(0, this.txt.length - 1);
    } else {
      // Add a character
      this.txt = fullText.substring(0, this.txt.length + 1);
    }
    // Insert txt into span element
    this.textElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 200;

    // Check if it's deleting
    if (this.isDeleting) {
      typeSpeed = 100;
    }
    // Check if the word is complete
    if (!this.isDeleting && this.txt === fullText) {
      // Make pause at the end
      typeSpeed = this.wait;

      // Set isDeleting to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;

      // Move to the next word
      this.wordIndex += 1;

      // Pause a bit before starting typing
      typeSpeed = 500;
    }
    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init our app
function init() {
  const textElement = document.querySelector('.txt-type');
  const words = JSON.parse(textElement.getAttribute('data-words'));
  const wait = textElement.getAttribute('data-wait');

  // Initalize the typewriter
  // eslint-disable-next-line no-unused-vars
  const writer = new TypeWriter(textElement, words, wait);
}

// Initialize - will run when the dom loads
document.addEventListener('DOMContentLoaded', init);
