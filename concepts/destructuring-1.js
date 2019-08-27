// Let's use this object as reference:
const obj = {
    player: 'Andrew',
    xpPoints: 100,
    isWizardLevel: false
}

const player = obj.player;
const experience = obj.xpPoints;
const isWizardLevel = obj.isWizardLevel;

// Destructured version
const { player, experience } = obj;
// Reads as const, player and experience from the object
// This does the same thing as const player = obj.player; & const experience = obj.xpPoints;
// Steps:
// You just select the properties you want from an object.
// Now we have access to:
const player; 
const xpPoints;
// Same goes for isWizardLevel
let { isWizardLevel } = obj;


// ANOTHER EXAMPLE:
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};
const { firstName, lastName, age, eyeColor } = person;