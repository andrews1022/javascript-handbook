function HumanV2(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = new Date(dateOfBirth);

    // We can add methods, which are essentially functions to this person object
    this.getBirthYear = function(){
        return this.dateOfBirth.getFullYear(); // We can still access the objects properties using 'this'
    }

    // Another examaple:
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// PROTOTYPES
// Prototypes are other objects, but we can attach methods and properties to the prototype
HumanV2.prototype.getBirthYear = function(){
    return this.dateOfBirth.getFullYear();
}

HumanV2.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}