// Grab DOM elements
const numberInput = document.querySelector('#number-input');
const factText = document.querySelector('#fact-text');
const factBlock = document.querySelector('#fact');

// Get number function
function getNumberFact() {
  // Get inputted number value
  const number = numberInput.value;

  // Get selected option value
  const select = document.querySelector('#selector');
  const result = select.options[select.selectedIndex].text.toLowerCase();

  if (number !== '' && result !== 'choose...') {
    fetch(`http://numbersapi.com/${number}/${result}`)
      .then(function getNumberAPIdata(response) {
        return response.text();
      })
      .then(function injectText(textData) {
        factBlock.style.display = 'block';
        factText.innerText = textData;
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  } else if (number === '') {
    factBlock.style.display = 'none';
  } else if (result === 'choose...') {
    numberInput.value = '';
    // eslint-disable-next-line no-alert
    alert('Please select an option!');
  }
}

// Add an event listener
numberInput.addEventListener('input', getNumberFact);
