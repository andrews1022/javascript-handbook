const valueBox = document.querySelector('#value');
const doubleBtn = document.querySelector('#double');

doubleBtn.addEventListener('click', () => {
  if (!isNaN(valueBox.value)) {
    valueBox.value *= 2;
  } else {
    alert('Please enter a number.');
  }
});
