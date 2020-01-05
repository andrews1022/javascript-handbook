// includes() is used for strings, to check if they contain a specified value
'Heeelloooooooooo'.includes('o'); // Comes back as true

// Includes can also be used on arrays
const pets = ['cat', 'dog', 'fish', 'lizard'];
pets.includes('dog'); // Comes back as true as well
pets.includes('bird'); // Comes back as false, because we of course don't have a bird in our pets array