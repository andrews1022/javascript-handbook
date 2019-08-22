// Creating the database
var database = [
    {
    username: "andrew",
    password: "password1234"
}];

// Creating the newsfeed
var newsFeed = [
    {
        username: 'aryn',
        timeline: 'So tired from all that learning!'
    },
    {
        username: 'kevin',
        timeline: 'JavaScript is sooooo cool!'
    },
    {
        username: 'caroline',
        timeline: 'JavaScript is preeetyy cool!'
    },

];

var usernamePrompt = prompt('What\'s your username?');
var passwordPrompt = prompt('What\'s your password?');


// We need a function called signIn(), to validate the password
// In order to sign in, we need to check username and password
function signIn(user, pass) {
    if (user === database[0].username &&
        pass === database[0].password) {
        console.log(newsFeed);
    } else {
        alert('Sorry, wrong username and password!');
    }
}

// Calling the function
signIn(usernamePrompt, passwordPrompt);