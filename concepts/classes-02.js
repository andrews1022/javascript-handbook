// ------------------------------ PART 2 ------------------------------

// Create two classes: an Animal class and a Mammal class. 
// Create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
	constructor(name, type, color) {
		this.name = name;
		this.color = color;
		this.type = type;
	}
}

class Mammal extends Animal {
	constructor(name, type, color) {
		super(name, type, color)
	}
	sound() {
		console.log(`Moooo I'm ${this.name}, and I'm a ${this.color} ${this.type}!`);
	}
}

const cow = new Mammal('Shelly', 'cow', 'brown');