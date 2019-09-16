/* eslint-disable no-console */
// Initialize Speech Synthesis API
const synth = window.speechSynthesis;

// Grab all the DOM elements we need:
const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');
const body = document.querySelector('body');

// Initialize the voices array
let voices = [];

// Get the voices
const getVoices = () => {
  voices = synth.getVoices();

  // Loop through the voices and create an option for each one
  voices.forEach(voice => {
    // Create an option element
    const option = document.createElement('option');

    // Fill the option with the voice and language
    option.textContent = `${voice.name}(${voice.lang})`;

    // Set needed option attributes
    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);

    // Append the options to the select
    voiceSelect.appendChild(option);
  });
};

getVoices();
if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = getVoices;
}

// Speaking function
const speak = () => {
  // Check if already speaking
  if (synth.speaking) {
    console.error('Already speaking!');
    return;
  }

  // Check if an empty string or not
  if (textInput.value !== '') {
    // Add background effect
    body.style.background = '#141414 url(img/wave.gif)';
    body.style.backgroundRepeat = 'repeat-x';
    body.style.backgroundSize = '100% 100%';

    // Get speak text
    const speakText = new SpeechSynthesisUtterance(textInput.value);

    // Speak end
    speakText.onend = () => {
      console.log('Done speaking');

      // Reset background once done speaking
      body.style.background = '#141414';
    };

    // Speak error
    speakText.onerror = () => {
      console.error('Something went wrong');
    };

    // Grabbing the selected voice
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute(
      'data-name'
    );

    // Loop through voices and if it matches what is selected, then use that voice
    voices.forEach(voice => {
      if (voice.name === selectedVoice) {
        speakText.voice = voice;
      }
    });

    // Set pitch and rate
    speakText.rate = rate.value;
    speakText.pitch = pitch.value;

    // Speak it!
    synth.speak(speakText);
  }
};

// ----- Set event listeners -----
// Text form submission
textForm.addEventListener('submit', e => {
  // Prevent default form behaviour
  e.preventDefault();

  speak();

  textInput.blur();
});

// Rate value change - update text content
rate.addEventListener('change', () => (rateValue.textContent = rate.value));

// Pitch value change - update text content
pitch.addEventListener('change', () => (pitchValue.textContent = pitch.value));

// Voice select change
voiceSelect.addEventListener('change', () => speak());
