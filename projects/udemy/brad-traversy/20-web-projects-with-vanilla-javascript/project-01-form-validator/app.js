// UI Variables
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

// Show input error message
const showError = (el, msg) => {
  const formControl = el.parentElement; // Get form-control parent div
  formControl.className = 'form-control error'; // Add error class

  const smallTag = formControl.querySelector('small'); // Grab small tag
  smallTag.innerText = msg;
};

// Show success outline
const showSuccess = (el) => {
  const formControl = el.parentElement; // Get form-control parent div
  formControl.className = 'form-control success'; // Add success class
};

// Check if email entered is valid
const checkEmail = (el) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex.test(el.value.trim())) {
    showSuccess(el);
  } else {
    showError(el, 'Email is not valid');
  }
};

// Return field id name
const getFieldName = (el) => {
  // Return the input id, but also uppercase the first letter
  return el.id.charAt(0).toUpperCase() + el.id.slice(1);
};

// Check required fields
const checkRequired = (elArr) => {
  // To avoid something like:
  /*
    checkRequired(username)
    checkRequired(email)
    checkRequired(password)
    checkRequired(password2)
  */
  // We will set this up to take an array of elements, and perform the action on all of them
  elArr.forEach((el) => {
    if (el.value.trim() === '') {
      showError(el, `${getFieldName(el)} is required`);
    } else {
      showSuccess(el);
    }
  });
};

// Check input length
const checkLength = (el, min, max) => {
  if (el.value.length < min) {
    showError(el, `${getFieldName(el)} must be at least ${min} characters.`);
  } else if (el.value.length > max) {
    showError(el, `${getFieldName(el)} can't be more than ${max} characters.`);
  } else {
    showSuccess(el);
  }
};

// Check passwords match
const checkPasswordsMatch = (el1, el2) => {
  if (el1.value !== el2.value) {
    showError(el2, 'Passwords do not match');
  } else {
    showSuccess(el2);
  }
};

// On form submit event listener
form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});
