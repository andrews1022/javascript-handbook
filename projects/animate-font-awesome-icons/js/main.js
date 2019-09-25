// ------------------------------ ANIMATING BROKEN CHAIN ------------------------------
function breakChain() {
  // Target the div with id of chain
  const chain = document.querySelector('#chain');

  // Take the chain variable and set unicode
  chain.innerHTML = '&#xf0c1;';

  // Timeout to change to broken chain
  setTimeout(() => {
    chain.innerHTML = '&#xf127;';
  }, 1000);
}

// Run the breakChain function
breakChain();

// Break the chain every 2 seconds:
setInterval(breakChain, 2000);

// ------------------------------ ANIMATING BATTERY ------------------------------
function batteryCharge() {
  // Grab the battery div
  const battery = document.querySelector('#battery');

  // Set innerHTML
  battery.innerHTML = '&#xf244;';

  // Set timeout functions
  setTimeout(() => {
    battery.innerHTML = '&#xf243;';
  }, 1000);

  setTimeout(() => {
    battery.innerHTML = '&#xf242;';
  }, 2000);

  setTimeout(() => {
    battery.innerHTML = '&#xf241;';
  }, 3000);

  setTimeout(() => {
    battery.innerHTML = '&#xf240;';
  }, 4000);
}

// Run battery charge function
batteryCharge();

// Run battery charge animation every 5 seconds
setInterval(batteryCharge, 5000);

// ------------------------------ ANIMATING HOURGLASS ------------------------------
function hourglassTip() {
  // Grab the hourglass div
  const hourglass = document.getElementById('hourglass');

  // Set innerHTML
  hourglass.innerHTML = '&#xf251;';

  // Set timeout functions
  setTimeout(() => {
    hourglass.innerHTML = '&#xf252;';
  }, 1000);

  setTimeout(() => {
    hourglass.innerHTML = '&#xf253;';
  }, 2000);
}

// Run hourglass animation
hourglassTip();

// Run hourglass animation every 3 seconds
setInterval(hourglassTip, 3000);
