const name = 'Jon Snow';

const obj3 = {
  [name]: 'Hello!',
  ['Ray' + 'Smith']: 'Hihi'
};

// Now, in ES6 you can have instead of the old way of having just 'player' or 'experience' or 'wizardLevel', we can have something dynamic that we can assign like 'john snow' to [name]
// Run obj3 in the console and we get {John Snow: 'Hello!', RaySmith: 'Hihi}
// This is very useful if you need to calculate something for the property value.

// Cooler way
const a = 'Simon'; // String
const b = true; // Boolean
const c = {}; // Empty objet

// Adding above variables to object
// If the property and the value are the same, we can just do this:
const obj4 = { a, b, c };
