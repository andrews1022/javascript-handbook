// IIFE stands for Immediately Invoked Function Expression

// Standard function
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();

// IIFE
(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

console.log(score); // again, cannot read this variable because of the scope chain. It only goes from child to parent, not parent to child

// We can also pass arguments into the IIFE
// So we can extend our function by adding a parameter called goodLuck to the game, and the more goodLuck, the higher chance of winning
(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);