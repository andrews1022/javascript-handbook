// Calculate BMI function
const calculateBMI = (mass, height) => mass / height ** 2;

const massJohn = 59; // mass in kilograms
const heightJohn = 1.56; // height in meters

const bmiJohn = calculateBMI(massJohn, heightJohn);

// Can also just use raw numbers
calculateBMI(65, 1.8);
