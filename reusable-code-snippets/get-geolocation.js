const myLocation = (position) => {
	let coordinates = position.coords;

	console.log('Your current position is:');
	console.log(`Latitude: ${coordinates.latitude}`);
	console.log(`Longitude: ${coordinates.longitude}`);
};

navigator.geolocation.getCurrentPosition(myLocation);
