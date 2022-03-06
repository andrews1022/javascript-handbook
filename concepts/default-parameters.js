// We use default parameters whenever we want one or more parameters of a function to be preset / to have a default value

// ES5 Way
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  // Set lastName to Smith by default
  lastName === undefined ? (lastName = 'Smith') : (lastName = lastName);
  // Set nationality to Canadian by default
  nationality === undefined ? (nationality = 'Canadian') : (nationality = nationality);

  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson('John', 1990); // yearOfBirth and nationality are both undefined
console.log('ES5 using default values:', john); // But since we set a conditional, the other values are set

// But of course these values can be overridden
var emily = new SmithPerson('Emily', 1984, 'Diaz', 'Spanish');
console.log('ES5 overriding default values', emily);

// ES6 Way
// All we need to do is specify the default parameters right inside the () where we declare the parameters
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'Canadian') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

const dave = new SmithPerson('Dave', 1990); // yearOfBirth and nationality are both undefined
console.log('ES6 using default values:', dave); // But since we set a conditional, the other values are set

// But of course these values can be overridden
const jane = new SmithPerson('Jane', 1984, 'Diaz', 'Spanish');
console.log('ES6 overriding default values', jane);
