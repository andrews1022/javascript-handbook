// ------------------------------ PART 3 ------------------------------

// HTML FOR REFERENCE:
<div>
  <h1 class="header">Events and callbacks are SO fun</h1>
  <button id="btn-one">Button 1</button>
  <button id="btn-two">Button 2</button>
</div>

// Check out this code sample here:
window.addEventListener('load', function(event){
  console.log('All resources have finished loading!');
})
   
// What this does is it adds an event listener to the window object
// The listener waits for the ‘load’ event, and then once that event has been triggered, it calls the function in the second parameter
// And that function passes in an event object 
// That function in the second parameter is a callback

// A callback, put simply, is a function that's passed into another function, and is called after something occurs 
// With regards to events, the callback is an event handler.

// Setting up an event handler:
  // Select the button element
  // Add an event listener
  // Name the event
  // Put the results in a callback

// Event handler for Button 1
document.querySelector('#btn-one').addEventListener('click', function (){
  console.log('You have clicked da button!');
});
// ---------- BREAKDOWN ----------
// First, grab/select the element
// Add an event listener
// The event we will wait for is a click
// Then, in the second parameter, we put our function
// We won't pass anything into this function at this point
// To keep it simple, we simply console.log a message

// Event handler for Button 2
document.querySelector('#btn-two').addEventListener('mouseover', function(){
  // Let's change the text:
  document.querySelector('#btn-two').innerText = "I have been hovered!";
})
// Fun fact: the function in the second parameter is called an anonymous function because it doesn't actually have a name.

// As mentioned in lecture 11, you can also make your own custom events
// They don't happen as often as standard events in regular development, but they're still good to know.
// Example:

// Creating our event with a custom event called timeEvent
// And then we will call the function stateTime
document.body.addEventListener('timeEvent', stateTime);

// The function will pass an event object
function stateTime(event) {
  // Here, we will alert some data about event
  alert(`The event time is ${event.detail}`);
}

// Let's a new custom event object
// This is a special javascript object for custom events and we're going to call this event timeEvent just like we did above.
var myEvent = new CustomEvent('timeEvent', {
  // In this timeEvent, we're going to make it have a certain type of data.
  // Let's just call it detail and we'll just put new Date
  'detail': new Date()
  // Now what this does is it creates the custom event
  // This timeEvent has the property 'detail' 
  // That property consists of a new date 
  // When you create a new date object, that just gets the current time and date in JavaScript
});

// BREAKDOWN:
// So, when you wait for the event, you call the function 'stateTime' 
// 'stateTime' takes in an event object.
// And that's this custom event 'myEvent'
// So event will just end up being a variation of 'myEvent'
// This custom event has a name, 'timeEvent', just like the one we are listening for
// And it has the property detail which gives us the custom time

// Finally, we need the body object to DISPATCH the event:
document.body.dispatchEvent(myEvent);
