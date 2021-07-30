// The singleton pattern is actually another variation of the module pattern that uses an IIFE too, but it's a little different where it's use to create objects, but you can only instantiate the object once
// A singleton object is an immediate anonymous function and it can only return one instance of an object at a time

// An example of why you may want to use a singleton is maybe you only want for instance one user object created at a time maybe a logged in user
// It would prevent you from having two users from being created at once

// Basic example
const Singleton = (function () {
	let instance;

	function createInstance() {
		const object = new Object({ name: 'Brad' });
		return object;
	}

	return {
		getInstance: function () {
			if (!instance) {
				instance = createInstance();
			}
			return instance;
		}
	};
})();

// Instantiate an object
const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();
console.log(instanceA);
console.log(instanceA === instanceB); // Returns true
