/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

// Variables to keep track of the scores
var scores, roundScore, activePlayer, gamePlaying;

// Initialize the game
gameInit();
// var scores = [0, 0]; // Set both scores for each player to 0 by default using an array
// var roundScore = 0; // Keep track of the roundscore
// var activePlayer = 0; // Keep track of active player currently playing the game. 0 will be player 1, 1 will be player 2



// Select the roll dice button
document.querySelector('.btn-roll').addEventListener('click', () => {
  if (gamePlaying) { // if gameplaying is true
    // First, calculate a random number between 1-6
    var dice = Math.floor(Math.random() * 6) + 1;
  
    // Next, display the result
    // First, reset the dice image back to block
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';

    // Next, change the image source
    diceDOM.src = `dice-${dice}.png`;

    // Update the round score IF the rolled number is NOT a 1
    if (dice !== 1) {
      // Add score to round score
      roundScore += dice;
      // Display the round score in the UI
      document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
    } else {
      // If not, go to other player
      nextPlayer();
    }
  }
});


// Hold button event listener
document.querySelector('.btn-hold').addEventListener('click', () => {
  if (gamePlaying) {
    // Add current score to the global score
    scores[activePlayer] += roundScore;
  
    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
  
    // Check if the player won the game (score is more than 100)
    if (scores[activePlayer] >= 100) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
  
      // Hide the dice again
      document.querySelector('.dice').style.display = 'none';
  
      // Add winner CSS class
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
  
      // Remove active players from current panel
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
  
      // Set gamePlaying to false
      gamePlaying = false;
    } else {
      // Go to next player
      nextPlayer();
    }
  }
});

// This function:
// 1) Changes active player
// 2) Resets round score
// 3) Sets HTML text content for current score elements
// 4) Toggles the active class to style active player
// 5) Hide the dice image again
// This function is called when the hold button is clicked, and if the player rolls a 1
function nextPlayer() {
  // Change activeplayer value when the dice is rolled
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

  // Set round score back to 0
  roundScore = 0;

  // Set round score back to 0 in the UI as well
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // Make it visible in UI who is the active player (using active class)
  // Select active player, and remove active class - we can do both with toggle
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  // Hide dice again
  document.querySelector('.dice').style.display = 'none';
}

// New button event handler - call the game initialization function
document.querySelector('.btn-new').addEventListener('click', gameInit);


// Game initialization function
function gameInit() {
  // Set gameplaying state variable
  gamePlaying = true;

  // Reset scores back to score 0
  scores = [0, 0];

  // Reset activePlayer to 0
  activePlayer = 0;

  // Round score back to 0
  roundScore = 0;

  // Hide dice
  document.querySelector('.dice').style.display = 'none';

  // Set scores to 0 in the UI
  document.querySelector('#score-0').textContent = '0';
  document.querySelector('#current-0').textContent = '0';
  document.querySelector('#score-1').textContent = '0';
  document.querySelector('#current-1').textContent = '0';

  // Change back the player names to Player-#
  document.querySelector('#name-0').textContent = 'Player 1';
  document.querySelector('#name-1').textContent = 'Player 2';

  // Remove winning and active class from both players
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  // Reset first player back to active player - works in case player 1 is the winning player
  document.querySelector('.player-0-panel').classList.add('active'); 
}






// Do some manipulation
// document.querySelector(`#current-${activePlayer}`).textContent = dice; // We can now make our code dynamic, by using our activePlayer variable. This is also based off our HTML code, where we have current-0 and current-1. So when this is changed, the selector is changed on the fly as well

// Use innerHTML
// document.querySelector(`#current-${activePlayer}`).innerHTML = `<em>${dice}</em>`;