// How to write a basic object
var user = {
    name: 'Andrew',
    age: 26,
    hobby: 'web development',
    isMarried: false
};
// Objects have properties and values
// Above, name would be the property and 'Andrew' would be the value
// The last property and value pair does not need a , after it

// GRABBING SPECIFIC PARTS OF THE OBJECT
// Use [object-name].[object-property]
console.log(user.name);
console.log(user.age);
console.log(user.hobby);
console.log(user.isMarried);

// OBJECT METHODS
// Copy and paste the user object code into the console
// Then copy and paste each line below to see the difference

// Add a property
user.favouriteFood = 'spinach';

// Change a property
user.isMarried = true;


// You can have an array as an object property
var wizard = {
    name: 'Tim',
    age: 300,
    hobby: 'finding the holy grail',
    isMarried: false,
    spells: ['fire', 'water', 'electricity', 'corrosion', 'explosion'],

    // You can even have functions as a property inside an object
    shout: function(){
        console.log('FUS ROH DAH!');
    }
    // Call the function using: wizard.shout();

    // But a function inside an object is actually called a METHOD
    // So .shout is a METHOD of the wizard object
}

// Access the 'water' spell
wizard.spells[1];

// You can also have an array objects
var users = [
    {
        username: 'andrew',
        password: 'secret'
    },
    {
        username: 'aryn',
        password: '123'
    }
];

// Access andrew's password
users[0].password;

// You can have empty objects
var newWizard = {};
// This means there is nothing inside the object, or NULL (written as null)