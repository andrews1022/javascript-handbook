// Function to display error in the UI
function showError(error) {
  // Hide results
  document.querySelector('#results').style.display = 'none';

  // Hide the spinner
  document.querySelector('#loading').style.display = 'none';

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Create a div
  const errorDiv = document.createElement('div');

  // Add alert classes
  errorDiv.className = 'alert alert-danger';

  // Create the text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  // insertBefore takes 2 parameters - which element you are inserting, and which element you are inserting before
  // So here, we are inserting the errorDiv before the heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 2 seconds
  setTimeout(() => {
    // Select element with class of alert and remove it
    document.querySelector('.alert').remove();
  }, 2000);
}

// Calculate the results
function calculateResults() {
  // Gram DOM elements
  const amount = document.querySelector('#amount');
  const interest = document.querySelector('#interest');
  const years = document.querySelector('#years');
  const monthlyPayment = document.querySelector('#monthly-payment');
  const totalPayment = document.querySelector('#total-payment');
  const totalInterest = document.querySelector('#total-interest');

  // Grab the input value from amount input box, and parse as a float
  const principal = parseFloat(amount.value);

  // This will be the interest value as a float
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;

  // Get the calculated payments
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute the monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  // Check if monthly is a finite number
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    // Show results
    document.querySelector('#results').style.display = 'block';

    // Hide the spinner
    document.querySelector('#loading').style.display = 'none';
  } else {
    showError('Please double check your numbers');
  }
}

// Listen for submit
document.querySelector('#loan-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Hide results
  document.querySelector('#results').style.display = 'none';

  // Show the loader GIF when button are clicked
  document.querySelector('#loading').style.display = 'block';

  // Hide after 2 seconds and run calculateResults
  setTimeout(calculateResults, 2000);
});