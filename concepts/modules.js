// Export a single thing:
export default 'I am an exported string!';

// Export multiple things:
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export const id = 23;

// Import a single thing
import string from './models/search';

// Import many things at once - MUST use the exact same names as you exported them!
import { add, multiply, id } from './models/search';

// Import many things at once - AND rename them like so using the as operator
import { add as a, multiply as b, id as c } from './models/search';

// Import EVERYTHING
import * as searchView from './models/search';

// console.log(string);

console.log(`Using imported functions! ${add(id, 2)} and ${multiply(3, 5)}. ${string}`);
console.log(`Using imported functions! ${a(c, 2)} and ${b(3, 5)}. ${string}`);
console.log(
  `Using imported functions! ${searchView.add(searchView.id, 2)} and ${searchView.multiply(
    3,
    5
  )}. ${string}`
);

// Import Axios NPM package - all we have to do is specify the name of the package
// Best practice/convention is to name your variable the same as the package name
import axios from 'axios';
