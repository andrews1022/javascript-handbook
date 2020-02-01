// Person constructor
function Person(firstName, lastName, dateOfBirth) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dateOfBirth);
  
  this.calculateAge = () => {
    const difference = Date.now() - this.birthday.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// Calculate age - moved into a prototype
Person.prototype.calculateAge = function () {
  const difference = Date.now() - this.birthday.getTime();
  const ageDate = new Date(difference);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}

// Gets married
Person.prototype.getsMarried = function(newLastName){
  this.lastName = newLastName;
}

// Instantiate a new person
const john = new Person('John', 'Doe', 8 - 12 - 1990)
const mary = new Person('Mary', 'Johnson', 9 / 21 / 1981)
console.log(mary);

console.log(`Get John's age: `, john.calculateAge());
console.log(`Get Mary's full name: `, mary.getFullName());

mary.getsMarried('Smith');
console.log(`Get Mary's new married name: `, mary.getFullName());