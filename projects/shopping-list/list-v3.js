let button = document.getElementById('enter'); 
let input = document.getElementById('user-input'); 
let ul = document.getElementById('item-list'); 

function inputLength() {
    return input.value.length;
}

function createListElement() {
    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(input.value));
    ul.appendChild(listItem);
    input.value = '';
}

function addListAfterClick(){
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event){
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);


/* ----------------------------------------------------

CODE BREAKDOWN (NOTES/REMINDERS)

We started off with selecting the elements that we're interested in - the button, text input, and ul

We then have a bunch of function declarations but these are never run because they're just saying 'hey we have this function but nobody has run them yet'.

And the program goes to the bottom and says 'Hey, add an event listener for click if anybody ever clicks on the button', and then run this function: addListAfterClick.

And if anybody ever has the key press on the input call this function: addListAfterKeypress.

And now every time we click this it gets triggered and it goes over here says 'Hey is input length greater than zero?' and if it is, create a list element.

And if I ever have a key press it checks to see if it's the input is greater than zero. Then I check to see if I press the enter key and then I create a list element

---------------------------------------------------- */