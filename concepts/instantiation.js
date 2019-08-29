// -------------------- Instantiation --------------------
// 'Instantiation' is when you make a copy of an object and reuse the code.

// First use of class
// You must capitalize your class name
// Let's say we want to make players for a big multiplayer game
class Player {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi! I am ${this.name}, and I am a ${this.type}.`)
	}
}
// When you create a a 'Player', 'class' it says every time we're making a copy of a 'Player' the first thing that gets run is the 'constructor' function
// The 'constructor' function is gonna create these properties on the 'Player' object.
// So 'name' and 'type'.
// Furthermore, now we're saying, this 'Player' class, any player that we create will always be able to introduce himself and they'll also have 'this' 'name' and 'this.type'.

// So now, let's create a player that is a wizard
// This line below reads as we want 'wizard' to extend whatever 'Player' has.
class Wizard extends Player {
	constructor(name, type) {
		// Any time we extend something we need to also call the 'constructor' function of the 'Player' class.
		// We have to do something called 'super' with the properties that we want to pass to the 'constructor'.
		// In this case, 'name' and 'type',
		super(name, type);
		// Again, whenever you 'extend' a class, you want to use super so that you essentially have access to these (what's inside of the constructor function from the extended class)
	}
	play() {
		console.log(`WEEEEEE! I'm a ${this.type}!`);
	}
}

// Now let's see this in action
const wizard1 = new Wizard('Shelly', 'Healer');
wizard1.play();
wizard1.introduce();

const wizard2 = new Wizard('Sean', 'Dark Magician');
wizard2.play();
wizard2.introduce();