// Variable for input field
let input = document.querySelector('#lbsInput');

// Variables for card
let grams = document.querySelector('#gramsOutput');
let kilo = document.querySelector('#kgOutput');
let ounce = document.querySelector('#ozOutput');

// Select the output container and hide it by default
let output = document.querySelector('#output');
output.style.visibility = 'hidden';

// Listen for event type input
input.addEventListener('input', function(){

    // Set visibility of the card/output container back to visible
    output.style.visibility = 'visible';

    // Conversion
    grams.innerHTML = Number(input.value * 453.592);
    kilo.innerHTML = Number(input.value / 2.205);
    ounce.innerHTML = Number(input.value * 16);
})


/* 

BRAD'S SOLUTION FOR REFERENCE

document.getElementById("output").style.visibility = "hidden";

document.getElementById("lbsInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let lbs = e.target.value;
  document.getElementById("gramsOutput").innerHTML = lbs / 0.0022046;
  document.getElementById("kgOutput").innerHTML = lbs / 2.2046;
  document.getElementById("ozOutput").innerHTML = lbs * 16;
});

*/