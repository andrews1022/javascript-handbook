fetch('/sanfran.json')
  .then((result) => { 
    console.log(result);
    return result.json(); // .json also returns a promise
  })
  .then((data) => {
    console.log(data); // data is now the entire object returned
    console.log(`City: ${data.title}`);
    console.log(`Temperatures were between ${data.consolidated_weather[0].min_temp}C and ${data.consolidated_weather[0].max_temp}C today.`);
  })
  .catch((error) => console.log(error));

// The fetch api automatically returns a promise
// And so we just need to consume it, which we can do with the .then method



// Make the above into a more resuable function:
function getWeather(woeid) {
  fetch(woeid)
  .then((result) => { 
    console.log(result);
    return result.json(); // .json also returns a promise
  })
  .then((data) => {
    console.log(data); // data is now the entire object returned
    console.log(`City: ${data.title}`);
    console.log(`Temperatures were between ${data.consolidated_weather[0].min_temp}C and ${data.consolidated_weather[0].max_temp}C today.`);
  })
  .catch((error) => console.log(`Error: ${error}`));
}

getWeather('/london.json');

// Produce an error
getWeather('/london.jsson'); // Produces a 404 (not found) error


// *NOTE* THIS FILE USED A LOCAL JSON FILE AT TIME OF WRITING - RESULTS MAY VARY