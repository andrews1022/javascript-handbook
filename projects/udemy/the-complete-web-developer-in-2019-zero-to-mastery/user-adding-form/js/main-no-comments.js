// FORM SCRIPT
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const message = document.querySelector('.msg');
const userList = document.querySelector('#users');

function onSubmit(event) {
  event.preventDefault();

  if (nameInput.value === '' || emailInput === '') {
    message.classList.add('error');
    message.innerHTML = 'Please enter all fields!';

    setTimeout(() => message.remove(), 1500);
  } else {
    const li = document.createElement('li');

    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    userList.appendChild(li);

    nameInput.value = '';
    emailInput.value = '';
  }
}

myForm.addEventListener('submit', onSubmit);
