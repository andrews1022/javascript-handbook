// For a complete list of events, check out the MDN Docs: https://mzl.la/1JcBR22

// EXAMPLE 1 - SIMPLE BUTTON CLICK
// Saving the button as a variable
let button = document.querySelector('.btn');

// Adding the event listener based on click the button
button.addEventListener('click', function(){
    console.log('Clicked!');
});

// Adding the event listener based on mouse enter (hovering over the button)
button.addEventListener('mouseenter', function(){
    console.log('Clicked!');
});

// Adding the event listener based on mouse enter (hovering over the button)
button.addEventListener('mouseleave', function(){
    console.log('Clicked!');
});



// EXAMPLE 2 - FORM SUBMIT BUTTON
const btn = document.querySelector('.btn');

// Let's use addEventListener
// This takes in two things: the event that we want. In this case 'click'
// The second is going to be a function that you want to run when this event happens
// Let's use an arrow function
// We need to include an event parameter, which is just 'e'
btn.addEventListener('click', (e) => { 

    // Since this a submit button for a form, we need to remove the default behavior:
    e.preventDefault();

    console.log('click'); // Notice it says 'click' in the console!

    // We can see which element that is being targeted
    // It will give us the element that the event is on
    console.log(e.target);

    // Get the class name:
    console.log(e.target.className);
});


