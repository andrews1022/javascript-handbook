// Using async/await to fetch from the json files

async function getWeatherAW(woeid) {
  // To catch errors with asyn await, use the try/catch block

  // try for what you want to resolve
  try {
    // Store the result in a variable, and await the fetch
    // So this will fetch from the JSON file, and once the promised is fullfilled, it will then assign the result of the Promise to the result variable. And that's it!
    const result = await fetch(woeid);
    const data = await result.json();

    // Log the data
    // console.log(data);
    console.log(`City: ${data.title}`);
    console.log(`Temperatures in ${data.title} were between ${data.consolidated_weather[0].min_temp}C and ${data.consolidated_weather[0].max_temp}C today.`);

    // If you want to return the data...
    return data;

    // Catch for catching any errors
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

getWeatherAW('/london.json');
getWeatherAW('/sanfran.json');
// getWeatherAW('/sanfran.jsson'); // Throw an error on purpose

// ...store the return value like this:
let dataLondon;
getWeatherAW('/london.json').then((data) => {
  dataLondon = data;
  console.log(dataLondon);
});

// *NOTE* THIS FILE USED A LOCAL JSON FILE AT TIME OF WRITING - RESULTS MAY VARY