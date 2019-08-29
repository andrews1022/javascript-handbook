// Inside the ( ), we evaluate that, in this case what the color is
// To evaluate it, we use 'cases'
// Default statement - if it does not match any of the above+

// Copy and paste into console
function moveCommand(direction) {
	var whatHappens;
	
	switch (direction) {
		case 'forward':
			whatHappens = 'You encountered a monster!';
			break;
		case 'backward':
			whatHappens = 'You arrived home.';
			break;
		case 'right':
			whatHappens = 'You found a river.';
			break;
		case 'left':
			whatHappens = 'You run into a troll!';
			break;
		default:
			whatHappens = 'Please enter a valid direction';
	}
	return whatHappens;
}

// Running the different directions and testing the default (Copy and paste each into console)
moveCommand('forward');
// "You encountered a monster!"

moveCommand('backward');
// "You arrived home."

moveCommand('right');
// "You found a river."

moveCommand('left');
// "You run into a troll!"

moveCommand('sky');
// "Please enter a valid direction"

// That's what switch statements are really good for when you have a lot of conditions.
// Instead of using an 'if else', 'if else', 'if else', 'if else', 'if else' statement, you can use a 'switch' statemen and you can see, it reads nicely.

// ----------------------------------- BREAKDOWN -----------------------------------
// Create a variable 'whatHappens' then use 'switch'.
// Check whatever the condition is, in this case it's the direction.
// So the code says if the direction equals 'forward' do this, if the direction is 'back' do this. If it's 'right' do this, if it's 'left' do this.
// And it says 'default' if none of these conditions work and remember the program goes line by line so it checks 'forward' then it checks 'back' and it checks 'right' and the checks 'left'.
// And if none of those match then it says you can just default to 'Please enter a valid direction' and then we return 'whatHappenes'
// This is so that the function returns something for us.
// Now finally what the 'break'(s) simply says:
// If 'case' is 'forward' then assign 'You encountered a monster!' to 'whatHhappens' variable and then 'break'
// 'break' is just saying break out of the switch statement.
// So instead of the program then checking to see if 'case' is 'back', 'case' is 'right', 'case' is 'left' or 'default', the program stops here and then goes straight out of the switch statement to return 'whatHappens'.


// ANOTHER EXAMPLE for fun:
function yourCar(car) {
	var judgement;
	switch (car) {
		case 'Bugatti':
			judgement = 'Wow! Your car is the king!!!';
			break;
		case 'Ferrari':
			judgement = 'Wow! Your car is amazing!!';
			break;
		case 'Audi':
			judgement = 'Wow! Your car is really nice!';
			break;
		case 'Lexus':
			judgement = 'Wow! Your car is pretty good.';
			break;
		case 'Ford':
			judgement = 'Wow! Your car is...it could be better.';
			break;
		default:
			judgement = 'Wow! Don\'t talk to me unless you got them 4 wheels, son.';
	}
	return judgement;
}

yourCar('Bugatti');
yourCar('Ferrari');
yourCar('Audi');
yourCar('Lexus');
yourCar('Ford');