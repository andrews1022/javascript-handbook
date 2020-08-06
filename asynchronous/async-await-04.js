// ------------------------------ PART 4 ------------------------------
// Convert the below promise into async/await
fetch('https://swapi.co/api/starships/9/')
  .then((response) => response.json())
  .then(console.log(response));

// Converted:
async function fetchStarship() {
  const response = await fetch('https://swapi.co/api/starships/9/');
  const data = await response.json();
  console.log('Your starships: ', data);
}
