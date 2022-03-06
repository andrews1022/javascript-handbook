const fetchUsers = async () => {
	// We need to put the fetch into a variable, and add await
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await response.json();
	console.log('Your users: ', data);
};

// Call the function to log the 10 users from the API:
fetchUsers();
